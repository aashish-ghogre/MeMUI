import { GAME_ADD } from "../constants/actionTypes";
const INITIAL_STATE = {
  gameList: []
};

const applyAddGames = (state, action) => action.gameList;

function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME_ADD: {
      console.log(action);
      return Object.assign({}, state, {
        gameList: applyAddGames(state, action)
      });
    }
    default:
      return state;
  }
}

export default gameReducer;
