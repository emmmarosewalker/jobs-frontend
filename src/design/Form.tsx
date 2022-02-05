import React, { FC } from "react";

type Props = {
  onSubmit: () => void;
};

const Form: FC<Props> = ({ onSubmit, children }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

export default Form;
