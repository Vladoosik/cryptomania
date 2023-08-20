import React from "react";
import { SvgProp } from "../../interface/SvgProp";

const Visible = (props: SvgProp) => {
  const { width, height, onclick, active, className } = props;
  return (
    <>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          fill="none"
          viewBox="0 0 26 25"
        >
          <path
            stroke="#878685"
            strokeWidth="1.5"
            d="M22.781 12.557c-1.53 2.695-4.558 5.693-9.866 5.693-5.336 0-8.368-3.029-9.89-5.734.948-1.58 2.034-2.965 3.486-3.981 1.548-1.083 3.57-1.785 6.404-1.785 2.829 0 4.718.699 6.2 1.777 1.406 1.022 2.488 2.41 3.666 4.03z"
          ></path>
          <path
            stroke="#878685"
            strokeWidth="1.5"
            d="M16.773 12.498c0 2.627-1.824 4.568-3.857 4.568-2.033 0-3.857-1.94-3.857-4.568 0-2.628 1.824-4.568 3.857-4.568 2.033 0 3.857 1.94 3.857 4.568z"
          ></path>
          <path
            stroke="#878685"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.332 5l8.191 15"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 21 13"
          className={className}
          onClick={onclick}
        >
          <path
            stroke="#878685"
            strokeWidth="1.5"
            d="M20.121 6.556c-1.494 2.7-4.449 5.694-9.621 5.694-5.199 0-8.157-3.024-9.644-5.735.928-1.583 1.988-2.97 3.406-3.985C5.77 1.45 7.738.75 10.5.75c2.756 0 4.595.697 6.04 1.772 1.372 1.022 2.428 2.41 3.581 4.034z"
          ></path>
          <path
            stroke="#878685"
            strokeWidth="1.5"
            d="M14.25 6.498c0 2.645-1.791 4.568-3.75 4.568S6.75 9.143 6.75 6.498c0-2.645 1.791-4.568 3.75-4.568s3.75 1.923 3.75 4.568z"
          ></path>
        </svg>
      )}
    </>
  );
};

export default Visible;

Visible.defaultProps = {
  width: 21,
  height: 13,
};
