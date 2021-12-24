import clsx from "clsx";
import Button from "components/ui/Button";
import routesByName from "constants/routesByName";
import SideBarContext from "contexts/SidebarContext";
import { useCallback } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import logoImg from "assets/images/logo.png";

import { buttonsConfig } from "./config";

import s from "./NavigationHeader.module.scss";

const NavigationHeader = ({ toggleSideBar, sideBarOpen }) => {
  const navigate = useNavigate();

  const isMax600 = useMediaQuery({ maxWidth: 600 });

  const pushToCommunity = useCallback(() => {
    navigate(routesByName.community);
  }, [navigate]);

  return (
    <div className={`flex-between secondary-color-bg ${s.container}`}>
      <div className={`flex alignCenter ${isMax600 ? "w100" : ""}`}>
        <MediaQuery maxWidth={1200}>
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
          onClick={pushToCommunity}
        >
          <img className={s.logoImg} src={logoImg} alt="brawl bunch" />
          <h1 className={s.logoText}>brawl bunch</h1>
        </div>
      </div>
      <MediaQuery minWidth={600}>
        <div className="flex-between">
          <MediaQuery minWidth={1200}>
            {buttonsConfig.map(({ label, handler }) => (
              <span key={label} onClick={handler} className={s.buttonText}>
                {label}
              </span>
            ))}
          </MediaQuery>
          <Button variant="blue" className="ml-3">
            INSTALL NOW
          </Button>
        </div>
      </MediaQuery>
    </div>
  );
};

const WithSidebarContext = () => (
  <SideBarContext.Consumer>
    {(sidebarProps) => <NavigationHeader {...sidebarProps} />}
  </SideBarContext.Consumer>
);
export default WithSidebarContext;
