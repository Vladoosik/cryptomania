// Modules
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import isEqual from "lodash/isEqual";

// Components
import Loader from "Components/Loader";

// Styles
import "./styles.scss";

function ButtonBase(props) {
  const {
    center,
    children,
    className,
    disabled,
    isLoading,
    loaderColor,
    loaderSize,
    offset,
    onClick,
    type,
    variant,
  } = props;

  const isDisabled = disabled || isLoading;

  const classNames = cx("button-base", {
    "button-base--center": center,
    "button-base--disabled": isDisabled,
    "button-base--filled": isEqual(variant, "filled"),
    "button-base--outline": isEqual(variant, "outline"),
    "button-base--link-like": isEqual(variant, "linkLike"),
    "button-base__offset--sm": isEqual(offset, "sm"),
    [className]: !!className,
  });

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      onClick={onClick}
      type={isEqual(type, "submit") ? "submit" : "button"}
    >
      {isLoading ? <Loader color={loaderColor} size={loaderSize} /> : children}
    </button>
  );
}

ButtonBase.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loaderColor: PropTypes.string,
  loaderSize: PropTypes.number,
  onClick: PropTypes.func,
  offset: PropTypes.oneOf(["sm"]),
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["filled", "outline", "linkLike"]),
};

ButtonBase.defaultProps = {
  center: false,
  className: undefined,
  disabled: false,
  isLoading: false,
  loaderColor: "#fff",
  loaderSize: 22,
  onClick: undefined,
  offset: undefined,
  type: "button",
  variant: "filled",
};

export default ButtonBase;
