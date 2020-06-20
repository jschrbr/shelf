import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
} from "../types";
import axios from "axios";

export const loginUser = (userData: any, history: any) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: LOADING_UI });
    const res = await axios.post("/login", userData);
    setAuthorizationHeader(res.data.token);
    //   dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (err) {
    dispatch({ type: SET_ERRORS, payload: err.response.data });
  }
};

export const signupUser = (userData: any, history: any) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: LOADING_UI });
    const res = await axios.post("/signup", userData);
    setAuthorizationHeader(res.data.token);
    //   dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (err) {
    dispatch({ type: SET_ERRORS, payload: err.response.data });
  }
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

//   export const getUserData = () => async (dispatch) => {
//     try {
//       dispatch({ type: LOADING_USER });
//       const res = await axios.get("/user");
//       dispatch({ type: SET_USER, payload: res.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   export const editUserDetails = (userDetails) => async (dispatch) => {
//     try {
//       dispatch({ type: LOADING_USER });
//       await axios.post("/user", userDetails);
//       dispatch(getUserData());
//     } catch (err) {
//       console.log(err);
//     }
//   };

const setAuthorizationHeader = (token: any) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
