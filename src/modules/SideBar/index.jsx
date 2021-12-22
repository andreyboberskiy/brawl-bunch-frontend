import routesByName from "constants/routesByName";
import { NavLink, useLocation } from "react-router-dom";
import s from "./SideBar.module.scss";

import { links } from "./config";

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    pathname !== routesByName.home && (
      <div className={s.container}>
        {links.map(({ label, icon, to }) => (
          <NavLink
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
    )
  );
};

export default SideBar;
