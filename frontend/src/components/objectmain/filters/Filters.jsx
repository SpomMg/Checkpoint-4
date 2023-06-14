import React, { useRef, useState, useEffect } from "react";
import useApi from "../../../services/useApi";

function Filters() {
  const [genreOptions, setGenreOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [consoleOptions, setConsoleOptions] = useState([]);

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

  return (
    <div>
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
    </div>
  );
}

export default Filters;
