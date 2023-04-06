import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";
import http from "../api/http";

interface IProp {
  setPDF: (pdf: string) => void;
  pdf: string;
}

export default function PDFSelect({ pdf, setPDF }: IProp) {
  const [arquivos, setArquivos] = React.useState([]);

  useEffect(() => {
    http.get("/api/fileList").then((response) => {
      setArquivos(response.data);
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
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
