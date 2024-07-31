import { useState } from "react";
import Header from "./Header.jsx";
import MainWeb from "./MainWeb.jsx";
// import DateCounter from "./DateCounter.jsx";
function App() {
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
