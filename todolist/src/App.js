import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";
//comando deprecado, mal subido al github
function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState([false]);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted([checked])}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted />
        )}
      </Container>
    </main>
  );
}

export default App;
