import TaskItem from "./taskitem";
import { useState, useEffect } from "react";
import TaskForm from "../taskform";
import SweetAlert from "../sweetalert";
import Swal from "sweetalert2";
function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const createNewTask = (taskName) => {
    if (!taskList.find((task) => task.name === taskName)) {
      setTaskList([...taskList, { name: taskName, done: false }]);
      return SweetAlert({ message: "¡Agregado con Éxito", type: "success" });
    } else {
      return SweetAlert({ message: "¡Esta tarea ya existe", type: "warning" });
    }
  };
  const toogleTask = (task) => {
    setTaskList(
      taskList.map((tk) =>
        tk.name == task.name ? { ...tk, done: !tk.done } : tk
      )
    );
  };
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
  const deleteAllTask = () => {
    if (taskList.length === 0) {
      return SweetAlert({ message: "¡No hay tareaas por borrar", type: "warning" });
    } else {
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
    }
  
  
  // Uso del componente
  deleteAllTask();
  

    return SweetAlert({
      message: "¡No hay tareas para borrar",
      type: "warning",
    });
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskList(JSON.parse(data)); // lo combierto a formato js
    }
  }, []); // si no tiene nada en arreglo se ejecuta cuando la app cambie

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
