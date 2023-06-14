import React, { useRef, useState, useEffect } from "react";
import useApi from "../../../services/useApi";
import Objects from "../object/Object";

function Filters() {
  const [objects, setObjects] = useState([]);
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

  useEffect(() => {
    api.get("/object").then((response) => {
      setObjects(response.data);
    });
  }, []);

  const resetFilters = () => {
    genreRef.current.value = 0;
    priceRef.current.value = 0;
    consoleRef.current.value = 0;
    api.get("/object").then((response) => {
      setObjects(response.data);
    });
  };

  const MultiFilter = () => {
    const genremultifilter = genreRef.current.value;
    const pricemultifilter = priceRef.current.value;
    const consolemultifilter = consoleRef.current.value;
    const currentFilters = {
      genremultifilter,
      pricemultifilter,
      consolemultifilter,
    };
    api
      .get("/object/filter", {
        params: {
          filter: currentFilters,
        },
      })
      .then((response) => {
        setObjects(response.data);
      });
  };

  return (
    <div>
      <div className="offersemploi-filters">
        <select
          className="offersemploi-select"
          ref={genreRef}
          onChange={() => MultiFilter()}
        >
          <option value="0">Genre</option>
          {genreOptions}
        </select>
        <select
          className="offersemploi-select"
          ref={priceRef}
          onChange={() => MultiFilter()}
        >
          <option value="0">Prix</option>
          {priceOptions}
        </select>
        <select
          className="offersemploi-select"
          ref={consoleRef}
          onChange={() => MultiFilter()}
        >
          <option value="0">Console</option>
          {consoleOptions}
        </select>
        <button type="button" onClick={resetFilters}>
          Reinitialiser
        </button>
      </div>
      {objects.map((object) => {
        return <Objects key={object.id} object={object} />;
      })}
    </div>
  );
}

export default Filters;
