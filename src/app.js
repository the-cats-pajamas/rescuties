import React from "react";
import {PublicRoutes, ProtectedRoutes} from "./routes/Router";
import indexRoutes from './routes'
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/Store";
import { History } from "./firebase/History";
import { PrivateRoute } from "./routes/PrivateRoutes";
import FullLayout from "./layouts/FullLayout";
import Login from './views/authentication/Login'

const App = () => {
  //const [currentUser, SetcurrentUser] = useState(null);
  return (
    <Provider store={configureStore()}>
      <Router history={History}>
        <Switch>
          <Route  path="/page" component={FullLayout} />;
          <Route exact path="/authentication/Login" component={Login} />;
          
          {/* {ProtectedRoutes.map((prop, key) => {
            console.log('protected routes!!!', prop)
            return (
              <PrivateRoute
                path={prop.path}
                key={key}
                component={prop.component}
              />
            );
          })}
          {PublicRoutes.map((prop, key) => {
            return (
              <Route exact path={prop.path} component={prop.component}/>
            );
          })} */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
