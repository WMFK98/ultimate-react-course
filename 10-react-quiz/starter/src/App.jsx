import { useEffect, useReducer, useState } from "react";
import Header from "./Header.jsx";
import MainWeb from "./MainWeb.jsx";
// import DateCounter from "./DateCounter.jsx";

const initialState = {
  questions: [],
  // loading error ready active finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000/questions").catch((err) =>
        dispatch({ type: "dataFailed" })
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
    })();
  }, []);

  return (
    <div className="heappader">
      <Header />
      <MainWeb>
        <p>1/15</p>
        <p>Question?</p>
      </MainWeb>
    </div>
  );
}

export default App;
