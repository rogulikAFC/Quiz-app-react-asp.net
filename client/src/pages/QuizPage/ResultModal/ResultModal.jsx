import { ModalBox } from "../../../ModalBox/ModalBox";
import CustomButton from "../../../CustomButton/CustomButton";
import resultContainerImg from "../../../assets/result-container.png";
import "./ResultModal.css";
import { useNavigate } from "react-router-dom";

export function ResultModal({ modalRef, score }) {
  const navigate = useNavigate();

  return (
    <ModalBox ref={modalRef} open={open}>
      <div className="modal-content__wrapper">
        <figure className="result-wrapper modal-content__result-wrapper">
          <img
            src={resultContainerImg}
            alt=""
            className="result-wrapper__img"
          />
          <figcaption className="score result-wrapper__score">
            <p className="score__title">Your score</p>
            <p className="score__value">{score}</p>
          </figcaption>
        </figure>
        <CustomButton
          blockName="modal-content"
          shadows
          color="red"
          onClick={() => navigate("/")}
        >
          Complete
        </CustomButton>
      </div>
    </ModalBox>
  );
}
