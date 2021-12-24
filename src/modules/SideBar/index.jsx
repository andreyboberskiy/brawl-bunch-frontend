import clsx from "clsx";
import routesByName from "constants/routesByName";
import SideBarContext from "contexts/SidebarContext";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import s from "./SideBar.module.scss";

import { links } from "./config";

const SideBar = ({ sideBarOpen, toggleSideBar }) => {
  const { pathname } = useLocation();

  const maxWidth1200 = useMediaQuery({ maxWidth: 1200 });

  const canShowSideBar = pathname !== routesByName.home || maxWidth1200;

  return (
    <>
      {canShowSideBar && (
        <div className={clsx(s.container, sideBarOpen && s.sideBarOpen)}>
          {links.map(({ label, icon, to }) => (
            <NavLink
              onClick={toggleSideBar}
              key={to}
              className={({ isActive }) =>
                isActive ? `${s.activeLink} ${s.link}` : s.link
              }
              to={to}
            >
              <img src={icon} alt={label} />
              <p>{label}</p>
            </NavLink>
          ))}
        </div>
      )}
      <div className={clsx(s.rootShadow, sideBarOpen && s.shadowActive)} />
    </>
  );
};

const SideBarWithContext = () => (
  <SideBarContext.Consumer>
    {(sideBarProps) => <SideBar {...sideBarProps} />}
  </SideBarContext.Consumer>
);

export default SideBarWithContext;
