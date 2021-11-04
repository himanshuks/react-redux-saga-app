import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/users";

import { FETCH_USER_REQUEST } from "../redux/types/users";

export function* watcherSaga() {
  console.log("Watcher called at each Action listen...");
  yield takeLatest(FETCH_USER_REQUEST, handleGetUser);
}
