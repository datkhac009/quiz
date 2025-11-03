// import { useState } from 'react'
// import { useEffect, useReducer } from "react";
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
              </>
            )}
            {/* {console.log("Status", state.status)} */}
            {state.status === "finishing" && (
              <>
                <FineshScreen
                  points={state.points}
                  maxPossiblePoints={maxPossiblePoints}
                  highscore={state.highscore}
                  dispatch={dispatch}
                />
              </>
            )}
          </MainApp>
        </main>
        <footer>
          {state.status === "active" && (
            <>
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
            </>
          )}
        </footer>
      </div>
    </>
  );
}
export default App;
