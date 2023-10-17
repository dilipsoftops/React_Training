import { styled } from "@material-ui/core";
import { Link } from "react-scroll";

export const Button = styled(Link)({
  borderRadius: "50px",
  background: "#01BF71",
  whiteSpace: "nowrap",
  padding: "14px 48px",
  color: "#010606",
  fontSize: "20px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
  },
});
