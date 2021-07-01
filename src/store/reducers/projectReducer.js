const initialState = {
  name: "",
  docId: "",
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      return {
        ...state,
        name: action.payload.name,
        docId: action.payload.docId,
      };
    default:
      return state;
  }
};
