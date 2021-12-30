import clsx from "clsx";
import { useState } from "react";

import arrowDownImg from "assets/images/icons/arrow-down.png";

import s from "./SideBarHeaderItem.module.scss";

export const SideBarHeaderItem = (props) => {
  console.log(props);

  const [subMenuOpen, setSubmenuOpen] = useState(false);

  const { label, subMenu } = props;
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <p>{label}</p>
        {subMenu && (
          <img
            className={clsx(s.arrowImg, subMenuOpen && s.arrowImgActive)}
            src={arrowDownImg}
            alt={label}
          />
        )}
        {subMenu && (
          <div>
            {subMenu.map(({ label, subMenu: secondSubMenu }) => (
              <div>
                <div>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
