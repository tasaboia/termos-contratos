import * as React from "react";
import Box from "@mui/material/Box";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CPFType from "./CPFType";
import ProductName from "./ProductName";
import CheckoutLink from "./CheckoutLink";
import PDFSelect from "./PDFSelect";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

interface IProp {
  setLink: (link: string) => void;
}

export default function LinkStepper({ setLink }: IProp) {
  const [activeStep, setActiveStep] = useState(0);
  const [type, setType] = useState("");
  const [pdf, setPDF] = useState("");
  const [checkout, setCheckout] = useState("guru");
  const [product, setProduct] = useState("");

  const [urlEncoded, setUrlEncoded] = useState("");

  const baseURL =
    "https://us-central1-termos-contratos.cloudfunctions.net/api/";

  useEffect(() => {
    const urlEncoded = encodeURIComponent(checkout);
    setUrlEncoded(urlEncoded);
    console.log(urlEncoded);
  }, [checkout]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    console.log(type);
  }, [type]);

  useEffect(() => {
    console.log(pdf);
  }, [pdf]);

  useEffect(() => {
    console.log(urlEncoded);
  }, [checkout]);

  const steps = [
    {
      label: "Tipos de Pagamentos",
      description: <CPFType setType={setType} />,
    },
    {
      label: "Definir Contrato",
      description: <PDFSelect setPDF={setPDF} pdf={""} />,
    },
    {
      label: "Inserir link do checkout",
      description: (
        <CheckoutLink setCheckout={setCheckout} checkout={checkout} />
      ),
    },
    {
      label: "Definir nome do Produto",
      description: <ProductName setProduct={setProduct} product={product} />,
    },
  ];

  const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center",
      ...(ownerState.active && {
        color: "#EF7779",
      }),
      "& .QontoStepIcon-completedIcon": {
        color: "#EF7779",
        zIndex: 1,
        fontSize: 18,
      },
      "& .QontoStepIcon-circle": {
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "currentColor",
      },
    })
  );

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              optional={
                index === 2 ? (
                  <Typography variant="caption">(Opcional) </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.description}
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      style={{ minWidth: "200px", backgroundColor: "#EF7779" }}
                      onClick={() => {
                        const link = `https://termos-contratos.web.app/Contrato/${type}/${pdf}/${product}?link=${urlEncoded}`;
                        setLink(link);
                        handleNext();
                      }}
                    >
                      Gerar Link
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#EF7779",
                        "&:hover": {
                          backgroundColor: "#F48183", // Define a cor de fundo quando o botão está em estado de hover
                        },
                        "&:active": {
                          backgroundColor: "#DC6D6D", // Define a cor de fundo quando o botão está em estado de press
                        },
                      }}
                    >
                      Próximo
                    </Button>
                  )}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: "#EF7779" }}
                  >
                    Voltar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Link para o cliente foi gerado com sucesso !</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color: "#EF7779" }}>
            Gerar novo link
          </Button>
        </Paper>
      )}
    </Box>
  );
}
