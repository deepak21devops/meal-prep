import Favourites from "./Components/Favourites/Favourites";
import Meals from "./Components/Meals/Meals";
import Search from "./Components/Search/Search";
import {
  initialState,
  MealReducer,
} from "./Components/ReducerComp/ReducerComp";
import { useReducer, createContext } from "react";

export const mealContext = createContext();

function App() {
  const [state, dispatch] = useReducer(MealReducer, initialState);

  // console.log(state.meals);
  return (
    <mealContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Search />
        <Favourites />
        {state.isLoading ? <h1>Loading......</h1> : <Meals />}
      </div>
    </mealContext.Provider>
  );
}

export default App;
