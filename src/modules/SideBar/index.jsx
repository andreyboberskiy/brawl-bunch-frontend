import clsx from "clsx";
import headerButtonsConfig from "modules/NavigationHeader/headerButtonsConfig";
import { SideBarHeaderItem } from "modules/SideBar/components/SideBarHeaderItem";
import { SideBarItem } from "modules/SideBar/components/SideBarItem";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { routesWithHeader } from "constants/config";
import SideBarContext from "contexts/SidebarContext";

import s from "./SideBar.module.scss";

import { links } from "./config";

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  const { pathname } = useLocation();
  const maxWidth1360 = useMediaQuery({ maxWidth: 1360 });

  const screenWithoutHeader =
    !routesWithHeader.includes(pathname) && !maxWidth1360;

  const canShow = maxWidth1360 || !routesWithHeader.includes(pathname);
  return (
    <>
      {canShow && (
        <div
          className={clsx(
            s.container,
            sideBarOpen && s.sideBarOpen,
            screenWithoutHeader && s.noOffset
          )}
        >
          {links.map((link) => (
            <SideBarItem
              key={link.label}
              {...link}
              setSideBarOpen={setSideBarOpen}
            />
          ))}
          {/*{maxWidth1360 && (*/}
          {/*  <div className={s.headerButtonsContainer}>*/}
          {/*    {headerButtonsConfig.map((item) => (*/}
          {/*      <SideBarHeaderItem {...item} />*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      )}
    </>
  );
};

const SideBarWithContext = () => (
  <SideBarContext.Consumer>
    {(sideBarProps) => <SideBar {...sideBarProps} />}
  </SideBarContext.Consumer>
);

export default SideBarWithContext;
