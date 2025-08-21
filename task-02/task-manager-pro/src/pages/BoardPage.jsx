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

    const newTask = {
      id: "t" + new Date().getTime(),
      title,
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
                minHeight: "300px",
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
                >
                  {task.title}
                </Card>
              ))}

              <Button
                type="dashed"
                onClick={() => handleAddTask(list.id)}
                style={{ marginTop: "16px", width: "100%" }}
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
