"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import DrawerAppBar from "@/components/navbar/NavBar";
const inter = Inter({ subsets: ["latin"] });
import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "./layout";
import { LayoutForm } from "@/components/LayoutForm";
import colors from "@/themes/colors";

export default function Home() {
  return (
    <main>
      <DrawerAppBar />
      <LayoutForm>
        <Box maxWidth={500}>
          <Formik
            initialValues={{}}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {}}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Typography
                  color={colors.secondaryMain}
                  fontWeight={600}
                  mt={2}
                  mb={5}
                  variant="h4"
                >
                  Cadastro de informações
                </Typography>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    placeholder="Nome"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    placeholder="Sobrenome"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    placeholder="Informação do usuário"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    placeholder="Informação do usuário"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <TextField
                    placeholder="Informação do usuário"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                </FormControl>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <FormControlLabel
                    control={<Checkbox name="checked" color="secondary" />}
                    label="Concordo com os termos de uso e politica de privacidade"
                  />
                </Stack>

                <Box sx={{ mt: 2 }} mb={{ lg: 0, xs: 4 }}>
                  {/* <AnimateButton> */}
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    <Typography color="white">Cadastrar </Typography>
                  </Button>
                  {/* </AnimateButton> */}
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </LayoutForm>
    </main>
  );
}
