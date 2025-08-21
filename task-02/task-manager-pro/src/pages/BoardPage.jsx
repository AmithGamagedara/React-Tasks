import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "antd";

function BoardPage() {
  const { id } = useParams();

  const boards = [
    { id: 1, name: "Personal Tasks", description: "Groceries, workouts" },
    { id: 2, name: "Team Board", description: "Sprint backlog" },
    { id: 3, name: "Personal", description: "workouts" },
    { id: 4, name: "Team ", description: "Sprint" },
  ];

  const board = boards.find((b) => b.id === Number(id));

  const tasks = [
    { id: 1, title: "Buy groceries", listId: "todo" },
    { id: 2, title: "Team meeting", listId: "inprogress" },
    { id: 3, title: "Finish project report", listId: "done" },
  ];

  const lists = [
    { id: "todo", name: "To Do" },
    { id: "inprogress", name: "In Progress" },
    { id: "done", name: "Done" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>{board ? board.name : "Board not found"}</h2>
      <p>{board?.description}</p>
      <Row gutter={16}>
        {lists.map((list) => (
          <Col span={8} key={list.id}>
            <Card title={list.name} style={{ minHeight: "300px" }}>
              {tasks
                .filter((task) => task.listId === list.id)
                .map((task) => (
                  <Card
                    key={task.id}
                    size="small"
                    style={{ marginBottom: "8px" }}
                  >
                    {task.title}
                  </Card>
                ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardPage;
