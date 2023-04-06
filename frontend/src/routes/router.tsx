import React from "react";
import App from "../App";
import Contract from "../pages/Contract";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Typography } from "@mui/material";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Contract />,
    path: "/Contrato/:type/:pdf/:checkout/:product",

    errorElement: <Typography>erro ao tentar rotear</Typography>,
  },
]);
