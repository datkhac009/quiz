import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const time = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(time);
  }, [dispatch, secondsRemaining]);

  return (
    <div>
      <p className="timer">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
}

export default Timer;
