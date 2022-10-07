import { useState } from "react";

const Notice = (props) => {
  let [status, setStatus] = useState("block");
  const deleteComponent = () => {
    if (window.confirm("Are u sure?")) {
      setStatus("none");
    } else {
      setStatus("block");
    }
  };

  return (
    <>
      <div style={{ width: "100%", textAlign: "center", display: status }}>
        <h1>Hello World!</h1>
        <button className="btn btn-danger" onClick={() => deleteComponent()}>
          Delete the component
        </button>
      </div>
    </>
  );
};

export default Notice;
