import { useState } from "react";

const Count = () => {
  let [result, setResult] = useState(0);

  const handle = (ope) => {
    if (ope === "+") {
      setResult(result + 1);
    } else setResult(result - 1);
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div style={{ textAlign: "center" }} className="col-6">
        <div className="row">
          <button onClick={() => handle("+")} className="col-4">
            Increase
          </button>
          <p className="col-4">{result}</p>
          <button onClick={() => handle("-")} className="col-4">
            Decrease
          </button>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default Count;
