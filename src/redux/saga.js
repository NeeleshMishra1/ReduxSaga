
// saga.js
import { takeEvery, put, call } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./constants";

function* userList() {
    const url = "https://dummyjson.com/users";
    try {
        let response = yield call(fetch, url);
        let data = yield response.json();
        yield put({ type: SET_USER_DATA, data }); 
    } catch (error) {
        console.error('Error fetching user list:', error);
    }
}

function* sagaData() {
    yield takeEvery(USER_LIST, userList);
}

export default sagaData;
