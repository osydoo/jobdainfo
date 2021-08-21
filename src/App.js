import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = lazy(() => import("./pages/Root"));
const Write = lazy(() => import("./pages/Write"));

function App() {
  return (
    <Router basename={"/"}>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "75",
              position: "relative",
            }}
          >
            loading...
          </div>
        }
      >
        <Switch>
          <Route path="/" component={Root} />
          <Route path="/write" component={Write} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
