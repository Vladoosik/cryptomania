import React from "react";
import { SvgProp } from "../../interface/SvgProp";

const SuccessIcon = (props: SvgProp) => {
  const { width, height, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 220 220"
    >
      <circle
        cx="110"
        cy="110"
        r="107.5"
        fill={color}
        fillOpacity="0.3"
        stroke="#1F2AD1"
        strokeWidth="5"
      ></circle>
      <path
        stroke="#1F2AD1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="21"
        d="M56.28 102.513l35.547 61.527L168 62.96"
      ></path>
    </svg>
  );
};

export default SuccessIcon;

SuccessIcon.defaultProps = {
  width: 220,
  height: 220,
  color: "#1F2AD1",
};
