import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import routes from "./index";
//import Protected from "../layouts/Protected";

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            exact
            path={route.path}
            render={(props) => (
              <route.layout {...props}>
                {
                    <route.component {...props} />

                    /*route.isProtected ? (
                  <Protected>
                    <route.component {...props} />
                  </Protected>
                ) : (
                  <route.component {...props} />
                )*/}
              </route.layout>
            )}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
