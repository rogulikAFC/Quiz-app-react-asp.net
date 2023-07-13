import { useRef, useContext } from "react";
import CustomButton from "../../CustomButton/CustomButton";

import arrowImg from "../../assets/arrow-downward.svg";
import peopleImg from "../../assets/people.svg";
import "./LandingPage.css";
import { TopicsModal } from "../../TopicsModal/TopicsModal";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function LandingPage() {
  const { getCreditials } = useContext(UserContext);
  const navigate = useNavigate();
  const [isUserAuth, setIsUserAuth] = useState(false);

  useEffect(() => {
    async function getIsUserAuth() {
      const user = await getCreditials();

      setIsUserAuth(user.isAuth)
    }

    getIsUserAuth()
  }, []);

  const selectTopicsModalRef = useRef();

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
              onClick={() => {
                isUserAuth
                  ? selectTopicsModalRef.current.openModal()
                  : navigate("/login");
              }}
              shadows
            >
              Start solving
            </CustomButton>

            <a className="more-about-site landing-interact__more-about-site" href="">
              <img src={arrowImg} alt="" className="more-about-site__arrow" />
              know more
            </a>
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
