import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  // loading error ready active finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 300,
  maxPoints: 0,
  numQuestions: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        maxPoints: action.payload.reduce((sum, que) => que.points + sum, 0),
        numQuestions: action.payload.length,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.highscore < state.points ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining < 1 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

const QuizeContext = createContext();

function QuizeProvider({ children }) {
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000/questions").catch((err) =>
        dispatch({ type: "dataFailed" })
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
    })();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
}

function useQuize() {
  const context = useContext(QuizeContext);
  if (context === undefined) throw new Error("Quize Context is outside");
  return context;
}

export { QuizeProvider, useQuize };
