//section-07

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
          {
            id: "t1",
            title: "Buy groceries",
            description: "Milk, eggs, bread, fruits",
          },
          {
            id: "t2",
            title: "Finish assignment",
            description: "Complete React homework",
          },
          {
            id: "t8",
            title: "Clean room",
            description: "Organize desk and wardrobe",
          },
          {
            id: "t9",
            title: "Read a book",
            description: "At least 20 pages of Atomic Habits",
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: "t3",
            title: "Learn React Router",
            description: "Follow tutorial and practice",
          },
          {
            id: "t10",
            title: "Build portfolio website",
            description: "Create using React + Tailwind",
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: "t4",
            title: "Morning workout",
            description: "30 minutes cardio",
          },
          {
            id: "t11",
            title: "Wash clothes",
            description: "Laundry finished in the morning",
          },
        ],
      },
      {
        id: "review",
        title: "Review",
        tasks: [
          {
            id: "t7",
            title: "Code review PR #12",
            description: "Check new feature branch",
          },
          {
            id: "t12",
            title: "Check grocery list",
            description: "Confirm all items are bought",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    name: "Team Board",
    description: "Tasks for the project team",
    lists: [
      {
        id: "todo",
        title: "To Do",
        tasks: [
          {
            id: "t5",
            title: "Plan sprint",
            description: "Outline goals for sprint 12",
          },
          {
            id: "t13",
            title: "Design login page",
            description: "Create UI mockup in Figma",
          },
          {
            id: "t14",
            title: "Prepare presentation",
            description: "Slides for client demo",
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: "t6",
            title: "Fix login bug",
            description: "Debug API response issue",
          },
          {
            id: "t15",
            title: "Integrate payment gateway",
            description: "Work on Stripe integration",
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: "t16",
            title: "Setup project repo",
            description: "Created GitHub repo with README",
          },
          {
            id: "t17",
            title: "Team meeting",
            description: "Weekly sync-up completed",
          },
        ],
      },
      {
        id: "review",
        title: "Review",
        tasks: [
          {
            id: "t7",
            title: "Code review PR #12",
            description: "Review team member's PR",
          },
        ],
      },
    ],
  },
];
