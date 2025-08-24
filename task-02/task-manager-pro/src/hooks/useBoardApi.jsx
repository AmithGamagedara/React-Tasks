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

    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true }); 
      dispatch({ type: "SET_ERROR", payload: null });   

      try {
        // Fetch board
        const boardRes = await getBoard(boardId);
        dispatch({ type: "SET_BOARD", payload: boardRes.data });

        // Fetch lists
        const listRes = await getLists(boardId);
        dispatch({ type: "SET_LISTS", payload: listRes.data });


        const taskEntries = await Promise.all(
          listRes.data.map((list) =>
            getTasks(list.id).then((taskRes) => [list.id, taskRes.data])
          )
        );

        const tasksObj = {};
        taskEntries.forEach(([listId, tasks]) => {
          tasksObj[listId] = tasks;
        });
        dispatch({ type: "SET_TASKS", payload: tasksObj });

      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message || "Something went wrong" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, [boardId]);

  // Add new task to list
  const insertTask = async (listId, taskData) => {
    try {
      const res = await addTask({ ...taskData, listId });
      dispatch({ type: "ADD_TASK", payload: { listId, task: res.data } });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  // Update task in list
  const updateTaskList = async (listId, taskId, updatedData) => {
    try {
      const res = await updateTask(taskId, updatedData);
      dispatch({
        type: "UPDATE_TASK",
        payload: { listId, taskId, updatedTask: res.data },
      });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  // Delete task from list
  const deleteTaskList = async (listId, taskId) => {
    try {
      await deleteTask(taskId);
      dispatch({ type: "DELETE_TASK", payload: { listId, taskId } });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  return {
    ...state,
    insertTask,
    updateTaskList,
    deleteTaskList,
  };
}

export default useBoardApi;