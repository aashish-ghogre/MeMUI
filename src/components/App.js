import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import AppRouter from "./common/AppRouter";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppHeader />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
