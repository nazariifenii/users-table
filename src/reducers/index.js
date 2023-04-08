import { combineReducers } from "redux";
import * as R from "ramda";
import Types from "../actions/types";

const initialState = {
  usersByIds: [],
  usersIds: [],
  editUserRow: {},
  createUserRow: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS_DATA_SUCCESS:
      return {
        ...state,
        usersByIds: action.data.entityById,
        usersIds: action.data.ids,
      };
    case Types.DELETE_USER_SUCCESS:
      const id = action.data.id;
      return {
        ...state,
        usersByIds: R.dissoc(id, state.usersByIds),
        usersIds: R.without([id], state.usersIds),
      };
    case Types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        usersByIds: R.assoc(action.data.id, action.data, state.usersByIds),
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        usersByIds: R.assoc(action.data.id, action.data, state.usersByIds),
        usersIds: [...state.usersIds, action.data.id],
      };
    case Types.SET_EDIT_ROW:
      return {
        ...state,
        editUserRow: action.data,
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
