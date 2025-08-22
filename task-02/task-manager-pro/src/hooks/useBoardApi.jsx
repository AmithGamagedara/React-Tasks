import { useReducer, useEffect } from "react";
import {
  getBoard,
  getLists,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../api/boardApi";
import { boardReducer, initialState } from "../reducers/boardReducer";

function useBoardApi(boardId) {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  useEffect(() => {
    if (!boardId) return;

    dispatch({ type: "SET_LOADING", payload: true });

    //board fetch
    getBoard(boardId).then((res) =>
      dispatch({ type: "SET_BOARD", payload: res.data })
    );

    //lists n tasks fetch
    getLists(boardId).then((res) => {
      dispatch({ type: "SET_LISTS", payload: res.data });
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
        dispatch({ type: "SET_TASKS", payload: tasksObj });
      });
    });
  }, [boardId]);

  // Add a new task to list
  const insertTask = async (listId, taskData) => {
    const res = await addTask({ ...taskData, listId });
    dispatch({ type: "ADD_TASK", payload: { listId, task: res.data } });
  };

  // Update a task in list
  const updateTaskList = async (listId, taskId, updatedData) => {
    const res = await updateTask(taskId, updatedData);
    dispatch({
      type: "UPDATE_TASK",
      payload: { listId, taskId, updatedTask: res.data },
    });
  };

  // Delete a task from list
  const deleteTaskList = async (listId, taskId) => {
    await deleteTask(taskId);
    dispatch({ type: "DELETE_TASK", payload: { listId, taskId } });
  };

  return {
    ...state,
    insertTask,
    updateTaskList,
    deleteTaskList,
  };
}

export default useBoardApi;
