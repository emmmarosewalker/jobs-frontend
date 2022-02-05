import { Card } from "@mui/material";
import React, { ComponentProps, FC } from "react";

const StyledCard: FC<ComponentProps<typeof Card>> = ({
  children,
  ...props
}) => {
  return (
    <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 3 }} {...props}>
      {children}
    </Card>
  );
};

export default StyledCard;
