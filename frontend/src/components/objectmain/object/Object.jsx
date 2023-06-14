/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
import useApi from "../../../services/useApi";

function Objects(obj) {
  const [clicked, setClicked] = useState(false);
  const api = useApi();

  const handlebutton = () => {
    setClicked(!clicked);
  };

  const deleteobject = () => {
    api
      .delete("/object", {
        params: {
          id: obj.object.id,
        },
      })
      .then();
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
        <button type="button" className="button-delete" onClick={deleteobject}>
          supprimer l'offre
        </button>
      </h6>
    </div>
  );
}

export default Objects;
