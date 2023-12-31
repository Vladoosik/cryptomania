import React from "react";
import { SvgProp } from "../../interface/SvgProp";

function StarSvg(props: SvgProp) {
  const { width, height, color, className, onclick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 55.867 55.867"
      version="1.1"
      viewBox="0 0 55.867 55.867"
      xmlSpace="preserve"
      fill={color}
      className={className}
      onClick={onclick}
    >
      fill = {color}
      <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
    </svg>
  );
}

export default StarSvg;
