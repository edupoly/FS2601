const initialState = {
  todos: ["goto goa", "play cricket", "eat biryani"],
};

export function todoReducer(state = initialState, action) {
  if (action.type === "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  return state;
}
