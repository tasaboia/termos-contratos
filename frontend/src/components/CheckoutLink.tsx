import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";
import AddLinkIcon from "@mui/icons-material/AddLink";

interface IProp {
  setCheckout: (checkout: string) => void;
  checkout: string;
}
export default function CheckoutLink({ checkout, setCheckout }: IProp) {
  return (
    <div>
      <Box mt={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="input-with-icon-adornment">Checkout</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <AddLinkIcon />
              </InputAdornment>
            }
            value={checkout}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckout(event.target.value);
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}
