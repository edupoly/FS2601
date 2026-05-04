//here counter related data and logic will be maintained
const initialState = {
  count: 1,
};

export function counterReducer(state = initialState, action) {
  if (action.type == "INC") {
    return { count: state.count + 1 };
  }
  if (action.type == "DEC") {
    return { count: state.count - 1 };
  }
  if (action.type == "RESET") {
    return { count: 0 };
  }
  return state;
}
