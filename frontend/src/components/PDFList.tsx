import React, { useState, useEffect, useRef } from "react";
import http from "../api/http";
import DeleteIcon from "@mui/icons-material/Delete";
import { Toast } from "primereact/toast";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

export default function PDFList() {
  const [arquivos, setArquivos] = useState([]);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    http.get("/api/fileList").then((response) => {
      setArquivos(response.data);
    });
  }, []);

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Removido com Sucesso",
      life: 3000,
    });
  };

  const showInfo = () => {
    toast.current?.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
      life: 3000,
    });
  };

  const showWarn = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Warning",
      detail: "Message Content",
      life: 3000,
    });
  };

  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: "Message Content",
      life: 3000,
    });
  };

  async function handleDelete(file: string) {
    try {
      const response = await http
        .delete(`/api/deleteFile/${file}`)
        .then((response) => {
          showSuccess();
        });
    } catch (error) {}
  }

  return (
    <Box
      bgcolor="white"
      padding={2}
      mt={2}
      borderRadius={2}
      boxShadow={
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
      }
      overflow="scroll"
    >
      <Typography>Lista de PDFs</Typography>
      <List>
        {arquivos.length === 0 && (
          <Typography textAlign="center" color="#ccc" variant="body2">
            Lista vazia
          </Typography>
        )}
        {arquivos?.map((item, key) => (
          <>
            <ListItem
              key={key}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(item)}
                >
                  <DeleteIcon sx={{ color: "#D27F7F" }} />
                </IconButton>
              }
            >
              <ListItem key={key + item}>
                <Typography variant="body2">{item}</Typography>
              </ListItem>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
}
