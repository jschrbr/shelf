import {
  INITIAL_LIST,
  SET_ITEMS_LIST,
  NEW_ITEM_ONBLUR,
  API_FETCH_ADD_ITEM,
  API_FETCH_SUCCESS_ADD_ITEM,
  API_FETCH_ERROR_ADD_ITEM,
  API_UPDATE_COMPLETE_FLAG,
  API_UPDATE_ERROR_COMPLETE_FLAG,
  API_UPDATE_SUCCESS_COMPLETE_FLAG,
  ADD_OFFLINE_LOG_ITEM,
  CLEAR_OFFLINE_LOGS,
  SHOW_OFFLINE_BANNER,
  GENERATE_RANDOM_NUMBER,
} from "../types";

const initialState = { showOfflineBanner: false, offlineLogs: [], message: "" };

export default function (state = initialState, action: any) {
  switch (action.type) {
    case INITIAL_LIST:
      return {
        ...state,
      };
    case SET_ITEMS_LIST:
      return {
        ...state,
        items: action.items,
      };
    case NEW_ITEM_ONBLUR:
      return {
        ...state,
        newItem: action.newItem,
      };
    case API_FETCH_ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case API_FETCH_SUCCESS_ADD_ITEM:
      return {
        ...state,
        loading: false,
        newItem: "",
        // items: [...state.items.splice(0, 0, action.res), ...state.items],
      };
    case API_FETCH_ERROR_ADD_ITEM:
      return {
        ...state,
        loading: false,
      };
    case API_UPDATE_COMPLETE_FLAG:
      return {
        ...state,
        loading: true,
      };
    case API_UPDATE_SUCCESS_COMPLETE_FLAG:
      // const modifiedItems = state.items.map((item)=>{
      // 	if (item._id == action.id){
      // 		return {...item,completed:!item.completed}
      // 	}
      // 	return item
      // })
      return {
        ...state,
        loading: false,
        // items: [
        //   ...state.items.map((item: any) => {
        //     if (item._id == action.id) {
        //       return { ...item, completed: !item.completed };
        //     }
        //     return item;
        //   }),
        // ],
      };
    case API_UPDATE_ERROR_COMPLETE_FLAG:
      return {
        ...state,
        loading: false,
      };
    case GENERATE_RANDOM_NUMBER:
      return {
        ...state,
        randomNumber: action.randomNumber,
      };
    case ADD_OFFLINE_LOG_ITEM:
      return {
        ...state,
        offlineLogs: [...state.offlineLogs, action.message],
      };
    case CLEAR_OFFLINE_LOGS:
      return {
        ...state,
        offlineLogs: new Array(),
        showOfflineBanner: false,
      };
    case SHOW_OFFLINE_BANNER:
      console.log(state);
      return {
        ...state,
        showOfflineBanner: true,
      };
    //----------------------------------------------------------------------------------------------------
    default:
      return {
        ...state,
      };
  }
}
