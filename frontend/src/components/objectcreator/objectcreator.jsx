import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useApi from "../../services/useApi";

function ObjectCreator() {
  const [genreOptions, setGenreOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [consoleOptions, setConsoleOptions] = useState([]);
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState([]);

  const navigate = useNavigate();
  const genreRef = useRef();
  const priceRef = useRef();
  const consoleRef = useRef();
  const api = useApi();

  useEffect(() => {
    api.get("/filter/genre").then((response) => {
      setGenreOptions(
        response.data.map((genre) => (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))
      );
    });
  }, []);

  useEffect(() => {
    api.get("/filter/price").then((response) => {
      setPriceOptions(
        response.data.map((price) => (
          <option value={price.id} key={price.id}>
            {price.value}
          </option>
        ))
      );
    });
  }, []);

  useEffect(() => {
    api.get("/filter/console").then((response) => {
      setConsoleOptions(
        response.data.map((console) => (
          <option value={console.id} key={console.id}>
            {console.type}
          </option>
        ))
      );
    });
  }, []);

  const postObject = () => {
    const genrevalue = genreRef.current.value;
    const pricevalue = priceRef.current.value;
    const consolevalue = consoleRef.current.value;
    if (
      title.length === 0 ||
      genrevalue === "0" ||
      pricevalue === "0" ||
      consolevalue === "0" ||
      info.length === 0
    ) {
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
        .post("/object", {
          filter: { title, genrevalue, pricevalue, consolevalue, info },
        })
        .then(() => {
          toast.success("Offre validé !", {
            position: "top-center",
            autoClose: 1900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
    }
  };

  return (
    <div>
      <div className="input-part">
        <h2>Titre du jeux</h2>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="offersemploi-filters">
        <select className="offersemploi-select" ref={genreRef}>
          <option value="0">Genre</option>
          {genreOptions}
        </select>
        <select className="offersemploi-select" ref={priceRef}>
          <option value="0">Prix</option>
          {priceOptions}
        </select>
        <select className="offersemploi-select" ref={consoleRef}>
          <option value="0">Console</option>
          {consoleOptions}
        </select>
      </div>
      <div className="input-part">
        <h2>Description du jeux</h2>
        <input
          type="text"
          onChange={(e) => setInfo(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="button">
        <button type="submit" onClick={postObject}>
          Valider
        </button>
      </div>
    </div>
  );
}

export default ObjectCreator;
