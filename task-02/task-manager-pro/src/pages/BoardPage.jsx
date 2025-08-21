import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import { boards } from "../boards";

function BoardPage() {
  const { id } = useParams();
  const board = boards.find((b) => b.id === id);

  const [boardState, setBoardState] = useState(board);

  const handleAddTask = (listId) => {
    const title = prompt("Enter task title:");
    if (!title) return;

    const description = prompt("Enter task description:");
    if (!description) return;

    const newTask = {
      id: "t" + new Date().getTime(),
      title,
      description,
    };

    const updatedLists = boardState.lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: [...list.tasks, newTask],
        };
      }
      return list;
    });

    setBoardState({ ...boardState, lists: updatedLists });
  };

  const handleEditTask = (listId, taskId) => {
    const newTitle = prompt("Enter new title");
    if (!newTitle) return;

    const newDescription = prompt("Enter new description");
    if (!newDescription) return;

    const updatedLists = boardState.lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === taskId
                ? { ...task, title: newTitle, description: newDescription }
                : task
            ),
          }
        : list
    );
    setBoardState({ ...boardState, lists: updatedLists });
  };

  const handleDeleteTask = (listId, taskId) => {
    const updatedLists = boardState.lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== taskId),
          }
        : list
    );
    setBoardState({ ...boardState, lists: updatedLists });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{boardState ? boardState.name : "Board not found"}</h2>
      <p>{boardState?.description}</p>
      <Row gutter={16}>
        {boardState.lists.map((list) => (
          <Col xs={24} sm={12} md={6} key={list.id}>
            <Card
              title={list.title}
              style={{
                minHeight: "180px",
                backgroundColor: "#f8f8f8",
                marginBottom: "24px",
              }}
              variant="borderless"
            >
              {list.tasks.map((task) => (
                <Card
                  key={task.id}
                  size="small"
                  style={{
                    marginBottom: "8px",
                    border: "1px solid #ebebeb",
                  }}
                  extra={
                    <div>
                      <a onClick={() => handleEditTask(list.id, task.id)}>
                        edit
                      </a>
                      <a onClick={() => handleDeleteTask(list.id, task.id)}>
                        delete
                      </a>
                    </div>
                  }
                >
                  <div style={{ fontSize: "16px", fontWeight: 600 }}>
                    {" "}
                    {task.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#666" }}>
                    {task.description}
                  </div>
                </Card>
              ))}

              <Button
                type="dashed"
                onClick={() => handleAddTask(list.id)}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  backgroundColor: "#ececec",
                }}
              >
                + Add Task
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardPage;
