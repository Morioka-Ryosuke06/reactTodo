import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
