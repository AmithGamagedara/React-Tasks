import React from "react";
import { Card, Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

function TaskCard({
  task,
  listId,
  favorites,
  toggleFavorite,
  onEdit,
  onDelete,
}) {
  return (
    <Card
      key={task.id}
      size="small"
      className="task-card"
      extra={
        <div className="task-actions">
          <span
            style={{ cursor: "pointer", marginRight: "6px" }}
            onClick={() => toggleFavorite(task.id)}
          >
            {favorites.includes(task.id) ? (
              <StarFilled style={{ color: "#fadb14" }} />
            ) : (
              <StarOutlined />
            )}
          </span>
          <Button
            onClick={() => onEdit(listId, task)}
            color="primary"
            variant="filled"
            size="small"
          >
            edit
          </Button>
          {/* <a onClick={() => handleEditTask(list.id, task.id)}>
                        edit
                      </a> */}
          <Button
            onClick={() => onDelete(listId, task.id)}
            color="danger"
            variant="filled"
            size="small"
            style={{ marginLeft: "6px" }}
          >
            delete
          </Button>
          {/* <a onClick={() => handleDeleteTask(list.id, task.id)}>
                        delete
                      </a> */}
        </div>
      }
    >
      <div className="task-title"> {task.title}</div>
      <div className="task-desc ">{task.description}</div>
    </Card>
  );
}

export default TaskCard;
