import { createTodo, deleteTodo, getTodoList, updateTodo } from "./actions";

// const uri = "http://localhost:5000/api/posts";
const uri = "https://todo-backend-m.herokuapp.com/api/posts";
export const addTodo = (text) => {
  let data = {
    title: text,
    content: text,
    postStatus: "OPEN",
  };
  return function (dispatch) {
    fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (todo) => {
      let todoResponse = await todo.json();
      dispatch(createTodo(todoResponse.post));
    });
  };
};

export const getAllTodos = () => {
  return function (dispatch) {
    fetch(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (todos) => {
      let todoListRes = await todos.json();
      dispatch(getTodoList(todoListRes.posts));
    });
  };
};

export const updateTodoThunk = (todo) => {
  let data = {
    title: todo.text,
    content: todo.text,
    postStatus: todo.postStatus,
  };
  return function (dispatch) {
    fetch(uri + "/" + todo._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (todos) => {
      let updatedTodo = await todos.json();
      dispatch(updateTodo(updatedTodo));
    });
  };
};

export const deleteTodoThunk = (id) => {
  return function (dispatch) {
    fetch(uri + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      dispatch(deleteTodo(id));
    });
  };
};
