export const defaultState = {
  searchBegan: false,
  initialRequest: false,
  city: null,
};

const searchStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FIRST_REQUEST":
      return {
        ...state,
        searchBegan: true,
        initialRequest: true,
        city: action.city,
      };
    case "ADDITIONAL_REQUESTS":
      return {
        ...state,
        searchBegan: true,
        initialRequest: false,
        city: action.city,
      };
    case "END_SEARCH":
      return {
        ...state,
        searchBegan: false,
        initialRequest: false,
        city: null,
      };
    default:
      return state;
  }
};

export default searchStatusReducer;
