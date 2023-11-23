
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskItem({ task, toogleTask, deleteTask }) {

  const handleDelete = () => {
    deleteTask(task.name);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
      }}
    >
      <ListItem
        secondaryAction={
          <>
            {/* Botón para borrar */}
            <IconButton edge="end" aria-label="DeleteIcon"  onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense value={task.done} onChange={() => toogleTask(task)}  >
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={task.done}

             
            />
          </ListItemIcon>
          <ListItemText
            primary={task.name}
            sx={{ textDecoration: task.done ? "line-through" : "none" }}
            style={{overflow:"hidden"}}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    done: PropTypes.number.isRequired,
  }).isRequired,
  toogleTask: PropTypes.shape({
  }).isRequired,
  deleteTask: PropTypes.shape({
  }).isRequired,

};


export default TaskItem;
