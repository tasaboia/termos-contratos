import PropTypes from "prop-types";
import { forwardRef, ForwardRefRenderFunction } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

// constant
const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //
type MainCardProps = {
  border?: boolean;
  boxShadow?: boolean;
  children?: React.ReactNode;
  content?: boolean;
  contentClass?: string;
  contentSX?: React.CSSProperties;
  darkTitle?: boolean;
  secondary?: React.ReactNode | string | object;
  shadow?: string;
  sx?: React.CSSProperties;
  title?: React.ReactNode | string | object;
};

const MainCard: ForwardRefRenderFunction<HTMLDivElement, MainCardProps> = (
  {
    border = true,
    boxShadow,
    children,
    content = true,
    contentClass = "",
    contentSX = {},
    darkTitle,
    secondary,
    shadow,
    sx = {},
    title,
    ...others
  },
  ref
) => {
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      {...others}
      sx={{
        border: border ? "1px solid" : "none",
        borderColor: "#ccc" + 25,
        ":hover": {
          boxShadow: boxShadow
            ? shadow || "0 2px 14px 0 rgb(32 40 45 / 8%)"
            : "inherit",
        },
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        "& > *": {
          flexGrow: 1,
          flexBasis: "50%",
        },
        ...sx,
      }}
    >
      {/* card header and action */}
      {title && <CardHeader sx={headerSX} />}

      {/* content & header divider */}
      {title && <Divider />}

      {/* card content */}
      {content && (
        <CardContent sx={contentSX} className={contentClass}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
};

export default MainCard;
