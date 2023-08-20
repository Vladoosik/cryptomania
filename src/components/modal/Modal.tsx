// modules
import React, { Dispatch, ReactElement, SetStateAction } from "react";
//styles
import "./style..css";

interface ModalProp {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}

const Modal = (props: ModalProp) => {
  const { active, setActive, children } = props;
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(el) => el.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
