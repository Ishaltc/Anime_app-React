export function postReducer(state = [], action) {
  switch (action.type) {
    case "DATA":
      return action.payload;
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
}
