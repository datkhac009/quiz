function FineshScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let remark = "";
  let emoji = "";
  if (percentage === 100) {
    emoji = "🏆";
    remark =
      "Bạn rất thông minh rất có khả năng làm Nhà phát triển game số 1 Mễ trì";
  }
  if (percentage >= 80) {
    emoji = "🥇";
    remark = "Khá tốt! Có vẻ bạn là một người nghiện game";
  }
  if (percentage >= 60) {
    emoji = "🥈";
    remark = "Tuyệt vời! Bạn rất hiểu biết về thế giới game.";
  }
  if (percentage >= 40) {
    emoji = "🥉";
    remark = "Cần luyện tập thêm để trở thành game thủ nhé!";
  }
  if (percentage >= 20 || percentage === 0) {
    emoji = "💩";
    remark = "Tuyệt vời bạn không phải là 1 người nghiện game";
  }

  return (
    <>
      <h3>{remark}</h3>
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
