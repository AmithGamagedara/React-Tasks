import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

function BoardList() {
  const boards = [
    { id: 1, name: "Personal Tasks", description: "Groceries, workouts" },
    { id: 2, name: "Team Board", description: "Sprint backlog" },
    { id: 3, name: "Personal", description: "workouts" },
    { id: 4, name: "Team ", description: "Sprint" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>BoardList</h2>
      <Row gutter={16}>
        {boards.map((board) => (
          <Col span={8} key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <Card title={board.name} variant="borderless">
                {board.description}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardList;
