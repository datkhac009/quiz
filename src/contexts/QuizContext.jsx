import { createContext, useContext, useMemo } from "react";
import { useEffect, useReducer } from "react";
import { getQuestionsFromStorage } from "../utils/localStorage";

const SECONDS_QUESTIONS = 150;

const initialState = {
  data: [],
  status: "loading",
  statusFinis: "",
  index: 14,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "data":
      return { ...state, data: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error", error: action.payload.message };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: SECONDS_QUESTIONS,
      };
    case "newAnswer": {
      const question = state.data?.[state.index]; //Nếu state.data có value thì sẽ là state.data[state.index] không có value thì sẽ là undefined
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "NextStep": {
      const isLastQuestion = state.index + 1 >= state.data.length;
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        secondsRemaining: SECONDS_QUESTIONS,
        status: isLastQuestion ? "finishing" : state.status,
      };
    }
    case "finishing": {
      return {
        ...state,
        status: "finishing",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    }
    case "restart": {
      return { ...initialState, data: state.data, status: "ready" };
    }
    case "tick": {
      const newSeconds = state.secondsRemaining - 1;
      return {
        ...state,
        secondsRemaining: newSeconds,
        status: newSeconds <= 0 ? "finishing" : state.status,
      };
    }

    default:
      throw new Error("Failed");
  }
}
const QuizContext = createContext();
function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // useMemo cho numValue và maxPossiblePoints để tránh tính toán lại không cần thiết
  const numValue = state.data.length;
  
  const maxPossiblePoints = useMemo(
    () => state.data.reduce((prev, cur) => prev + cur.points, 0),
    [state.data]
  );

  useEffect(() => {
    // Load data từ localStorage thay vì API
    const loadQuestions = async () => {
      try {
        // Simulate loading delay để hiển thị loader
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const questions = getQuestionsFromStorage();
        
        if (questions && questions.length > 0) {
          dispatch({ type: "data", payload: questions });
        } else {
          throw new Error("No questions found in storage");
        }
      } catch (error) {
        dispatch({ type: "dataFailed", payload: error });
      }
    };

    loadQuestions();
  }, []);

  // Tối ưu: state thay đổi mới tạo object mới, dispatch luôn stable
  const memoValue = useMemo(
    () => ({
      state,
      numValue,
      maxPossiblePoints,
      dispatch,
    }),
    [state, numValue, maxPossiblePoints, dispatch]
  );

  return <QuizContext.Provider value={memoValue}>{children}</QuizContext.Provider>;
}
function useQuiz() {
  const ctx = useContext(QuizContext);
  if (ctx === null)
    throw new Error("useQuiz must be used inside <QuizProvider>.");
  return ctx;
}
export { QuizProvider, useQuiz };
