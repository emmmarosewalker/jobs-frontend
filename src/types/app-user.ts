export type Education = {
  id: string;
  degree: string | null;
  field: string | null;
  university: string | null;
  city: string | null;
  country: string | null;
  begin_date: string | null;
  end_date: string | null;
};

export type AppUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  education: Education["id"] | null;
};
