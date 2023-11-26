import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import SweetAlert from "../sweetalert";

export default function TaskForm({ createNewTask, deleteAllTasks }) {
  const [tarea, setTarea] = useState();

  const deleteAll = () => {
    deleteAllTasks();
  };

  const addTask = () => {
    if (tarea === "") {
      return SweetAlert({ message: "Ingrese una tarea", type: "warning" });
    } else {
      createNewTask(tarea);
      setTarea(""); // Limpia el input luego de agregar la tarea
    }
  };
  // escuchamos si se pulso alguna tecla estando en el input.
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // si la tecla pulsada es la de enter se agrega la tarea.
      addTask();
    }
  };

  const onChangeTarea = (e) => setTarea(e.target.value);

  return (
    // Misma correccion que esta en App.jsx
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Ingrese una tarea"
            value={tarea}
            onChange={onChangeTarea}
            onKeyDown={handleKeyPress}
            style={{ margin: "12px" }}
          />
          <Button size="small" onClick={addTask} style={{ margin: "18px" }}>
            Agregar
          </Button>
          <Button
            size="small"
            onClick={deleteAll}
            style={{ margin: "18px", color: "red" }}
          >
            Borrar Todo
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
TaskForm.propTypes = {
  createNewTask: PropTypes.func.isRequired,
  deleteAllTasks: PropTypes.func.isRequired,
};
