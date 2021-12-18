import PropTypes from "prop-types";

import s from "./RiseDown.module.scss";

const RiseDown = ({ value, size = 12 }) => (
  <div className="flex flex-grow-0  alignEnd">
    <span className={s[value >= 0 ? "chevronUp" : "chevronDown"]} />
    <span
      className={s[value >= 0 ? "valueUp" : "valueDown"]}
      style={{ fontSize: size }}
    >
      {Math.abs(value)}%
    </span>
  </div>
);

RiseDown.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
};

export default RiseDown;
