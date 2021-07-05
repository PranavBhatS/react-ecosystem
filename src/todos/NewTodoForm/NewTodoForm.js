import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, CssBaseline, Input } from "@material-ui/core";
import { connect } from "react-redux";

// import { createTodo } from "./../actions";
import { addTodo } from "../thunks";
const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: "flex",
    padding: "1rem",
    gap: "1rem",
    alignItems: "stretch",
    boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
  },
  input: {
    flex: "4",
  },
  submitButton: {
    flex: "1",
    alignSelf: "flex-end"
  },
}));

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const classes = useStyles();
  const [inputValue, selectInpuValue] = useState("");
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.conatiner}>
        <Input
          label="New todo"
          type="next"
          placeholder="type new todo here"
          className={classes.input}
          value={inputValue}
          onChange={(e) => selectInpuValue(e.target.value)}
          multiline="true"
          rowsMax="3"
        />
     
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          size="small"
          onClick={() => {
            let isDup = todos.todoList.some((d) => d === inputValue);
            if (!isDup && inputValue) {
              onCreatePressed(inputValue);
              selectInpuValue("");
            }
          }}
        >
          Create Todo
        </Button>
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
