import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
interface IProp {
  setProduct: (checkout: string) => void;
  product: string;
}
export default function ProductName({ setProduct, product }: IProp) {
  return (
    <div>
      <Box mt={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="input-with-icon-adornment">
            Nome do produto
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <LoyaltyIcon />
              </InputAdornment>
            }
            value={product}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setProduct(event.target.value);
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}
