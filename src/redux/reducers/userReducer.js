const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  console.log("Reducer called");
  console.log(`action in REDUCER`, action);

  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USER_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
