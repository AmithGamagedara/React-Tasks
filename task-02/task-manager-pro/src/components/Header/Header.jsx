import React from 'react'
import "./Header.scss";
import { Typography } from "antd";


const { Title } = Typography;

function Header() {
  return (
     <header>
      <Title className="header-title">Task-Manager-Pro</Title>
    </header>
  )
}

export default Header