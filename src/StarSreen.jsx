import { useState } from "react";

function StarSreen({ numQuestions, dispatch }) {
  const [name, setName] = useState("");

  function handleStart() {
    if (!name.trim()) return;
    dispatch({ type: "setName", payload: name.trim() });
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Thử thách kỹ năng game thủ và giành lấy vương miện 👑</h2>
      <p className="description">
        🧠 {numQuestions} câu hỏi 🧩 thú vị để kiểm tra xem bạn hiểu biết về
        thế giới game đến đâu.
      </p>

      <div className="name-input-wrapper">
        <label htmlFor="player-name" className="name-label">
          🎮 Nhập tên của bạn
        </label>
        <input
          id="player-name"
          className="name-input"
          type="text"
          placeholder="Tên người chơi..."
          value={name}
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleStart()}
          autoComplete="off"
          autoFocus
        />
        <span className="name-counter">{name.length}/20</span>
      </div>

      <div className="start-actions">
        <button
          className="btn btn-ui"
          onClick={handleStart}
          disabled={!name.trim()}
        >
          🚀 Bắt đầu chơi
        </button>
        <button
          className="btn btn-leaderboard"
          onClick={() => dispatch({ type: "showLeaderboard" })}
        >
          🏆 Bảng xếp hạng
        </button>
      </div>
    </div>
  );
}

export default StarSreen;
