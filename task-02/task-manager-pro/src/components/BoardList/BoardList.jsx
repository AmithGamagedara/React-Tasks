import "./BoardList.scss";
import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { boards } from "../../helper/boards";
import { Typography } from "antd";

const { Title } = Typography;

function BoardList() {
  
  return (
    <div className="board-list">
      <Title className="board-list-title">BoardList</Title>
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
