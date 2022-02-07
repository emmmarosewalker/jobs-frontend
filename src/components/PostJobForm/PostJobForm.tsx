import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import StyledCard from "../../design/Cards";
import { Listing } from "../../types/listings";

type Field = {
  name: keyof Listing;
  label: string;
};

const fields: Field[][] = [
  [
    { name: "company", label: "Company" },
    { name: "title", label: "Title" },
    { name: "jobType", label: "Job Type" },
    { name: "jobDescription", label: "Job Description" },
    { name: "compensation", label: "Compensation" },
  ],
  [
    { name: "category", label: "Category" },
    { name: "beginDate", label: "Begin Date" },
  ],
  [
    { name: "streetAddress", label: "Street Address" },
    { name: "city", label: "City" },
    { name: "country", label: "Country" },
  ],
];

const schema = yup
  .object()
  .shape({
    company: yup.string().required("Company is required"),
    title: yup.string().required("Title is required"),
    jobType: yup.string().required("Job Type is required"),
    jobDescription: yup.string().required("Job Description is required"),
    category: yup.string().required("Category is required"),
    beginDate: yup.string(),
    compensation: yup.string().required("Compensation is required"),
    streetAddress: yup.string(),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
  })
  .required();

function PostJobForm() {
  const [step, setStep] = useState<number>(0);

  const onSubmit = (data: Listing) => {
    axios.post("http://localhost:7000/listings", {
      ...data,
      beginDate: data.beginDate ? new Date(data.beginDate) : null,
    });
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Listing>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {fields[step].map(({ name, label }) => (
          <Box key={name} sx={{ mb: 2, width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label={label}
              error={!!errors[name]}
              {...register(name)}
            />
            {errors[name] && (
              <Typography color="error" variant="body2">
                {errors[name]?.message}
              </Typography>
            )}
          </Box>
        ))}
        <Box sx={{ display: "flex" }}>
          <Button
            type="button"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          {step === fields.length - 1 ? (
            <Button
              variant="contained"
              type="button"
              onClick={handleSubmit(onSubmit, (e) => console.log(e))}
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={async () => {
                const result = await trigger(
                  fields[step].map(({ name }) => name)
                );
                result && setStep(step + 1);
              }}
              variant="contained"
              type="button"
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </StyledCard>
  );
}

export default PostJobForm;
