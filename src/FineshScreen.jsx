import { useEffect, useRef } from "react";

function FineshScreen({ points, maxPossiblePoints, highscore, dispatch, playerName }) {
  const percentage = (points / maxPossiblePoints) * 100;
  const scoreSaved = useRef(false);

  useEffect(() => {
    if (!scoreSaved.current && playerName) {
      scoreSaved.current = true;
      dispatch({ type: "saveScore", payload: maxPossiblePoints });
    }
  }, [dispatch, maxPossiblePoints, playerName]);

  let remark = "";
  let emoji = "";

  if (percentage === 100) {
    emoji = "🏆";
    remark = "Bạn rất thông minh rất có khả năng làm Nhà phát triển game số 1 Mễ trì";
  } else if (percentage >= 80) {
    emoji = "🥇";
    remark = "Khá tốt! Có vẻ bạn là một người nghiện game";
  } else if (percentage >= 60) {
    emoji = "🥈";
    remark = "Tuyệt vời! Bạn rất hiểu biết về thế giới game.";
  } else if (percentage >= 40) {
    emoji = "🥉";
    remark = "Cần luyện tập thêm để trở thành game thủ nhé!";
  } else {
    emoji = "💩";
    remark = "Tuyệt vời bạn không phải là 1 người nghiện game";
  }

  return (
    <div className="finish-screen">
      {playerName && (
        <p className="player-greeting">
          🎮 <strong>{playerName}</strong>, đây là kết quả của bạn!
        </p>
      )}

      <div className="result">
        <p>
          <span>Bạn đạt <strong>{points}</strong> trên </span>
          {maxPossiblePoints} điểm ({Math.ceil(percentage)}%) {emoji}
        </p>
      </div>

      <p className="highscore">
        <span>{remark}</span>
        <br />
        <span className="highscore-label">Kỷ lục: {highscore} điểm</span>
      </p>

      <div className="finish-actions">
        <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
          🔄 Chơi lại
        </button>
        <button className="btn btn-leaderboard" onClick={() => dispatch({ type: "showLeaderboard" })}>
          🏆 Bảng xếp hạng
        </button>
      </div>
    </div>
  );
}

export default FineshScreen;
