import React, { useState, useContext, useEffect } from "react";
import "./search.css";
import { mealContext } from "../../App";
const Search = () => {
  const { dispatch } = useContext(mealContext);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((resp) => dispatch({ type: "FETCH_SUCCESS", payload: resp }))
      .catch((err) => dispatch({ type: "FETCH_FAIL", payload: err }));
  }, [dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "FETCH_DATA" });
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((resp) => dispatch({ type: "FETCH_SUCCESS", payload: resp }))
      .catch((err) => dispatch({ type: "FETCH_FAIL", payload: err }));
  };
  // state?.meals?.meals?.map((ele) => console.log(ele));
  return (
    <div className="search mt-3">
      <div className="container d-flex justify-content-start align-items-center">
        <div className="input-group w-25 mx-3">
          <input
            type="text"
            className="form-control"
            placeholder="type favourite meal"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary  mx-2"
          onClick={handleSearch}
        >
          Search
        </button>
        <button type="button" class="btn btn-info  mx-2">
          Surprise Me!
        </button>
      </div>
    </div>
  );
};

export default Search;
