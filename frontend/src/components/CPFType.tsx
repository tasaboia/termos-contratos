import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

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
        <FormLabel id="demo-radio-buttons-group-label">
          Tipo de Página
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="guru"
            control={<Radio />}
            label="Pagamento: Guru"
          />
          <FormControlLabel
            value="pix-boleto"
            control={<Radio />}
            label="Pagamento: PIX/Boleto "
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
