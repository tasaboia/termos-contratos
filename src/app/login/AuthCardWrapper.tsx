"use client";
import PropTypes from "prop-types";
// material-ui
import { Box, BoxProps, CardContent, Card } from "@mui/material";
import MainCard from "@/components/MainCard";
import { ReactNode } from "react";
import colors from "@/themes/colors";
// project import

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

type AuthCardWrapperProps = {
  children?: ReactNode;
} & BoxProps;

const AuthCardWrapper = ({ children, ...other }: AuthCardWrapperProps) => (
  <Card
    sx={{
      border: "1px solid",
      borderColor: colors.grey900 + 25,
      ":hover": {
        boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
      },
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
  >
    <CardContent>
      <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </CardContent>
  </Card>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node,
};

export default AuthCardWrapper;
