import clsx from "clsx";
import SideBarContext from "contexts/SidebarContext";
import HomePage from "modules/HomePage";
import { Routes, Route } from "react-router-dom";

import routesByName from "constants/routesByName";
import Careers from "modules/Careers";
import Community from "modules/Community";
import Developers from "modules/Developers";
import Events from "modules/Events";
import Whitepaper from "modules/Whitepaper";

import s from "./MainArea.module.scss";

const MainArea = ({ sideBarOpen, toggleSideBar }) => (
  <div className={clsx(s.mainArea, sideBarOpen && "overflowHidden")}>
    <Routes>
      <Route path={routesByName.home} element={<HomePage />} exact />
      <Route path={routesByName.community} element={<Community />} />
      <Route path={routesByName.whitepaper} element={<Whitepaper />} />
      <Route path={routesByName.developers} element={<Developers />} />
      <Route path={routesByName.careers} element={<Careers />} />
      <Route path={routesByName.events} element={<Events />} />
    </Routes>
    <div
      className={clsx(s.rootShadow, sideBarOpen && s.shadowActive)}
      onClick={toggleSideBar}
    />
  </div>
);

const MainAreaWithContext = () => (
  <SideBarContext.Consumer>
    {(sideBarProps) => <MainArea {...sideBarProps} />}
  </SideBarContext.Consumer>
);

export default MainAreaWithContext;
