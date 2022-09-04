export const fetch_data = () => {
  return {
    type: "FETCH_DATA",
  };
};

export const fetch_succes = (payload) => {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
};

export const fetch_fail = (payload) => {
  return {
    type: "FETCH_FAIL",
    payload,
  };
};
