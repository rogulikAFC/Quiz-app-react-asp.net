import { useRef, useContext } from "react";
import CustomButton from "../../CustomButton/CustomButton";

import arrowImg from "../../assets/arrow-downward.svg";
import peopleImg from "../../assets/people.svg";
import "./LandingPage.css";
import { TopicsModal } from "../../TopicsModal/TopicsModal";

export function LandingPage() {
  // let userContext = useContext(UserContext);
  // let navigate = useNavigate();

  const selectTopicsModalRef = useRef()

  return (
    <>
      <div className="landing container_main__landing">
        <div className="site-info landing__site-info">
          <h1 className="site-info__title">
            Learn new concepts for each question
          </h1>

          <div className="site-info__description">
            We help you prepare for exams and quizes
          </div>

          <div className="landing-interact site-info__interact">
            <CustomButton
              className="landing-interact__start"
              color="red"
              blockName="landing-interact"
              onClick={() => selectTopicsModalRef.current.openModal()}
              shadows
            >
              Start solving
            </CustomButton>

            <div className="more-about-site landing-interact__more-about-site">
              <img src={arrowImg} alt="" className="more-about-site__arrow" />
              know more
            </div>
          </div>
        </div>

        <img src={peopleImg} alt="" className="landing__image" />
      </div>

      <style>
        {`
          body, #root {
            overflow: hidden;
          }
        `}
      </style>

      <TopicsModal modalRef={selectTopicsModalRef} />
    </>
  );
}
