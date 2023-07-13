import { useContext, useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ModalBox } from "../ModalBox/ModalBox";
import { TopicBadge } from "./TopicBadge/TopicBadge";
import "./TopicsModal.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { QuizContext } from "../contexts/QuizContext";

export function TopicsModal({ modalRef }) {
  const { getCreditials } = useContext(UserContext);
  const { getTopics, setQuizTopicsIds } = useContext(QuizContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [topicsData, setTopicsData] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const minTopicsSelectedCount = 2;

  useEffect(() => {
    async function getTopicsData() {
      const loadedTopics = await getTopics(pageNum);

      setTopicsData((oldTopics) => [...oldTopics, ...loadedTopics]);
    }

    getTopicsData();
  }, [pageNum]);

  useEffect(() => {
    async function getIsUserAuth() {
      const { isAuth } = await getCreditials();

      setIsUserAuth(isAuth);
    }

    getIsUserAuth();
  }, []);

  useEffect(() => {
    setTopics(() => {
      let newTopics = [];

      for (let { id, name } of topicsData) {
        newTopics = [
          ...newTopics,
          <TopicBadge
            key={id}
            title={name}
            register={register(id.toString())}
          />,
        ];
      }

      return newTopics;
    });

    setIsLoading(false);
  }, [topicsData]);

  function getSelectedTopicsIds(data) {
    let selectedTopicsIds = [];

    for (let [key, value] of Object.entries(data)) {
      if (value === true) {
        selectedTopicsIds = [...selectedTopicsIds, key];
      }
    }

    return selectedTopicsIds;
  }

  function onSubmit(data) {
    let topicsIds = getSelectedTopicsIds(data);

    if (topicsIds.length < minTopicsSelectedCount) {
      modalRef.current.setHasError();

      return;
    }

    setQuizTopicsIds(topicsIds);

    if (!isUserAuth) {
      navigate("/login");

      return;
    }

    navigate("/quiz");
  }

  return (
    <ModalBox
      title="Choose your favorite topics"
      description={`Select at least ${minTopicsSelectedCount} topics to start quiz`}
      wideContent
      ref={modalRef}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <form
          className="select-topics modal-content__select-topics"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="select-topics__topics">{topics}</div>

          <div className="select-topics__buttons">
            <CustomButton
              blockName="select-topics"
              color="gray"
              onClick={() => setPageNum((n) => ++n)}
            >
              Load more topics
            </CustomButton>
            <CustomButton blockName="select-topics" color="red" shadows submit>
              Start quiz
            </CustomButton>
          </div>
        </form>
      )}
    </ModalBox>
  );
}
