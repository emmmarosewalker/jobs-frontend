import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { DesktopDatePicker } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import {
  Control,
  Controller,
  useForm,
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import * as yup from "yup";
import StyledCard from "../../design/Cards";
import Dropdown from "../../design/Dropdown";
import { ADD_LISTING } from "../../queries/listings";
import { Listing } from "../../types/listings";
import jobCategories from "../common/jobCategories";

const richTextControls = [
  "title",
  "bold",
  "italic",
  "underline",
  "link",
  "numberList",
  "bulletList",
];

type Field = {
  name: keyof Listing;
  label: string;
  type?: "dropdown" | "currency" | "date" | "rich-text" | "searchable";
  options?: string[];
};

type FormFieldProps = Field & {
  registerValues: UseFormRegisterReturn;
  isError?: boolean;
  control?: Control<Listing, object>;
  setValue?: UseFormSetValue<Listing>;
  getValues?: UseFormGetValues<Listing>;
};

const FormField = ({
  name,
  label,
  type,
  options,
  registerValues,
  isError,
  control,
  setValue,
  getValues,
}: FormFieldProps) => {
  switch (type) {
    case "dropdown":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              label={label}
              options={options || []}
              error={isError}
              onChange={onChange}
              value={value || undefined}
            />
          )}
        />
      );
    case "searchable":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              options={options || []}
              freeSolo
              onChange={(_, choice) => onChange(choice)}
              value={value || null}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} value={value} label={label} />
              )}
            />
          )}
        />
      );
    case "currency":
      return (
        <TextField
          sx={{ width: "100%" }}
          label={label}
          error={isError}
          {...registerValues}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      );
    case "date":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <DesktopDatePicker
              label={label}
              inputFormat="MM/dd/yyyy"
              renderInput={(params) => <TextField {...params} />}
              value={value}
              onChange={onChange}
            />
          )}
        />
      );
    case "rich-text":
      return (
        <MUIRichTextEditor
          label={label}
          onChange={(value) => {
            const content = JSON.stringify(
              convertToRaw(value.getCurrentContent())
            );
            setValue && setValue(name, content);
          }}
          controls={richTextControls}
          defaultValue={getValues ? getValues(name) : undefined}
        />
      );
    default:
      return (
        <TextField
          sx={{ width: "100%" }}
          label={label}
          error={isError}
          {...registerValues}
        />
      );
  }
};

const fields: Field[][] = [
  [
    { name: "company", label: "Your Company Name" },
    { name: "title", label: "Job Title" },
    {
      name: "jobType",
      label: "Job Type",
      type: "dropdown",
      options: ["Full Time", "Part Time", "Casual", "Contract/Freelance"],
    },
    { name: "jobDescription", label: "Job Description", type: "rich-text" },
    { name: "compensation", label: "Compensation", type: "currency" },
  ],
  [
    {
      name: "category",
      label: "Category",
      type: "searchable",
      options: jobCategories,
    },
    { name: "beginDate", label: "Start Date", type: "date" },
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
    company: yup.string().required("Please Select Company"),
    title: yup.string().required("Please Select Title"),
    jobType: yup.string().required("Job Please Select Type"),
    jobDescription: yup.string().required("Job Please Select Description"),
    category: yup.string().required("Please Select Category"),
    beginDate: yup.string().required("Please Select Start Date"),
    compensation: yup.string().required("Please Select Compensation"),
    streetAddress: yup.string(),
    city: yup.string().required("Please Select City"),
    country: yup.string().required("Please Select Country"),
  })
  .required();

function PostJobForm() {
  const [step, setStep] = useState<number>(0);
  const [addListing, { data, loading, error }] = useMutation(ADD_LISTING);

  const onSubmit = (formData: Listing) => {
    addListing({
      variables: {
        input: {
          ...formData,
          jobDescription: draftToHtml(JSON.parse(formData.jobDescription)),
          beginDate: format(
            new Date(formData?.beginDate || ""),
            "yyyy-MM-dd'T'HH:mm:ss'Z'"
          ),
        },
      },
    });
  };

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    formState: { errors },
    getValues,
  } = useForm<Listing>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      beginDate: new Date().toString(),
      jobType: "Full Time",
      country: "Australia",
      streetAddress: "Remote",
    },
  });

  if (loading) return <div>Submitting...</div>;
  if (error) return <div>Submission error! {error.message}</div>;

  return (
    <StyledCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {fields[step].map(({ name, ...field }) => (
          <Box key={name} sx={{ mb: 2, width: "100%" }}>
            <FormField
              name={name}
              {...field}
              registerValues={register(name)}
              isError={!!errors[name]}
              control={control}
              setValue={setValue}
              getValues={getValues}
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
              onClick={handleSubmit(onSubmit)}
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
