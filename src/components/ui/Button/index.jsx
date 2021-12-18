import PropTypes from "prop-types";

import clsx from "clsx";

import s from "./Button.module.scss";

const Button = ({ variant, children, squaredBorders = true, className }) => {
  return (
    <div
      className={clsx(s.container, className, {
        [s.blue]: variant === "blue",
        [s.squaredBorders]: squaredBorders,
      })}
    >
      <span className={s.text}>{children}</span>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["blue", "secondary"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  squaredBorders: PropTypes.bool,
  className: PropTypes.string,
};

Button.defultProps = {
  squaredBorders: true,
  className: "",
};

export default Button;
