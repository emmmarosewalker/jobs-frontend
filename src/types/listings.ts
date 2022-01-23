export type Listing = {
  id: string;
  company: string;
  title: string;
  jobType: string;
  jobDescription: string;
  category: string | null;
  streetAddress: string | null;
  city: string | null;
  country: string | null;
  beginDate: string | null;
  compensation: string | null;
};
