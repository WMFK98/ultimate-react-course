import { useEffect, useReducer, useState } from "react";
import Header from "./Header.jsx";
import MainWeb from "./MainWeb.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";
import { useQuize } from "../contexts/QuizeContext.jsx";
// import DateCounter from "./DateCounter.jsx";

function App() {
  const { status } = useQuize();
  return (
    <div className="app">
      <Header />
      <MainWeb>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}
      </MainWeb>
    </div>
  );
}

export default App;
