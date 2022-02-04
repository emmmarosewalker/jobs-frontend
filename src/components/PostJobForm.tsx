import { Box, Button, Card, TextField } from "@mui/material";
import axios from "axios";
import React, { useReducer } from "react";
import { Listing } from "../types/listings";

export type ListingsReducerAction<T extends keyof Listing> = {
  type: T;
  payload: Listing[T];
};

const reducer = (
  state: Partial<Listing>,
  action: ListingsReducerAction<keyof Listing>
): Partial<Listing> => ({ ...state, [action.type]: action.payload });

export const useFormReducer = (initialState: Partial<Listing> = {}) =>
  useReducer(reducer, initialState);

function PostJobForm() {
  const [formState, setFormState] = useFormReducer();

  const onSubmit = () => {
    axios.post("http://localhost:7000/listings", formState);
  };

  return (
    <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 3 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Company"
            name="company"
            value={formState.company}
            onChange={(e) =>
              setFormState({
                type: "company",
                payload: e.target.value,
              })
            }
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Title"
            name="title"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                type: "title",
                payload: e.target.value,
              })
            }
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Job Type"
            name="jobType"
            value={formState.jobType}
            onChange={(e) =>
              setFormState({
                type: "jobType",
                payload: e.target.value,
              })
            }
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Job Description"
            name="jobDescription"
            value={formState.jobDescription}
            onChange={(e) =>
              setFormState({
                type: "jobDescription",
                payload: e.target.value,
              })
            }
          />
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default PostJobForm;
