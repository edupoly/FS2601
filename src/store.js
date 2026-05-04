import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todo.reducer";
import { counterReducer } from "./reducers/counter.reducer";
const store = createStore(combineReducers({ todoReducer, counterReducer }));
export default store;
