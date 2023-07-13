import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import closeImg from "../assets/close.svg";
import "./ModalBox.css";

function ModalBoxInner({ title, description, open, wideContent, children }, ref) {
  let [isOpened, setIsOpened] = useState(open ? true : false);
  let [hasError, setHasErrorState] = useState(false);

  useEffect(() => setHasErrorState(false), []);

  function openModal() {
    setIsOpened(true);
  }

  function setHasError() {
    setHasErrorState(true);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: openModal,
        setHasError: setHasError,
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
        {title && description ? (
          <>
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
          </>
        ) : (
          ""
        )}
        <div className={`modal-content modal__modal-content${wideContent ? ' modal-content_wide' : ''}`}>{children}</div>
      </div>
    </div>
  );
}

export const ModalBox = forwardRef(ModalBoxInner);
