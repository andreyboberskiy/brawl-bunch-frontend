import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";

import arrowDownImg from "assets/images/icons/arrow-down.png";

import s from "./SideBarItem.module.scss";

const handleClickAnchor = (e) => {
  const key = e?.currentTarget?.dataset?.anchorkey;
  if (key) {
    const elem = document.querySelector(`[data-anchor='${key}']`);

    if (elem) {
      console.dir(elem);
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const SideBarItem = ({ to, icon, label, anchors, setSideBarOpen }) => {
  const { pathname } = useLocation();

  const less1360 = useMediaQuery({ maxWidth: 1360 });

  const [anchorsOpen, setAnchorsOpen] = useState(false);

  const toggleAnchors = () => setAnchorsOpen((prev) => !prev);

  const handleClick = () => {
    if (anchors && less1360) {
      toggleAnchors();
      return;
    }
    if (anchors) {
      toggleAnchors();
      setSideBarOpen(false);
      return;
    }
    setSideBarOpen(false);
  };

  const anchorsRef = useRef();

  useEffect(() => {
    if (pathname !== to && anchorsOpen) {
      setAnchorsOpen(false);
    }
  }, [pathname]);

  const onAnchorClick = (e) => {
    handleClickAnchor(e);
    if (less1360) {
      toggleAnchors();
      setSideBarOpen(false);
    }
  };

  return (
    <NavLink
      key={to}
      className={({ isActive }) =>
        isActive ? `${s.activeLink} ${s.link}` : s.link
      }
      to={to}
    >
      <div className={s.linkRow} onClick={handleClick}>
        <img className={s.iconImg} src={icon} alt={label} />
        <p>{label}</p>
        {anchors && (
          <img
            className={clsx(s.arrowImg, anchorsOpen && s.arrowImgActive)}
            src={arrowDownImg}
            alt={label}
          />
        )}
      </div>
      {anchors && (
        <div
          ref={anchorsRef}
          className={clsx(s.anchorsContainer)}
          style={{
            height: anchorsOpen
              ? `${anchorsRef.current?.scrollHeight}px`
              : "0px",
          }}
        >
          {anchors.map((anchor) => (
            <span onClick={onAnchorClick} data-anchorkey={anchor} key={anchor}>
              {anchor}
            </span>
          ))}
        </div>
      )}
    </NavLink>
  );
};
