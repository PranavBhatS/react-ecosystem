import { CREATE_TODO, FETCH_TODO_RESULTS, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

export const createTodo = (todo) => ({ type: CREATE_TODO, payload: { todo } });

export const deleteTodo = (id) => ({ type: REMOVE_TODO, payload: { id } });

export const updateTodo = (updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { updatedTodo },
});

export const getTodoList = (todoList) => ({
  type: FETCH_TODO_RESULTS,
  payload: { todoList },
});
