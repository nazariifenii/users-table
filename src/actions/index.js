import types from "./types";

const fetchUsersData = () => ({
  type: types.FETCH_USERS_DATA,
});

const fetchUsersDataSuccess = (data) => ({
  type: types.FETCH_USERS_DATA_SUCCESS,
  data,
});

const deleteUser = (data) => ({
  type: types.DELETE_USER,
  data,
});

const deleteUserSuccess = (data) => ({
  type: types.DELETE_USER_SUCCESS,
  data,
});

const updateUser = (data) => ({
  type: types.UPDATE_USER,
  data,
});

const updateUserSuccess = (data) => ({
  type: types.UPDATE_USER_SUCCESS,
  data,
});

const createUser = (data) => {
  return {
    type: types.CREATE_USER,
    data,
  };
};

const createUserSuccess = (data) => ({
  type: types.CREATE_USER_SUCCESS,
  data,
});

const setEditUserRow = (data) => ({
  type: types.SET_EDIT_ROW,
  data,
});

const setCreateUserRow = (data) => ({
  type: types.SET_CREATE_USER_ROW,
  data,
});

const addNotification = (data) => ({
  type: types.ADD_NOTIFICATION,
  data,
});

const removeNotification = (data) => ({
  type: types.REMOVE_NOTIFICATION,
  data,
});

const Actions = {
  fetchUsersData,
  fetchUsersDataSuccess,
  deleteUser,
  deleteUserSuccess,
  updateUser,
  updateUserSuccess,
  createUser,
  createUserSuccess,
  setEditUserRow,
  setCreateUserRow,
  addNotification,
  removeNotification,
};

export default Actions;
