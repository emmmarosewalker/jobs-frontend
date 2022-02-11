import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectProps,
} from "@mui/material";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  options: string[];
  registerValues?: UseFormRegisterReturn;
} & Partial<SelectProps<string>>;

const Dropdown = ({
  label,
  options,
  registerValues,
  ...selectProps
}: Props) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select label={label} {...selectProps} {...registerValues}>
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Dropdown;
