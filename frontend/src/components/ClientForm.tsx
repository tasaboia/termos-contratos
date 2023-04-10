import React, { ChangeEvent, useState } from "react";

import { Grid, Modal, Link, Container, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface IProp {
  url: string | undefined;
}
export default function ClientForm({ url }: IProp) {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number>(0);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    };

    return (
      <Container maxWidth="md" sx={{ my: 2 }}>
        <div>
          <embed src={url} type="application/pdf" width="100%" height="720px" />
        </div>
      </Container>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações
      </Typography>
      <Grid container spacing={3} height="80vh" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="Nome"
            label="nome"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="Sobrenome"
            label="sobrenome"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="E-mail"
            name="E-mail"
            label="E-mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Endereço"
            name="Endereço"
            label="Endereço"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cidade"
            name="Cidade"
            label="Cidade"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Estado"
            name="uf"
            label="Estado/UF"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CEP"
            name="CEP"
            label="CEP"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="País"
            name="Brasil"
            label="Brasil"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
        <Modal open={showModal} onClose={handleCloseModal}>
          <PdfViewer />
        </Modal>

        <Grid item xs={12}>
          <FormControlLabel
            color="#EF7779"
            control={
              <Checkbox
                style={{
                  color: "#EF7779",
                }}
                name="termosServico"
                value="sim"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            }
            label="Eu li e concordo com os"
          />
          <Link
            style={{
              color: "#EF7779",
            }}
            onClick={handleOpenModal}
          >
            termos de serviço
          </Link>
        </Grid>
        <Button
          style={{ minWidth: 400, backgroundColor: "#EF7779" }}
          disabled={!isChecked}
          variant="contained"
        >
          Enviar
        </Button>
      </Grid>
    </React.Fragment>
  );
}
