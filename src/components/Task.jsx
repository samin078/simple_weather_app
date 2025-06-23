import React, { useContext } from "react";
import { MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiEditLine, RiDeleteBin5Fill } from "react-icons/ri";
import { TaskContext } from "../context/taskContext";

function Task({ task }) {
  const { dispatch } = useContext(TaskContext);
  return (
    <div className="flex flex-col border bg-white w-[20rem] rounded-lg shadow-lg gap-3 z-10 m-2">
      <div className="flex items-center gap-4 h-[2rem] bg-zinc-700 rounded-t-lg p-3 text-white">
        <span className="font-bold">{task.id}</span>
        <span
          className={`${task.complete ? "text-blue-400" : "text-green-400"}`}
        >
          {task.complete ? <IoCheckmarkDoneCircle /> : <MdPendingActions />}
        </span>
      </div>
      <span className="m-2">{task.todo}</span>
      <div className="flex items-center justify-between m-2">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 text-white rounded-lg">
          <RiEditLine />
        </button>
        <button
          onClick={() => dispatch({ type: "deleteTask", task: task })}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-lg"
        >
          <RiDeleteBin5Fill />
        </button>
      </div>
    </div>
  );
}

export default Task;
