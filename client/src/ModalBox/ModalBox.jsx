import closeImg from "../assets/close.svg";
import './ModalBox.css'

export function ModalBox({ title, description, children, onClick }) {
  return (
    <div className="modal-wrapper">
        <div className="modal modal-wrapper__modal">
          <button type="button" className="modal__close" onClick={onClick}>
            <img src={closeImg} alt="Close" className="modal__close-image" />
          </button>
          <div className="modal__header">
            <h1 className="modal__title">{title}</h1>
            <p className="modal__description">{description}</p>
          </div>
          <div className="modal-content modal__modal-content">{children}</div>
        </div>
    </div>
  );
}
