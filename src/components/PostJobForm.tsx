import axios from "axios";
import React, { useReducer } from "react";
import { Input } from "../design";
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostJobForm;
