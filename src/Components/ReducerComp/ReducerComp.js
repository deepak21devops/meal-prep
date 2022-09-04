export const initialState = [
  {
    isLoading: false,
    meals: [],
    error: "",
    localData: [],
  },
];

export const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        isLoading: true,
        meals: [],
        error: "",
        localData: [],
      };

    case "FETCH_SUCCESS":
      return {
        meals: action.payload,
        isLoading: false,
        localData: [],
      };

    case "FETCH_FAIL":
      return {
        meals: [],
        error: action.payload,
        isLoading: false,
        localData: [],
      };

    case "FETCH_LOCAL":
      return {
        ...state,
        localData: action.payload,
      };

    default:
      return state;
  }
};
