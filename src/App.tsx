import React from "react";
import { useTranslation } from "react-i18next";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import SidebarMenu from "./components/SidebarMenu";
import MusicPlayer from "./components/MusicPlayer";
import MasterContent from "./components/MasterContent";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Router>
        <Header />
        <MusicPlayer />
        <div className="appContainerWrapper">
          <SidebarMenu />

          <Switch>
            {/* {t("welcome_to_react")} */}

            <Route path="/">
              <MasterContent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
