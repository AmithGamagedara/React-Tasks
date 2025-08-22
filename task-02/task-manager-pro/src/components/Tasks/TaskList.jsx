import React from "react";
import { Card, Button } from "antd";
import TaskCard from "./TaskCard";

function TaskList({
  list,
  tasks,
  favorites,
  toggleFavorite,
  onAdd,
  onEdit,
  onDelete,
}) {
  return (
    <Card
      title={<span className="list-title">{list.title}</span>}
      className="list-card"
      variant="borderless"
    >
      {tasks[list.id]?.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          listId={list.id}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

      <Button
        type="dashed"
        onClick={() => onAdd(list.id)}
        className="add-task-btn"
      >
        + Add Task
      </Button>
    </Card>
  );
}

export default TaskList;
