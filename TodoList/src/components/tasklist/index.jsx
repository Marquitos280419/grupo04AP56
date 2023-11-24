import TaskItem from "./taskitem";
import { useState, useEffect } from "react";
import TaskForm from "../taskform";
import SweetAlert from "../sweetalert";
import Swal from "sweetalert2";
function TaskList() {
  const [taskList, setTaskList] = useState([]);
// esto crea una nueva tarea si la tarea ya existe muestra una alerta de warning si no guarda y muestra un success
  const createNewTask = (taskName) => {
    if (!taskList.find((task) => task.name === taskName)) {
      setTaskList([...taskList, { name: taskName, done: false }]);
      return SweetAlert({ message: "¡Agregado con Éxito", type: "success" });
    } else {
      return SweetAlert({ message: "¡Esta tarea ya existe", type: "warning" });
    }
  };
  // esto actualiza es estado de la tarea 
  const toogleTask = (task) => {
    setTaskList(
      taskList.map((tk) =>
        tk.name == task.name ? { ...tk, done: !tk.done } : tk
      )
    );
  };
  //esto borra una tarea
  const deleteTask = (taskName) => {
    Swal.fire({
      title: "Desea borrar",
      text: "Ya no podra revertilo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comfirmar borrado",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado",
          text: "La tarea ha sido borrada.",
          icon: "success",
        });
        setTaskList(taskList.filter((task) => task.name !== taskName));
      }
    });
  };

  // esto borra todas las tareas
  const deleteAllTask = () => {
      Swal.fire({
        title: "Desea borrar todas las tareas",
        text: "Ya no podrá revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar borrado",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Borrado",
            text: "Todas las tareas han sido borradas.",
            icon: "success",
          });
          setTaskList([]); // Establece el array a uno vasio
        }
      });

  };
  // obtiene las lista de tarea del local storage
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskList(JSON.parse(data)); // lo combierto a un objeto java script
    }
  }, []); // si no tiene nada en arreglo se ejecuta cuando la app cambie
  
  // agrega la tarea al local storage y lo combierte a formato json
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <TaskForm createNewTask={createNewTask} deleteAllTasks={deleteAllTask} />
      {taskList.map((t) => (
        <TaskItem
          key={t.name}
          task={t}
          toogleTask={toogleTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}

export default TaskList;
