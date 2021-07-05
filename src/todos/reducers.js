import {
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  FETCH_TODO_RESULTS,
  FETCH_TODO_ERROR,
} from "./actionTypes";
const initialState = {
  isLoading: true,
  todoList: [],
};
export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TODO_RESULTS: {
      return {
        todoList: payload.todoList,
        isLoading: false,
      };
    }
    case FETCH_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case CREATE_TODO: {
      const { todo } = payload;
      // const newTodo = { todo };
      let todoList = [...state.todoList];
      todoList.push(todo);
      return {
        isLoading: false,
        todoList: todoList,
      };
    }
    case REMOVE_TODO: {
      const { id } = payload;
      let updateExistingTodoList = state.todoList.filter(
        (todo) => todo._id !== id
      );

      // let updateExistingTodoList = state.todoList.splice(selectedIndex,1);
      return {
        isLoading: false,
        todoList: [...updateExistingTodoList],
      };
    }
    case UPDATE_TODO: {
      const { updatedTodo } = payload;
      let updateExistingTodoList = state.todoList.filter((todo) => {
        if (todo._id !== updatedTodo._id) {
          return updatedTodo;
        }
        // return todo;
      });
      return {
        isLoading: false,
        todoList: [updatedTodo, ...updateExistingTodoList],
      };
    }
    default:
      return state;
  }
};
