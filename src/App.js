import React, { useState, useEffect } from "react";

// My simple demo site HTML scaffolding - adds zero logic just presentation
import DemoSiteLayoutContainer from "fsjsd-demosite";

// React Router
import { BrowserRouter } from "react-router-dom";

// Import from react-router-utilitybelt
import {
  AppRoutesProvider,
  RouteCatalog,
  PageTitle
} from "react-router-utilitybelt";

// implement these in your own project to customise
import { appRoutes, navItemGroups } from "./AppRoutes";
import NavFilter from "./components/NavFilter";
import BreadCrumbsContainer from "./components/BreadCrumbsContainer";
import DrawerNavigationContainer from "./components/DrawerNavigationContainer";

const styles = {
  contentPane: {
    padding: "15px"
  }
};

function App() {
  const [navFilter, setNavFilter] = useState("");

  return (
    <BrowserRouter>
      <AppRoutesProvider
        appRoutesData={appRoutes}
        navItemGroups={navItemGroups}
      >
        <DemoSiteLayoutContainer
          renderHeader={() => (
            <>
              <b>
                <PageTitle />
              </b>{" "}
              - FSJSD Demos
            </>
          )}
          renderNavigation={() => (
            <div>
              {/* Filter control for nav */}
              <NavFilter
                onChange={filterText => setNavFilter(filterText)}
                value={navFilter}
              />
              {/* Navigation Links */}
              <DrawerNavigationContainer filter={navFilter} />
            </div>
          )}
          renderContents={() => (
            <>
              <BreadCrumbsContainer />
              <div className="Route" style={styles.contentPane}>
                {/* Route component renders ... no repeated route paths! */}
                <RouteCatalog onRouteNotFound={() => <>Page Not Found</>} />
              </div>
            </>
          )}
        />
      </AppRoutesProvider>
    </BrowserRouter>
  );
}

export default App;
