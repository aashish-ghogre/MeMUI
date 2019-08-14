import React from "react";
import { Route } from "react-router-dom";
import GameListContainer from "./../../containers/GameListContainer/GameListContainer";
import Settings from "./../../containers/Settings/Settings";
const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={GameListContainer} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};
export default AppRouter;
