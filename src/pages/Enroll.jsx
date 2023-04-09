import React, { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Enroll = () => {
  const [field, setField] = useState({});
  const nav = useNavigate();
  const onChange = (value, name) => {
    // console.log();
    setField((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_SOME_KEY}/enroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(field),
    }).then(() => {});
  };
  return (
    <div className="enroll">
      <form onSubmit={onSubmit}>
        <Dropdown
          name="course"
          data={[{ value: "Java", label: "Java" }]}
          onChange={onChange}
        />

        <Dropdown
          name="time"
          label="Per day i spend"
          data={[
            { value: "2", label: "2 Hour" },
            { value: "4", label: "4 Hour" },
            { value: "5", label: "5 Hour" },
          ]}
          onChange={onChange}
        />
        <Button type="submit">Enroll</Button>
      </form>
    </div>
  );
};

export default Enroll;
