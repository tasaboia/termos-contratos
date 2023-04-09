import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import http from "../api/http";
import axios from "axios";

interface IProp {
  setPDF: (pdf: string) => void;
  pdf: string;
}

interface Arquivo {
  name: string;
}

export default function PDFSelect({ pdf, setPDF }: IProp) {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-termos-contratos.cloudfunctions.net/api/pdfList"
      )
      .then((response) => {
        const arquivosDaAPI = response.data?.pdfs;
        const arquivosMapeados = arquivosDaAPI.map((arquivo: any) => ({
          name: arquivo.name,
        }));
        setArquivos(arquivosMapeados);
      });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setPDF(event.target.value as string);
  };

  return (
    <Box mt={2}>
      <FormControl fullWidth>
        <InputLabel id="termosecontratos">Termos&Contratos</InputLabel>
        <Select
          labelId="termosecontratosl"
          id="termosecontratos"
          value={pdf}
          label="Termos&Contratos"
          onChange={handleChange}
        >
          {arquivos?.map((item, key) => (
            <MenuItem key={key} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
