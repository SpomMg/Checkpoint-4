import { useState } from "react";
import PropTypes from "prop-types";
import useApi from "../../../services/useApi";
import "./Object.css";

function Objects({ obj, refresh, setRefresh }) {
  const [clicked, setClicked] = useState(false);
  const api = useApi();

  const handlebutton = () => {
    setClicked(!clicked);
  };

  const deleteobject = () => {
    api
      .delete("/object", {
        params: {
          id: obj.id,
        },
      })
      .then(setRefresh(!refresh));
  };

  return (
    <div>
      <div className="object-maindiv">
        <div className="obj-title"> {obj.title}</div>
        <div className="object-name"> {obj.name}</div>
        <div className="object-type"> {obj.type}</div>
        <div className="object-value"> {obj.value}</div>
        <button type="button" className="button-info" onClick={handlebutton}>
          {clicked === true ? "moins d'info" : "plus d'info"}
        </button>
        {clicked === true ? obj.info : null}
        <button type="button" className="button-delete" onClick={deleteobject}>
          supprimer l'offre
        </button>
      </div>
    </div>
  );
}

Objects.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  refresh: PropTypes.bool.isRequired,
  setRefresh: PropTypes.func.isRequired,
};

export default Objects;
