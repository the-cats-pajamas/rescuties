import React from "react";
import indexRoutes from "./routes";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/Store";
import { History } from "./firebase/History";
import { PrivateRoute } from "./routes/PrivateRoutes";
import FullLayout from "./layouts/FullLayout";

const App = () => {
  //const [currentUser, SetcurrentUser] = useState(null);
  return (
    <Provider store={configureStore()}>
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={FullLayout} />;
          {/* <Route exact path="/authentication/Login" component={FullLayout} />; */}
          {indexRoutes.map((prop, key) => {
            return (
              <PrivateRoute
                path={prop.path}
                key={key}
                component={prop.component}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
