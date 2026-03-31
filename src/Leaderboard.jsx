import { clearLeaderboard } from "./utils/localStorage";

const RANK_ICONS = { 1: "🥇", 2: "🥈", 3: "🥉" };

function Leaderboard({ leaderboard, dispatch, playerName }) {
  function handleClear() {
    if (window.confirm("Bạn có chắc muốn xóa toàn bộ bảng xếp hạng không?")) {
      clearLeaderboard();
      dispatch({ type: "hideLeaderboard" });
    }
  }

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2>🏆 Bảng Xếp Hạng</h2>
        <p className="leaderboard-subtitle">
          Top {leaderboard.length} game thủ xuất sắc nhất
        </p>
      </div>

      {leaderboard.length === 0 ? (
        <div className="leaderboard-empty">
          <span>🎮</span>
          <p>Chưa có ai lên bảng xếp hạng.</p>
          <p>Hãy là người đầu tiên!</p>
        </div>
      ) : (
        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Người chơi</th>
                <th>Điểm</th>
                <th>%</th>
                <th>Ngày chơi</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, i) => {
                const rank = i + 1;
                const isCurrentPlayer =
                  playerName &&
                  entry.name.toLowerCase() === playerName.toLowerCase();
                return (
                  <tr
                    key={entry.id ?? i}
                    className={`leaderboard-row ${isCurrentPlayer ? "leaderboard-row--current" : ""} ${rank <= 3 ? `leaderboard-row--top${rank}` : ""}`}
                  >
                    <td className="leaderboard-rank">
                      {RANK_ICONS[rank] ?? `#${rank}`}
                    </td>
                    <td className="leaderboard-name">
                      {entry.name}
                      {isCurrentPlayer && (
                        <span className="you-badge"> (Bạn)</span>
                      )}
                    </td>
                    <td className="leaderboard-points">
                      <strong>{entry.points}</strong>
                      <span className="max-points">/{entry.maxPoints}</span>
                    </td>
                    <td className="leaderboard-pct">
                      <div className="pct-bar-wrap">
                        <div
                          className="pct-bar"
                          style={{ width: `${entry.percentage}%` }}
                        />
                        <span>{entry.percentage}%</span>
                      </div>
                    </td>
                    <td className="leaderboard-date">{entry.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="leaderboard-actions">
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "hideLeaderboard" })}
        >
          ← Quay lại
        </button>
        {leaderboard.length > 0 && (
          <button className="btn btn-danger" onClick={handleClear}>
            🗑️ Xóa bảng
          </button>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
