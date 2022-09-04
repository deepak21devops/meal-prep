import React from "react";
import "./meals.css";
import { useState, useContext } from "react";
import { mealContext } from "../../App";

const Meals = () => {
  const mealData = useContext(mealContext);

  const [modalId, setModalId] = useState("");
  const handleModal = (event) => {
    setModalId(event.currentTarget.id);
  };

  const handleItems = (mealItem) => {
    let data = JSON.parse(localStorage.getItem("meals") || "[]");
    if (data.length <= 0) {
      data.push(mealItem);

      mealData.dispatch({ type: "FETCH_LOCAL", payload: data });

      localStorage.setItem("meals", JSON.stringify(data));
    } else {
      let filterData = data.find((ele) => ele.idMeal === mealItem.idMeal);
      if (filterData === undefined) {
        data.push(mealItem);
        mealData.dispatch({ type: "FETCH_LOCAL", payload: data });

        localStorage.setItem("meals", JSON.stringify(data));
      }
    }
  };
  //   console.log(mealData);

  return (
    <div className="meals mt-5">
      <div className="container">
        <div class="row">
          {mealData.state?.meals?.meals?.map((ele) => (
            <div
              id={ele.idMeal}
              class="col mb-5"
              key={ele.idMeal}
              onClick={handleModal}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={ele.strMealThumb}
                  className="card-img-top"
                  alt="..."
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ cursor: "pointer" }}
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{ele.strMeal}</h5>
                  <p
                    className="card-text fs-3 "
                    style={{ cursor: "pointer" }}
                    onClick={() => handleItems(ele)}
                  >
                    👍
                  </p>
                </div>
              </div>
            </div>
          ))}

          {mealData.state?.meals?.meals
            ?.filter((ele) => ele.idMeal === modalId)
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
        </div>
      </div>
    </div>
  );
};

export default Meals;
