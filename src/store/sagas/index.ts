import { loginSaga } from "./Login/LoginSagas";
import { take, takeEvery } from "redux-saga/effects";
import { TYPE_USER, TYPE_USERS, TYPE_USER_DETAIL } from "../../interface/User";
import { usersSagas } from "./Users/usersSagas";
import { TYPE_TASKS } from "../../interface/Taks";
import { getTasksSaga } from "./Tasks/tasksSagas";
import { userDetailSagas } from "./Users/userSagas";
import { registerSaga } from "./Login/RegisterSagas";
import getTokenSaga from "./Login/TokenSagas";
import updateTaskSaga from "./Tasks/updateTaskSaga";
import { deleteTaskSaga } from "./Tasks/deleteTaskSaga";
import { commentTaskSaga } from "./Tasks/commentTaskSaga";
function* rootSaga() {
  yield takeEvery(TYPE_USER.LOGIN_REQUEST, loginSaga);
  yield takeEvery(TYPE_TASKS.GET_TASKS_REQUEST, getTasksSaga);
  yield takeEvery(TYPE_USERS.GET_USERS_REQUEST, usersSagas);
  yield takeEvery(TYPE_USER_DETAIL.GET_USER_DETAIL_REQUEST, userDetailSagas);
  yield takeEvery(TYPE_USER.REGISTER_REQUEST, registerSaga);
  yield takeEvery(TYPE_USER.TOKEN_REQUEST, getTokenSaga);
  yield takeEvery(TYPE_TASKS.UPDATE_TASKS_REQUEST, updateTaskSaga);
  yield takeEvery(TYPE_TASKS.DELETE_TASKS_REQUEST, deleteTaskSaga);
  yield takeEvery(TYPE_TASKS.ADD_TASK_COMMENT, commentTaskSaga);
}

export default rootSaga;
