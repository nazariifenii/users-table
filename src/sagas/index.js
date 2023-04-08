import { all, call, put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
import Types from "../actions/types";
import API from "../api/users";
import { clearObjectValues, normalizeArrayOfEntities } from "../utils";

export function* fetchUsersData() {
  try {
    const response = yield call(API.getAllUsers);
    const normalizedData = yield call(normalizeArrayOfEntities, response);
    yield put(Actions.fetchUsersDataSuccess(normalizedData));
  } catch (error) {
    console.log("FETCH_USERS_DATA_ERROR", error);
  }
}

export function* deleteUser(action) {
  try {
    const id = action.data.id;
    const response = yield call(API.deleteUser, id);
    if (response.id === id) {
      // && resp === success
      yield put(Actions.deleteUserSuccess({ id: response.id }));
    }
  } catch (error) {
    console.log("DELETE_USER_ERROR", error);
  }
}

export function* updateUser(action) {
  try {
    const response = yield call(API.updateUser, action.data);
    yield put(Actions.updateUserSuccess(response));
    yield put(Actions.setEditUserRow({}));
  } catch (error) {
    console.log("UPDATE_USER_ERROR", error);
  }
}

export function* createUser(action) {
  try {
    const response = yield call(API.createUser, action.data);
    yield put(Actions.createUserSuccess(response));
    const clearedValues = clearObjectValues(response);
    yield put(Actions.setCreateUserRow(clearedValues));
  } catch (error) {
    console.log("UPDATE_USER_ERROR", error);
  }
}

export function* watchUsers() {
  yield takeEvery(Types.FETCH_USERS_DATA, fetchUsersData);
  yield takeEvery(Types.DELETE_USER, deleteUser);
  yield takeEvery(Types.UPDATE_USER, updateUser);
  yield takeEvery(Types.CREATE_USER, createUser);
}

export default function* rootSaga() {
  yield all([call(watchUsers)]);
}
