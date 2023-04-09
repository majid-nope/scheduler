import React from "react";
import style from "./Header.module.scss";
import { Header as Nav } from "@mantine/core";

const Header = ({ logo }) => {
  return (
    <Nav
      className={style.header}
      height={60}
      p="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="" />
    </Nav>
  );
};

export default Header;
