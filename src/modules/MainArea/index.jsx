import clsx from "clsx";
import { routesWithHeader } from "constants/config";
import SideBarContext from "contexts/SidebarContext";
import FAQ from "modules/FAQ";
import HomePage from "modules/HomePage";
import { useMemo, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, useLocation } from "react-router-dom";

import routesByName from "constants/routesByName";
import Careers from "modules/Careers";
import Community from "modules/Community";
import Developers from "modules/Developers";
import Events from "modules/Events";
import Whitepaper from "modules/Whitepaper";

import mainAreaBg from "assets/images/main-area-bg.png";

import s from "./MainArea.module.scss";

const MainArea = ({ sideBarOpen, toggleSideBar }) => {
  const maxWidth1360 = useMediaQuery({ maxWidth: 1360 });

  const { pathname } = useLocation();

  const containerStyles = useMemo(() => {
    const styles = {
      backgroundImage: `url(${mainAreaBg})`,
      backgroundAttachment:
        pathname === routesByName.careers ? "fixed" : "local",
    };
    if (!routesWithHeader.includes(pathname) && !maxWidth1360) {
      styles.height = "100vh";
    }
    return styles;
  }, [pathname, maxWidth1360]);

  const containerRef = useRef();

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        s.mainArea,
        sideBarOpen && maxWidth1360 && "overflowHidden"
      )}
      style={containerStyles}
    >
      <Routes>
        <Route path={routesByName.home} element={<HomePage />} exact />
        <Route path={routesByName.community} element={<Community />} />
        <Route path={routesByName.whitepaper} element={<Whitepaper />} />
        <Route path={routesByName.developers} element={<Developers />} />
        <Route path={routesByName.careers} element={<Careers />} />
        <Route path={routesByName.events} element={<Events />} />
        <Route path={routesByName.faq} element={<FAQ />} />
      </Routes>
      <div
        className={clsx(s.rootShadow, sideBarOpen && s.shadowActive)}
        onClick={toggleSideBar}
      />
    </div>
  );
};

const MainAreaWithContext = () => (
  <SideBarContext.Consumer>
    {(sideBarProps) => <MainArea {...sideBarProps} />}
  </SideBarContext.Consumer>
);

export default MainAreaWithContext;
