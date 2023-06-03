import { useContext } from "react";
import CustomButton from "../../CustomButton/CustomButton";

import arrowImg from "../../assets/arrow-downward.svg";
import peopleImg from "../../assets/people.svg";
import "./LandingPage.css";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ModalBox } from "../../ModalBox/ModalBox";

export function LandingPage() {
  let userContext = useContext(UserContext);
  let navigate = useNavigate();

  function redirect() {
    let user = userContext.getCreditials();

    console.log(user);

    if (!user.isAuth) {
      return navigate("/login");
    }

    return navigate("/successfull");
  }

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
              onClick={redirect}
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

      {/* <ModalBox
        title="Choose your favorite topic"
        description="Select more than 5 topics to start quiz"
      >
        <h2 className="modal-content__test">Hello world</h2>
      </ModalBox> */}
    </>
  );
}
