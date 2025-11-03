import { memo } from "react";

function Option({ options, dispatch, answer, correctOption }) {
  const hasAnswer = answer !== null;

  return (
    <div>
      <ul>
        {options.map((option, index) => {
          const isCorrect = index === correctOption;
          const isSelected = index === answer;
          
          let className = "btn btn-option";
          if (isSelected) className += " answer";
          if (hasAnswer && isCorrect) className += " correct";
          if (hasAnswer && isSelected && !isCorrect) className += " wrong";
          
          return (
            <li key={index}>
              <button
                className={className}
                onClick={() => dispatch({ type: "newAnswer", payload: index })}
                disabled={hasAnswer}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Wrap component với memo để tránh re-render không cần thiết
export default memo(Option);
