import React from 'react'
import "./Header.scss";
import { Typography } from "antd";
import { useFavorites } from "../../context/useFavorites"


const { Title } = Typography;

function Header() {

   const { favorites } = useFavorites();
  
  return (
     <header>
      <Title className="header-title">Task-Manager-Pro</Title>
      <span style={{ fontSize: "16px", color: "white" }}>Favorites: {favorites.length}</span>
    </header>
  )
}

export default Header