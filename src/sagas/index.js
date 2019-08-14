import { takeEvery, all } from "redux-saga/effects";
import { GAME_LIST_FETCH } from "../constants/actionTypes";
import { handleFetchGameList } from "./Game";

function* watchAll() {
  yield all([takeEvery(GAME_LIST_FETCH, handleFetchGameList)]);
}

export default watchAll;
