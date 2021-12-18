import PropTypes from "prop-types";

import s from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ variant, children }) => {
  return (
    <div className={clsx(s.container, [])}>
      <span className={s.text}>{children}</span>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["blue", "secondary"]),
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
};

export default Button;
