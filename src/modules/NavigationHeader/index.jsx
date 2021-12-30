import clsx from "clsx";
import { useCallback } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "components/ui/Button";
import { routesWithHeader } from "constants/config";
import routesByName from "constants/routesByName";
import SideBarContext from "contexts/SidebarContext";
import { MenuItem } from "modules/NavigationHeader/components/MenuItem";

import logoImg from "assets/images/logo.png";

import buttonsConfig from "./headerButtonsConfig";

import s from "./NavigationHeader.module.scss";

const NavigationHeader = ({ toggleSideBar, sideBarOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMax600 = useMediaQuery({ maxWidth: 600 });
  const isMax1360 = useMediaQuery({ maxWidth: 1360 });

  const pushToHome = useCallback(() => {
    navigate(routesByName.home);
  }, [navigate]);

  const canShow = routesWithHeader.includes(pathname) || isMax1360;

  return (
    canShow && (
      <div className={`flex-between secondary-color-bg ${s.container}`}>
        <div className={`flex alignCenter ${isMax600 ? "w100" : ""}`}>
          <MediaQuery maxWidth={1360}>
            <div
              className={clsx(s.burger, sideBarOpen && s.burgerActive)}
              onClick={toggleSideBar}
            >
              <span />
              <span />
              <span />
            </div>
          </MediaQuery>
          <div
            className={`cursor-pointer flex alignCenter  ${s.logoContainer}`}
            onClick={pushToHome}
          >
            <img className={s.logoImg} src={logoImg} alt="brawl bunch" />
            <h1 className={s.logoText}>brawl bunch</h1>
          </div>
        </div>
        <MediaQuery minWidth={600}>
          <div className="flex-between h100">
            <MediaQuery minWidth={1360}>
              {buttonsConfig.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </MediaQuery>
            <Button variant="blue" className="ml-3">
              INSTALL NOW
            </Button>
          </div>
        </MediaQuery>
      </div>
    )
  );
};

const WithSidebarContext = () => (
  <SideBarContext.Consumer>
    {(sidebarProps) => <NavigationHeader {...sidebarProps} />}
  </SideBarContext.Consumer>
);
export default WithSidebarContext;
