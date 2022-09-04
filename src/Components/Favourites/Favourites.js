import React from "react";
import { useContext, useState } from "react";
import { mealContext } from "../../App";
import "./favourites.css";
const Favourites = () => {
  const { dispatch } = useContext(mealContext);
  const [id, setId] = useState("");

  // console.log(state.localData);
  const allData = JSON.parse(localStorage.getItem("meals"));

  const handleDelete = (delItem) => {
    if (allData.length > 0) {
      let delData = allData.filter((ele) => ele.idMeal !== delItem.idMeal);
      dispatch({ type: "FETCH_LOCAL", payload: delData });

      localStorage.setItem("meals", JSON.stringify(delData));
    } else {
      localStorage.removeItem("meals");
    }
  };

  return (
    <>
      {allData.length > 0 && (
        <div
          className="favourites container  mt-5"
          onClick={(e) => setId(e.currentTarget.id)}
        >
          <h5 style={{ color: "white" }}>Favorites</h5>
          <div className="d-flex">
            {allData?.map((ele) => (
              <div
                className="favContainer mx-3"
                key={ele.idMeal}
                id={ele.idMeal}
              >
                <img
                  src={ele.strMealThumb}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  alt=""
                ></img>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(ele)}
                >
                  remove
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {allData
        ?.filter((ele) => ele.idMeal === id)
        .map((ele) => (
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
              <div class="modal-content">
                <div class="modal-body">
                  <div>
                    <div className="imgContainer">
                      <img src={ele.strMealThumb} alt=""></img>
                    </div>
                  </div>
                  <div>
                    <h1>{ele.strMeal}</h1>
                    <p>Cooking Instructions</p>
                    <p>{ele.strInstructions}</p>
                    <a href={ele.strSource} target="blank">
                      Original Link
                    </a>
                    <br />
                    <br />
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Favourites;
