import { Select } from "@mantine/core";

import React from "react";

const Dropdown = ({
  name,
  data = [],
  placeHolder = "select",
  label = "Select",
  onChange,
}) => {
  return (
    <Select
      label={label}
      placeholder={placeHolder}
      onChange={(value) => onChange(value, name)}
      data={data}
    />
  );
};

export default Dropdown;
