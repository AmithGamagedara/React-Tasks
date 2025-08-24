export const initialState = {
  board: null,
  lists: [],
  tasks: {},
  loading: false,
  error: null,
};

export function boardReducer(state, action) {
  switch (action.type) {
    case "SET_BOARD":
      return { ...state, board: action.payload };

    case "SET_LISTS":
      return { ...state, lists: action.payload };

    case "SET_TASKS":
      return { ...state, tasks: action.payload, loading: false };

    case "ADD_TASK": {
      const { listId, task } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [listId]: [...(state.tasks[listId] || []), task],
        },
      };
    }

    case "UPDATE_TASK": {
      const { listId: uListId, taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [uListId]: (state.tasks[uListId] || []).map((t) =>
            t.id === taskId ? updatedTask : t
          ),
        },
      };
    }

    case "DELETE_TASK": {
      const { listId: dListId, taskId: dTaskId } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [dListId]: state.tasks[dListId].filter((t) => t.id !== dTaskId),
        },
      };
    }

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
