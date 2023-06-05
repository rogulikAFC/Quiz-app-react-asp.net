import { useContext, useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ModalBox } from "../ModalBox/ModalBox";
import { TopicBadge } from "./TopicBadge/TopicBadge";
import "./TopicsModal.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { QuestContext } from "../contexts/QuestContext";

export function TopicsModal({ modalRef }) {
  const { getCreditials } = useContext(UserContext);
  const { getTopics, setQuestTopicsIds } = useContext(QuestContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const topicsData = getTopics();

  let topics = [];

  useEffect(() => setQuestTopicsIds([]), []);

  topicsData.forEach(({ id, title }) => {
    topics.push(
      <TopicBadge key={id} title={title} register={register(id.toString())} />
    );
  });

  function getSelectedTopicsIds(data) {
    let selectedTopicsIds = [];

    for (let [key, value] of Object.entries(data)) {
      if (value === true) {
        selectedTopicsIds.push(key);
      }
    }

    return selectedTopicsIds;
  }

  function onSubmit(data) {
    let topicsIds = getSelectedTopicsIds(data);
    
    console.log(topicsIds.length)

    if (topicsIds.length <= 5) {
      modalRef.current.setHasError()

      return;
    }

    setQuestTopicsIds(topicsIds);

    let isAuth = getCreditials().isAuth;

    if (!isAuth) {
      navigate("/login");

      return;
    }

    navigate("/quest");
  }

  return (
    <ModalBox
      title="Choose your favorite topics"
      description="Select more than 5 topics to start quiz"
      ref={modalRef}
    >
      <form
        className="select-topics modal-content__select-topics"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="select-topics__topics">{topics}</div>

        <CustomButton blockName="select-topics" color="red" shadows submit>
          Start quiz
        </CustomButton>
      </form>
    </ModalBox>
  );
}