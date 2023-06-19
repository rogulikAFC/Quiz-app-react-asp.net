import indexActiveImg from "../../../../assets/level-badge-index-active.svg";
import indexNotActiveImg from "../../../../assets/level-badge-index-not-active.svg";
import "./LevelBadge.css";

export function LevelBadge({
  isActive,
  isFirst,
  isLast,
  index,
  setQuestionIndex,
}) {
  return (
    <div
      className={`level-badge progressbar__level-badge${
        isActive ? " level-badge_active" : " level-badge_not-active"
      }`}
    >
      {isFirst ? "" : <hr className="level-badge__line" />}

      <figure
        className={`level-badge-index level-badge__level-badge-index level-badge-index_${
          isActive ? "active" : "not-active"
        }`}
        onClick={() => setQuestionIndex(index)}
      >
        <img
          className={`level-badge-index__icon level-badge-index__icon_${
            isActive ? "active" : "not-active"
          }`}
          src={isActive ? indexActiveImg : indexNotActiveImg}
        />

        <figcaption
          className={`level-badge-index__index level-badge-index__index_${
            isActive ? "active" : "not-active"
          }`}
        >
          {index}
        </figcaption>
      </figure>

      {isLast ? "" : <hr className="level-badge__line" />}
    </div>
  );
}
