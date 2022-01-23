import axios from "axios";
import React, { useReducer } from "react";
import styled from "styled-components";
import { Box, Input, Spacing } from "../design";
import { Listing } from "../types/listings";

const FormContainer = styled(Box)`
  max-width: 400px;
`;

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
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Spacing bottom="small">
          <div>
            <label htmlFor="company">Company</label>
            <Input
              name="company"
              value={formState.company}
              onChange={(text) =>
                setFormState({
                  type: "company",
                  payload: text,
                })
              }
            />
          </div>
        </Spacing>
        <Spacing bottom="small">
          <div>
            <label htmlFor="title">Title</label>
            <Input
              name="title"
              value={formState.title}
              onChange={(text) =>
                setFormState({
                  type: "title",
                  payload: text,
                })
              }
            />
          </div>
        </Spacing>
        <Spacing bottom="small">
          <div>
            <label htmlFor="jobType">Job Type</label>
            <Input
              name="jobType"
              value={formState.jobType}
              onChange={(text) =>
                setFormState({
                  type: "jobType",
                  payload: text,
                })
              }
            />
          </div>
        </Spacing>
        <Spacing bottom="small">
          <div>
            <label htmlFor="jobDescription">Job Description</label>
            <Input
              name="jobDescription"
              value={formState.jobDescription}
              onChange={(text) =>
                setFormState({
                  type: "jobDescription",
                  payload: text,
                })
              }
            />
          </div>
        </Spacing>
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
}

export default PostJobForm;
