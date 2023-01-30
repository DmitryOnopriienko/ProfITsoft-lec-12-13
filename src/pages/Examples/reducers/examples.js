const initialState = {
  isLoading: false,
  list: [],
  name: "Examples",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_EXAMPLES": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "RECEIVE_EXAMPLES": {
      const {
        examples
      } = action;
      return {
        ...state,
        isLoading: true,
        list: examples,
      };
    }
    default: return state;
  }
}