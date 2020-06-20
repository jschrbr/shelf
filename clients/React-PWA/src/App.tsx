import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/AppBar";
import home from "./pages/home";
import {
  MuiThemeProvider,
  createMuiTheme,
  ThemeOptions,
} from "@material-ui/core/styles/";
import AuthRoute from "./utils/AuthRoute";
import jwtDecode from "jwt-decode";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser } from "./redux/actions/user-actions";

import axios from "axios";

import { AppTheme } from "./utils/theme";

// Pages
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme(AppTheme() as ThemeOptions);

axios.defaults.baseURL = "https://us-central1-shelf-io.cloudfunctions.net/api";

interface Token {
  exp: number;
}

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: Token = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    // store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <NavBar headline={"Shelf.io"}></NavBar>
          <div className="App">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute component={signup} exact path="/signup" />
              <AuthRoute component={login} exact path="/login" />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
