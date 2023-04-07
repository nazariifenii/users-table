import types from "./types";

export const fetchUsersData = () => ({
  type: types.FETCH_USERS_DATA,
});

export const fetchUsersDataSuccess = (data) => ({
  type: types.FETCH_USERS_DATA_SUCCESS,
  data,
});

export const deleteUser = (data) => ({
  type: types.DELETE_USER,
  data,
});

export const deleteUserSuccess = (data) => ({
  type: types.DELETE_USER_SUCCESS,
  data,
});

export const updateUser = (data) => ({
  type: types.UPDATE_USER,
  data,
});

export const updateUserSuccess = (data) => ({
  type: types.UPDATE_USER_SUCCESS,
  data,
});

export const setEditRow = (data) => ({
  type: types.SET_EDIT_ROW,
  data,
});
