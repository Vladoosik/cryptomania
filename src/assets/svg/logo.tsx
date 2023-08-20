import React from "react";
import { SvgProp } from "../../interface/SvgProp";

function Logo(props: SvgProp) {
  const { width, height, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill={color}
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
      ></path>
      <rect width="14" height="6" x="11" y="11" fill="#fff" rx="2"></rect>
      <rect width="14" height="6" x="11" y="19" fill="#fff" rx="2"></rect>
    </svg>
  );
}

export default Logo;
