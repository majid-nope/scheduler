import React from "react";
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";

const Base = ({ header }) => {
  return (
    <>
      <AppShell
        padding="md"
        header={ header }
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.dark[8],
          },
        })}
      >
        <Outlet />
      </AppShell>
    </>
  );
};

export default Base;
