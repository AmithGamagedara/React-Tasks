import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { boards } from "../boards";

function BoardList() {
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>BoardList</h2>
      <Row gutter={16}>
        {boards.map((board) => (
          <Col span={8} key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <Card title={board.name} hoverable>
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
