import { call, put } from "redux-saga/effects";
import { doAddGameList } from "../actions/Game";

const BASE_URL = "http://localhost:8080/games";

const fetchGameList = () =>
  fetch(BASE_URL).then(response => {
    return response.json();
  });

function* handleFetchGameList(action) {
  const result = yield call(fetchGameList);
  console.log(result);
  yield put(doAddGameList(result));
}

export { handleFetchGameList };
