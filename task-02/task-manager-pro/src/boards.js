export const boards = [
  {
    id: "1",
    name: "Personal Tasks",
    description: "My personal to-do board",
    lists: [
      {
        id: "todo",
        title: "To Do",
        tasks: [
          { id: "t1", title: "Buy groceries" },
          { id: "t2", title: "Finish assignment" },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [{ id: "t3", title: "Learn React Router" }],
      },
      {
        id: "done",
        title: "Done",
        tasks: [{ id: "t4", title: "Morning workout" }],
      },
      {
        id: "review",
        title: "Review",
        tasks: [{ id: "t7", title: "Code review PR #12" }],
      },
    ],
  },

  {
    id: "2",
    name: "Team Board",
    description: "Tasks for the project team",
    lists: [
      {
        id: "backlog",
        title: "Backlog",
        tasks: [{ id: "t5", title: "Plan sprint" }],
      },
      {
        id: "doing",
        title: "Doing",
        tasks: [{ id: "t6", title: "Fix login bug" }],
      },
      {
        id: "review",
        title: "Review",
        tasks: [{ id: "t7", title: "Code review PR #12" }],
      },
    ],
  },
];
