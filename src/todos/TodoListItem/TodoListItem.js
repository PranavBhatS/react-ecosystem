import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CssBaseline,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import moment from "moment";

const TodoListItem = ({ todo, onRemovePress, onToggleStatus }) => {
  const { title, postStatus, createdAt, updatedAt, _id } = todo;
  let handleStatusChange = (event) => {
    onToggleStatus({
      text: title,
      postStatus: event.target.value,
      _id,
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Card style={{ marginBottom: ".5rem" }}>
        <CardActionArea>
          <Typography
            style={{ margin: ".5rem 0 .5rem .8rem", fontWeight: "bold" }}
            variant="h5"
            component="h1"
          >
            {title}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 1rem",
            }}
          >
            <p>
              Created on: {moment(createdAt).format("DD/MM/YYYY hh:mm:ss a")}
            </p>
            <p>
              Updated on: {moment(updatedAt).format("DD/MM/YYYY hh:mm:ss a")}
            </p>
          </Box>
        </CardActionArea>
        <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
          <FormControl>
            <Select
              style={{ width: "10rem", textAlign: "center" }}
              value={postStatus}
              onChange={handleStatusChange}
              displayEmpty
            >
              {AVAILABLE_STATUS.map((status, index) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
            {/* <FormHelperText>Status</FormHelperText> */}
          </FormControl>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => onRemovePress(_id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
const AVAILABLE_STATUS = [
  { value: "OPEN", label: "Open" },
  { value: "INPROGRESS", label: "Inprogress" },
  { value: "DONE", label: "Done" },
];
export default TodoListItem;

