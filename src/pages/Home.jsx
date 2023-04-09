import { Button } from "@mantine/core";
import React from "react";
import Landing from "../components/Landing/Landing";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <Landing>
      <Button onClick={() => nav("/enroll")}>Get Started</Button>
    </Landing>
  );
};

export default Home;
