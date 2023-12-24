const Switch = (props) => {
  const { state, setState } = props;
  const changeState = () => {
    setState(!state);
  };
  return (
    <div className="switch">
      {state === true ? (
        <div>
          <button className="blue" onClick={changeState}>
            ON
          </button>
          <button className="white" onClick={changeState}>
            OFF
          </button>
        </div>
      ) : (
        <div>
          <button className="white" onClick={changeState}>
            ON
          </button>
          <button className="blue" onClick={changeState}>
            OFF
          </button>
        </div>
      )}
    </div>
  );
};

export default Switch;
