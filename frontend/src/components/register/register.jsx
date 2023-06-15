import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useApi from "../../services/useApi";

function Registration() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const api = useApi();
  const navigate = useNavigate();

  const postUser = () => {
    if (email.length === 0 || password.length === 0) {
      toast.error("Merci de remplir toutes les catégories", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      api
        .post("/user", {
          info: { email, password },
        })
        .then(() => {
          toast.success("Vous pouvez vous connecter !", {
            position: "top-center",
            autoClose: 1900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/login");
        });
    }
  };

  return (
    <div className="register-maindiv">
      <div className="input-part">
        <h6>email</h6>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="input-part">
        <h6>password</h6>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" onClick={postUser}>
        Valider
      </button>
    </div>
  );
}

export default Registration;
