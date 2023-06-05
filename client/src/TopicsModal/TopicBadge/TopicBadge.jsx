import "./TopicBadge.css";
import unselectImg from "../../assets/unselect-topic.svg";

export function TopicBadge({ title, register }) {
  return (
    <label className="topic-badge select-topics__topic-badge">
      <input
        type="checkbox"
        className="topic-badge__input"
        {...register}
      ></input>

      <div className="topic-badge__title">{title}</div>

      <div className="topic-badge__unselect-wrapper">
        <img src={unselectImg} className="topic-badge__unselect" alt="" />
      </div>
    </label>
  );
}
