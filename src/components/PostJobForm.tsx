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
      <input
        name="title"
        value={formState.title}
        onChange={(e) =>
          setFormState({
            type: "title",
            payload: e.target.value,
          })
        }
      />
      <label htmlFor="jobType">Job Type</label>
      <input
        name="jobType"
        value={formState.jobType}
        onChange={(e) =>
          setFormState({
            type: "jobType",
            payload: e.target.value,
          })
        }
      />
      <label htmlFor="jobDescription">Job Description</label>
      <input
        name="jobDescription"
        value={formState.jobDescription}
        onChange={(e) =>
          setFormState({
            type: "jobDescription",
            payload: e.target.value,
          })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostJobForm;
