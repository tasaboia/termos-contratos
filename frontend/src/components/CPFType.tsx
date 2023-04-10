import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Typography } from "@mui/material";

interface IProp {
  setType: (pdf: string) => void;
}
export default function CPFType({ setType }: IProp) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  return (
    <Box>
      <FormControl>
        <Typography>Tipo de Página</Typography>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="guru"
            control={<Radio sx={{ color: "#EF7779" }} />}
            label="Pagamento: Guru"
            sx={{
              color: "#EF7779",
              "& .MuiRadio-colorPrimary.Mui-checked": {
                color: "#EF7779", // cor do texto quando checked
              },
              "&.Mui-checked": {
                color: "#EF7779",
              },
            }}
          />
          <FormControlLabel
            value="pix-boleto"
            control={<Radio sx={{ color: "#EF7779" }} />}
            label="Pagamento: PIX/Boleto "
            sx={{
              color: "#EF7779",
              "& .MuiRadio-colorPrimary.Mui-checked": {
                color: "#EF7779", // cor do texto quando checked
              },
              "&.Mui-checked": {
                color: "#EF7779",
              },
            }}
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
