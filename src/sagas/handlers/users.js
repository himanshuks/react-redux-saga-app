import { call, put } from "redux-saga/effects";
import { setUsersData } from "../../redux/actions/userAction";
import { requestGetUsers } from "../requests/users";

export function* handleGetUser() {
  console.log("Handling setting of Users from API call...");
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;

    console.log(`Data received ->`, data);

    yield put(setUsersData(data));
  } catch (error) {
    console.log(`Error occurred: `, error);
  }
}
