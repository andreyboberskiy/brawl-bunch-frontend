import clsx from "clsx";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import arrowDownImg from "assets/images/icons/arrow-down.png";

import s from "./MenuItem.module.scss";

const SubMenuItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    if (item.route) {
      navigate(item.route);
    }
  }, [navigate, item]);

  return (
    <div className={s.subMenuItemContainer} onClick={handleClick}>
      <div className={s.inner}>
        <p className={s.subMenuItemLabel}>{item.label}</p>
        {item.soon && <span className={s.subMenuSoon}>coming soon</span>}
        {item.subMenu && (
          <>
            <img
              src={arrowDownImg}
              className={s.arrowDownSubMenu}
              alt={item.label}
            />
            <div className={s.subMenuContainerRight}>
              {item.subMenu.map((subMenuItem) => (
                <SubMenuItem key={subMenuItem.label} item={subMenuItem} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const SubMenu = ({ items }) => (
  <div className={clsx(s.subMenuContainer)}>
    {items.map((subMenuItem) => (
      <SubMenuItem key={subMenuItem.label} item={subMenuItem} />
    ))}
  </div>
);

export const MenuItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (item.route) {
      navigate(item.route);
    }
  }, [navigate, item]);
  return (
    <div className={s.container} onClick={handleClick}>
      <div className={s.inner}>
        <p className={s.mainLabel}>{item.label}</p>
        {item.soon && <span className={s.soon}>coming soon</span>}
        {item.subMenu && (
          <>
            <img src={arrowDownImg} className={s.arrowDown} alt={item.label} />
            <SubMenu items={item.subMenu} />
          </>
        )}
      </div>
    </div>
  );
};
