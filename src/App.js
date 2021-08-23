import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Root from "./pages/Root";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
