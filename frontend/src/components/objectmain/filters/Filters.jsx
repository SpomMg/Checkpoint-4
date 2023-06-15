import React, { useRef, useState, useEffect } from "react";
import useApi from "../../../services/useApi";
import Objects from "../object/Object";
import "./Filters.css";

function Filters() {
  const [objects, setObjects] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [consoleOptions, setConsoleOptions] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

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
    if (
      genremultifilter === 0 &&
      pricemultifilter === 0 &&
      consolemultifilter === 0
    ) {
      api
        .get("/object")
        .then((response) => {
          setObjects(response.data);
        })
        .then((response) => {
          setObjects(response.data);
        });
    } else {
      api
        .get("/object/filter", {
          params: {
            filter: currentFilters,
          },
        })
        .then((response) => {
          setObjects(response.data);
        });
    }
  };

  useEffect(() => {
    resetFilters();
  }, [refresh]);

  return (
    <div className="filter-maindiv">
      <div className="object-filters">
        <select
          className="object-select"
          ref={genreRef}
          onChange={() => MultiFilter()}
        >
          <option value="0">Genre</option>
          {genreOptions}
        </select>
        <select
          className="object-select"
          ref={priceRef}
          onChange={() => MultiFilter()}
        >
          <option value="0">Prix</option>
          {priceOptions}
        </select>
        <select
          className="object-select"
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
        return (
          <Objects
            key={object.id}
            obj={object}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        );
      })}
    </div>
  );
}

export default Filters;
