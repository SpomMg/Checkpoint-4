/* eslint-disable react/destructuring-assignment */
import { useState } from "react";

function Objects(obj) {
  const [clicked, setClicked] = useState(false);

  const handlebutton = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h6 className="oui">
        {obj.object.title}
        {obj.object.name}
        {obj.object.type}
        {obj.object.value}
        <button type="button" className="button-info" onClick={handlebutton}>
          {clicked === true ? "moins d'info" : "plus d'info"}
        </button>
        {clicked === true ? obj.object.info : null}
      </h6>
    </div>
  );
}

export default Objects;
