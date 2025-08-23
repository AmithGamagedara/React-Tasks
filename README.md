# 📌 Task Manager Pro

Task Manager Pro is a simple task management web app inspired by Trello and Jira board views. The app is built using React, React Router v6, Ant Design (antd), and SCSS. It allows users to organize tasks inside boards and lists with a clean and responsive UI.

### 🚀 The app includes:

- A Boards List Page (/boards) with board cards (e.g., Personal Tasks, Team Board).
- A Single Board Page (/boards/:id) where users can:
  - Add new tasks to lists.
  - Edit task title and description in a modal.
  - Delete tasks.
- A mock API layer (with custom hook useBoardApi) to handle CRUD operations for tasks. (used json server)
- State management with useReducer for tasks and lists.
- SCSS styling for an organized and clean layout.
- Extra feature: Task Favorites – users can mark tasks as favorites, and the count is displayed at the top of the board.

---

#### React Router
- Used for navigation between pages (e.g., BoardList, BoardPage). It helps show different pages without reloading the browser.
#### Ant Design (antd)
- Used for UI components like Modal, Form, Input, Button, and Card. This made the app look modern and saved time in styling.
#### SCSS 
- Used for UI components like Modal, Form, Input, Button, and Card. This made the app look modern and saved time in styling.
#### State (useState)
- Used to store data like tasks, modal open/close, and selected board.
#### Reducer (useReducer)
- Used to manage complex state changes for boards and tasks in one place. It makes adding, editing, and removing tasks more structured.
#### Hooks
- Used useState, useEffect, useReducer, useContext to manage data, handle side effects, and share favorites across components.

---
### 🌟 Extra Feature Added
Task Favorite – created a FavoriteContext where users can mark tasks as favorites. The count shows in the header.

### 🎨 Design Decisions
- Used Ant Design modals for adding and editing tasks instead of using prompt (better UI/UX).
- Split components into separate files (AddTaskModal, EditTaskModal, FavoriteContext) for cleaner code.
- Divided BoardPage into smaller components (TaskCard for tasks and TaskList for lists) to keep the code more organized and easier to maintain.
- Added an api.http file to easily test mock API requests and confirm the backend works correctly.
- Used context for favorites instead of props drilling, so the data is available anywhere in the app.



