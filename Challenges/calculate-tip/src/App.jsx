import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [rateService, setRateService] = useState(0);
  const [rateFriendService, setRateFriendService] = useState(0);
  const maxtip = bill * 0.5;
  const tip = Math.round(maxtip * rateService + maxtip * rateFriendService);
  function handleReset() {
    setBill("");
    setRateFriendService(0);
    setRateService(0);
  }

  return (
    <div>
      <InputText
        text="How much was the bill?"
        value={bill}
        setValue={setBill}
      />
      <InputSelete
        text="How did you like the service?"
        value={rateService}
        setValue={setRateService}
      />
      <InputSelete
        text="How did your friend like the service?"
        value={rateFriendService}
        setValue={setRateFriendService}
      />
      <h1 style={bill ? {} : { display: "none" }}>
        You pay ${bill + tip}(${bill} + ${tip} tip)
      </h1>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

function InputText({ text, value, setValue }) {
  return (
    <label>
      <p>{text}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </label>
  );
}

function InputSelete({ text, value, setValue }) {
  return (
    <label>
      <p>{text}</p>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value={0}>Disatisfied(0%)</option>
        <option value={0.05}>It was okey(5%)</option>
        <option value={0.1}>It was good(10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </label>
  );
}
export default App;
