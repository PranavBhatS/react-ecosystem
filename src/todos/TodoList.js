import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import TodoListItem from "./TodoListItem/TodoListItem";
import { connect } from "react-redux";
import { deleteTodoThunk, getAllTodos, updateTodoThunk } from "./thunks";
const TodoList = ({
  todos = [],
  onRemovePress,
  onToggleStatus,
  getTodoList,
  isLoading,
}) => {
  useEffect(() => {
    getTodoList();
  }, []);
  useEffect(() => {
    console.log("todo updated");
    console.log(todos,isLoading);
  }, [todos,isLoading]);
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {isLoading ? (
        <div>Loading data</div>
      ) : (
        todos &&
        todos.map((todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            onRemovePress={onRemovePress}
            onToggleStatus={onToggleStatus}
          />
        ))
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos.todoList,
  isLoading: state.todos.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePress: (_id) => dispatch(deleteTodoThunk(_id)),
  onToggleStatus: (todo) => dispatch(updateTodoThunk(todo)),
  getTodoList: () => dispatch(getAllTodos()),
  // onDisplayAlert: (text) => dispatch(displayAlert(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
