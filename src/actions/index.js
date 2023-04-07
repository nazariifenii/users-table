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

export const createUser = (data) => {
    return {
    type: types.CREATE_USER,
    data,
  };
};

export const createUserSuccess = (data) => ({
  type: types.CREATE_USER_SUCCESS,
  data,
});

export const seteditUserRow = (data) => ({
  type: types.SET_EDIT_ROW,
  data,
});

export const setCreateUserRow = (data) => ({
  type: types.SET_CREATE_USER_ROW,
  data,
});
