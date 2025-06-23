import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

function reducer(oldTasks, action) {
  switch (action.type) {
    case "addTask":
      return [action.newTask, ...oldTasks];
    case "deleteTask":
      let newTasks = [...oldTasks];
      newTasks.splice(newTasks.indexOf(action.task), 1);
      return newTasks;
    case "reset":
      return [];
    case "init":
      return action.taskList;
    default:
      console.log("Invalid Type");
      return [];
  }
}

export const TaskContext = createContext({
  taskList: [],
  dispatch: () => {},
});

import React from "react";

function TaskContextProvider({ children }) {
  const [taskList, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/todos");
        dispatch({ type: "init", taskList: res.data.todos });
      } catch (error) {
        console.log("fetching todo error");
        dispatch({ type: "reset" });
      }
    }
    fetchData();
  }, []);
  return (
    <TaskContext.Provider value={{ taskList, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
