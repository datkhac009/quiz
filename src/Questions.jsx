import Option from "./component/Option";

function Questions({ questions, dispatch, answer }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option
        options={questions.options}
        dispatch={dispatch}
        answer={answer}
        correctOption={questions.correctOption}
      />
    </div>
  );
}

export default Questions;
