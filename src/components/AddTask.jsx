import React, { useContext, useRef, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { TaskContext } from "../context/taskContext";
import { MdRestore, MdRestorePage } from "react-icons/md";
import axios from "axios";

function AddTask() {
  //const [title, setTitle] = useState("");
  //const [desc, setDesc] = useState("");
  //const [isComplete, setIsComplete] = useState(false);
  // let onTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // let onDescChange = (e) => {
  //   setDesc(e.target.value);
  // };
  // let onCompleteChange = (e) => {
  //   setIsComplete(e.target.checked);
  // };

  const id = useRef(null);
  const todo = useRef(null);
  const complete = useRef(null);
  const { dispatch } = useContext(TaskContext);
  async function fetchData() {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      dispatch({ type: "init", taskList: res.data.todos });
    } catch (error) {
      console.log("fetching todo error");
      dispatch({ type: "reset" });
    }
  }

  return (
    <div className="flex items-center gap-2 p-2 justify-around">
      <input
        ref={id}
        className="bg-purple-200 p-2"
        type="text"
        placeholder="Task name"
      />
      <input
        ref={todo}
        className="bg-purple-200 p-2"
        type="text"
        placeholder="Task Description"
      />
      <div className="flex items-center select-none gap-2">
        <input ref={complete} id="isComplete" type="checkbox" name="" />
        <label htmlFor="isComplete">Completed</label>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: "addTask",
            newTask: {
              id: id.current.value,
              todo: todo.current.value,
              complete: complete.current.checked,
            },
          })
        }
        className="bg-green-600 px-6 py-2 text-white rounded-lg"
      >
        <RiAddCircleFill />
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
        className="bg-purple-600 px-6 py-2 text-white rounded-lg"
      >
        <MdRestore />
      </button>
      <button
        onClick={fetchData}
        className="bg-purple-600 px-6 py-2 text-white rounded-lg"
      >
        Get tasks
      </button>
    </div>
  );
}

export default AddTask;
