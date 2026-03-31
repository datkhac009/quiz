import "./App.css";
import { Header } from "./Header";
import MainApp from "./MainApp";
import Loader from "./Loader";
import StarSreen from "./StarSreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FineshScreen from "./FineshScreen";
import Timer from "./Timer";
import Leaderboard from "./Leaderboard";
import { useQuiz } from "./contexts/QuizContext";

function App() {
  const { state, numValue, maxPossiblePoints, dispatch } = useQuiz();

  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <MainApp>
            {state.status === "loading" && <Loader />}
            {state.status === "error" && <Error message={state.error} />}

            {state.status === "ready" && (
              <StarSreen numQuestions={numValue} dispatch={dispatch} />
            )}

            {state.status === "active" && (
              <>
                <Progress
                  index={state.index}
                  numQuestions={numValue}
                  points={state.points}
                  maxPossiblePoints={maxPossiblePoints}
                  answer={state.answer}
                />
                <Questions
                  questions={state.data?.[state.index]}
                  dispatch={dispatch}
                  answer={state.answer}
                />
                <footer>
                  <Timer
                    dispatch={dispatch}
                    secondsRemaining={state.secondsRemaining}
                  />
                  <NextButton
                    index={state.index}
                    numQuestions={numValue}
                    dispatch={dispatch}
                    answer={state.answer}
                  />
                  <button
                    className="btn btn-quit"
                    onClick={() => dispatch({ type: "quit" })}
                    title="Thoát và quay về màn hình bắt đầu"
                  >
                    🚪 Thoát
                  </button>
                </footer>
              </>
            )}

            {state.status === "finishing" && (
              <FineshScreen
                points={state.points}
                maxPossiblePoints={maxPossiblePoints}
                highscore={state.highscore}
                dispatch={dispatch}
                playerName={state.playerName}
                savedRank={state.savedRank}
              />
            )}

            {state.status === "leaderboard" && (
              <Leaderboard
                leaderboard={state.leaderboard}
                dispatch={dispatch}
                playerName={state.playerName}
              />
            )}
          </MainApp>
        </main>
      </div>
    </>
  );
}
export default App;
