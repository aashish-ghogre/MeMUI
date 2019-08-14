import { GAME_ADD, GAME_LIST_FETCH } from "../constants/actionTypes";

const doAddGameList = gameList => ({
  type: GAME_ADD,
  gameList
});

const doFetchGameList = () => ({
  type: GAME_LIST_FETCH
});

export { doAddGameList, doFetchGameList };
