import { combineReducers } from "redux";
import Types from "../actions/types";

const initialState = {
  users: [],
  editRow: {},
  createUserRow: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS_DATA_SUCCESS:
      return { ...state, users: action.data };
    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.data.id),
      };
    case Types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.data.id ? action.data : user
        ),
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.data],
      };
    case Types.SET_EDIT_ROW:
      return {
        ...state,
        editRow: action.data,
      };
    case Types.SET_CREATE_USER_ROW:
      return {
        ...state,
        createUserRow: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
