import React, { lazy, useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./layout-components/header/Header";
import Sidebar from "./layout-components/sidebar/Sidebar";
import Footer from "./layout-components/footer/Footer";
import Customizer from "./layout-components/customizer/Customizer";
import Spinner from "../views/spinner/Spinner";

// Routes
import PrivateRoutes from '../routes/PrivateRoutes';
import { ThemeRoutes } from '../routes/Router'
import Pets from '../layouts/layout-components/viewPets/viewPets';
const Home = lazy(() => import('../layouts/layout-components/home/home'));
const Rehome = lazy(() => import('../layouts/layout-components/rehome/rehome'));
const Quiz = lazy(() => import('../layouts/layout-components/quiz/quiz'));
const HappyTails = lazy(() => import('../layouts/layout-components/happyTails/happyTails'));
const Favorites = lazy(() =>  import('../layouts/layout-components/favorites'))

export default (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const settings = useSelector((state) => state.settings);

  useEffect(() => {
    const updateDimensions = () => {
      let element = document.getElementById("main-wrapper");
      setWidth(window.innerWidth);
      switch (settings.activeSidebarType) {
        case "full":
        case "iconbar":
          if (width < 1170) {
            element.setAttribute("data-sidebartype", "mini-sidebar");
            element.classList.add("mini-sidebar");
          } else {
            element.setAttribute(
              "data-sidebartype",
              settings.activeSidebarType
            );
            element.classList.remove("mini-sidebar");
          }
          break;

        case "overlay":
          if (width < 767) {
            element.setAttribute("data-sidebartype", "mini-sidebar");
          } else {
            element.setAttribute(
              "data-sidebartype",
              settings.activeSidebarType
            );
          }
          break;

        default:
      }
    };
    if (document.readyState === "complete") {
      updateDimensions();
    }
    window.addEventListener("load", updateDimensions.bind(null));
    window.addEventListener("resize", updateDimensions.bind(null));
    return () => {
      window.removeEventListener("load", updateDimensions.bind(null));
      window.removeEventListener("resize", updateDimensions.bind(null));
    };
  }, [settings.activeSidebarType, width]);

  return (
    <div
      id="main-wrapper"
      dir={settings.activeDir}
      data-theme={settings.activeTheme}
      data-layout={settings.activeThemeLayout}
      data-sidebartype={settings.activeSidebarType}
      data-sidebar-position={settings.activeSidebarPos}
      data-header-position={settings.activeHeaderPos}
      data-boxed-layout={settings.activeLayout}
    >
      {/*--------------------------------------------------------------------------------*/}
      {/* Header                                                                         */}
      {/*--------------------------------------------------------------------------------*/}
      <Header />
      {/*--------------------------------------------------------------------------------*/}
      {/* Sidebar                                                                        */}
      {/*--------------------------------------------------------------------------------*/}
      <Sidebar {...props} routes={ThemeRoutes} />
      {/*--------------------------------------------------------------------------------*/}
      {/* Page Main-Content                                                              */}
      {/*--------------------------------------------------------------------------------*/}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Suspense fallback={<Spinner />}>
            <Switch>
            <PrivateRoutes path="/page/quiz" component={Quiz}/>;
            <PrivateRoutes path="/page/rehome" component={Rehome}/>;
            <PrivateRoutes path='/page/favorites' component={Favorites} />
            <Route path='/page/pets' component={Pets} />
            <Route path='/page/happytails' component={HappyTails} />
            <Route exact path='/page' component={Home} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
      {/*--------------------------------------------------------------------------------*/}
      {/* Customizer from which you can set all the Layout Settings                      */}
      {/*--------------------------------------------------------------------------------*/}
      <Customizer />
    </div>
  );
};
