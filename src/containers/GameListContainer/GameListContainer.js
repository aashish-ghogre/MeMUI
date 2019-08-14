import React, { Component } from "react";
import { connect } from "react-redux";

import GameSummary from "./../../components/Game/GameSummary";
import { doFetchGameList } from "./../../actions/Game";
import { getGameList } from "./../../selectors/GameSelector";
class GameListContainer extends Component {
  componentWillMount() {
    this.props.onFetchGameList();
  }
  render() {
    const gameList = this.props.gameList;
    return (
      <div>
        {(gameList || []).map(game => (
          <GameSummary key={game.id} game={game} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { onFetchGameList: () => dispatch(doFetchGameList()) };
};
const mapStateToProps = state => ({
  gameList: getGameList(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListContainer);
