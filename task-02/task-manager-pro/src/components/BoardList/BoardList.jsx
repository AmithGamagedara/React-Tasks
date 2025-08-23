import "./BoardList.scss";
import React from "react";
import { Card, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { boards } from "../../helper/boards";
import { Typography } from "antd";

const { Title } = Typography;
const { Meta } = Card;

function BoardList() {
  return (
    <div className="board-list">
      <Title className="board-list-title">Project Boards</Title>
      <Divider />
      <Row gutter={16}>
        {boards.map((board) => (
          <Col xs={24} sm={12} md={8} key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <Card className="board-card" hoverable>
                <div>
                  <div className="board-cover">#{board.id}</div>
                  <Meta title={board.name} description={board.description} />
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardList;
