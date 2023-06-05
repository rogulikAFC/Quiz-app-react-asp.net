import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import closeImg from "../assets/close.svg";
import "./ModalBox.css";

function ModalBoxInner({ title, description, children }, ref) {
  let [isOpened, setIsOpened] = useState(false);
  let [hasError, setHasErrorState] = useState(false);

  useEffect(() => setHasErrorState(false), []);

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal() {
          setIsOpened(true);
        },

        setHasError() {
          setHasErrorState(true);
        },
      };
    },
    []
  );

  function closeModal() {
    setIsOpened(false);
  }

  return (
    <div className={`modal-wrapper${isOpened ? "" : " modal-wrapper_hidden"}`}>
      <div className="modal modal-wrapper__modal">
        <button type="button" className="modal__close" onClick={closeModal}>
          <img src={closeImg} alt="Close" className="modal__close-image" />
        </button>
        <div className="modal__header">
          <h1 className="modal__title">{title}</h1>
          <p
            className={`modal__description${
              hasError ? " modal__description_error" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div className="modal-content modal__modal-content">{children}</div>
      </div>
    </div>
  );
}

export const ModalBox = forwardRef(ModalBoxInner);
