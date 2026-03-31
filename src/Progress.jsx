function Progress({ index, numQuestions, points, maxPossiblePoints ,answer}) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)}></progress>
        <p>
          Câu <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints} điểm
        </p>
      </header>
    </div>
  );
}

export default Progress;
