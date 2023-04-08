import { all, call, put, takeEvery } from "redux-saga/effects";
import Actions from "../actions";
import Types from "../actions/types";
import API from "../api/users";
import { clearObjectValues, normalizeArrayOfEntities } from "../utils";
import { genToastNotification } from "../components/Toast/toastProperties";

export function* fetchUsersData() {
  try {
    const response = yield call(API.getAllUsers);
    const normalizedData = yield call(normalizeArrayOfEntities, response);
    yield put(Actions.fetchUsersDataSuccess(normalizedData));
  } catch (error) {
    yield put(
      Actions.addNotification(
        genToastNotification("error", "Error fetching all users")
      )
    );
  }
}

export function* deleteUser(action) {
  try {
    const response = yield call(API.deleteUser, action.data.id);
    yield put(Actions.deleteUserSuccess({ id: response.id }));
    yield put(
      Actions.addNotification(
        genToastNotification("success", "User deleted successfully")
      )
    );
  } catch (error) {
    yield put(
      Actions.addNotification(
        genToastNotification("error", "Error removing user")
      )
    );
  }
}

export function* updateUser(action) {
  try {
    const response = yield call(API.updateUser, action.data);
    yield put(Actions.updateUserSuccess(response));
    yield put(Actions.setEditUserRow({}));
    yield put(
      Actions.addNotification(
        genToastNotification("success", "User updated successfully")
      )
    );
  } catch (error) {
    yield put(
      Actions.addNotification(
        genToastNotification("error", "Error updating user")
      )
    );
  }
}

export function* createUser(action) {
  try {
    const response = yield call(API.createUser, action.data);
    yield put(Actions.createUserSuccess(response));
    const clearedValues = clearObjectValues(response);
    yield put(Actions.setCreateUserRow(clearedValues));
    yield put(
      Actions.addNotification(
        genToastNotification("success", "User created successfully")
      )
    );
  } catch (error) {
    yield put(
      Actions.addNotification(
        genToastNotification("error", "Error creating user")
      )
    );
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
