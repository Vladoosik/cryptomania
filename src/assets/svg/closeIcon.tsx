import React from "react";
import { SvgProp } from "../../interface/SvgProp";

const CloseIcon = (props: SvgProp) => {
  const { width, height, color, onclick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onclick}
      fill="none"
      viewBox="0 0 26 29"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        filter="url(#filter0_d_2_5397)"
      >
        <path d="M20.354 5.354L5.646 20.06M20.354 20.061L5.646 5.354"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_2_5397"
          width="33"
          height="33"
          x="-4"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_5397"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2_5397"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default CloseIcon;

CloseIcon.defaultProps = {
  width: 26,
  height: 29,
  color: "#F5F5F5",
};
