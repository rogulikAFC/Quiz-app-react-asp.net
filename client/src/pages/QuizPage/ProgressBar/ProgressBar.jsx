import { forwardRef, useImperativeHandle, useReducer, useState } from "react";
import { LevelBadge } from "./LevelBadge/LevelBadge";
import "./ProgressBar.css";

function ProgressBarInner({ indexCount, setQuestionIndex }, ref) {
  const [ingnored, forceUpdate] = useReducer((x) => x + 1, 0);

  let initItems = [];

  for (let i = 1; i <= indexCount; i++) {
    initItems.push({ index: i, isActive: false });
  }

  let [items, setItems] = useState(initItems);

  function setActive(index) {
    setItems((oldItems) => {
      let item = oldItems.find((oldItems) => oldItems.index === index);

      item.isActive = true;

      return oldItems;
    });

    forceUpdate();
  }

  function getNextNotActiveQuestionIndex(index) {
    return items.find(item => item.index > index && !item.isActive).index
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        setActive: setActive,
        getNextNotActiveQuestionIndex: getNextNotActiveQuestionIndex
      };
    },
    []
  );

  return (
    <div className="progressbar quiz__progressbar">
      {items.map(({ index, isActive }, i) => (
        <LevelBadge
          index={index}
          isActive={isActive}
          isFirst={i === 0 ? true : false}
          isLast={i === indexCount - 1 ? true : false}
          key={index}
          setQuestionIndex={setQuestionIndex}
        />
      ))}
    </div>
  );
}

export const ProgressBar = forwardRef(ProgressBarInner);
