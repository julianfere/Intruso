import { MouseEventHandler, ReactNode } from "react";

import "./modal.css";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  readonly handleClose: MouseEventHandler<HTMLButtonElement>;
  readonly handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ children, handleClose, handleClick, show }: ModalProps) => {
  const toggleModal = show ? "modal-show" : "";
  const closeButtonText = handleClick ? "CANCEL" : "CLOSE";
  return (
    <div className={`modal ${toggleModal}`}>
      <div className="modal-content">
        {children}
        <div className="modal-actions">
          <button className="modal-btn" onClick={handleClose}>
            {closeButtonText}
          </button>
          {handleClick && (
            <button className="modal-btn" onClick={handleClick}>
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
