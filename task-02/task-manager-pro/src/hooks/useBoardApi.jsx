import { useState, useEffect } from "react";
import {
  getBoard,
  getLists,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../api/boardApi";

function useBoardApi(boardId) {
  const [board, setBoard] = useState(null);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!boardId) return;
    setLoading(true);

     getBoard(boardId).then(res => setBoard(res.data));

    getLists(boardId).then((res) => {
      setLists(res.data);
      // Fetch tasks for each list
      Promise.all(
        res.data.map((list) =>
          getTasks(list.id).then((taskRes) => [list.id, taskRes.data])
        )
      ).then((taskEntries) => {
        const tasksObj = {};
        taskEntries.forEach(([listId, tasks]) => {
          tasksObj[listId] = tasks;
        });
        setTasks(tasksObj);
        setLoading(false);
      });
    });
  }, [boardId]);

  // Add a new task to list
  const insertTask = async (listId, taskData) => {
    const res = await addTask({...taskData, listId});
    setTasks((prev) => ({
      ...prev,
      [listId]: [...(prev[listId] || []), res.data],
    }));
  };

  // Update a task in list
  const updateTaskList = async (listId, taskId, updatedData) => {
    const res = await updateTask(taskId, updatedData);
    setTasks((prev) => ({
      ...prev,
      [listId]: prev[listId].map((task) =>
        task.id === taskId ? res.data : task
      ),
    }));
  };

  // Delete a task from list
  const deleteTaskList = async (listId, taskId) => {
    await deleteTask(taskId);
    setTasks((prev) => ({
      ...prev,
      [listId]: prev[listId].filter((task) => task.id !== taskId),
    }));
  };

  return {
    board,
    lists,
    tasks,
    loading,
    insertTask,
    updateTaskList,
    deleteTaskList,
  };
}

export default useBoardApi;
