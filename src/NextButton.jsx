function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  
  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "NextStep" })}
        >
          Tiếp theo
        </button>
      </div>
    );
      if (index === numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finishing" })}
        >
          Hoàn thành
        </button>
      </div>
    );
}

export default NextButton;
