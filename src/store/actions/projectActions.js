export const selectProject = (name, docId) => {
  return (dispatch, getState) => {
    dispatch({ type: "SELECT_PROJECT", payload: { name: name, docId: docId } });
  };
};
