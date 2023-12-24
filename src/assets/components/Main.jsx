import Switch from "./Switch";
import { useState } from "react";

const Main = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(false);
  return (
    <main className="container">
      <div>
        <Switch state={state1} setState={setState1} />
        <Switch state={state2} setState={setState2} />
        <Switch state={state3} setState={setState3} />
      </div>
      <div className="message-div">
        {state1 && state2 && state3 ? (
          <div className="green">Go !</div>
        ) : (
          <div className="red">No way !</div>
        )}
      </div>
    </main>
  );
};

export default Main;
