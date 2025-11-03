function FineshScreen({ points, maxPossiblePoints ,highscore,dispatch}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🏆";
  }
  if (percentage >= 80) {
    emoji = "🥇";
  }
  if (percentage >= 60) {
    emoji = "🥈";
  }
  if (percentage >= 40) {
    emoji = "🥉";
  }
  if (percentage === 0) {
    emoji = "💩";
  }

  return (
    <>

    <div className="result">
      <p>
        <span>
          You scored <strong>{points}</strong> out of{" "}
        </span>
        {maxPossiblePoints} ({Math.ceil(percentage)}%) {emoji}
      </p>
    </div>
      <p className="highscore">(Highscore: {highscore} points)</p>
    <div>
       <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </button>
    </div>
    </>
    
  );
}

export default FineshScreen;
