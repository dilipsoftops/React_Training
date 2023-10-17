import { styled } from "@material-ui/core";

import { Link } from "react-router-dom";

export const Container = styled("div")({
  minHeight: "692px",
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  top: "0",
  zIndex: "0",
  overflow: "hidden",
  background: "linear-gradient(108deg,rgba(1,147,86,1) 0%,rgba(10.201,122,1) 100%)",
});

export const FormWrap = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media(max-width:400px)": {
    height: "80%",
  },
});

export const Icon = styled(Link)({
  marginLeft: "32px",
  marginTop: "32px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "700",
  fontSize: "32px",

  "@media(max-width:480px)": {
    marginLeft: "16px",
    marginTop: "8px",
  },
});

export const FormContent = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media(max-width:480px)": {
    padding: "10px",
  },
});

export const Form = styled("form")({
  background: "#010101",
  maxWidth: "400px",
  height: "auto",
  width: "100%",
  zIndex: "1",
  display: "grid",
  margin: "0 auto",
  padding: "80px 32px",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.9)",
  "@media(max-width:400px)": {
    padding: "32px 32px",
  },
});

export const FormH1 = styled("h1")({
  marginBottom: "40px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "400",
  textAlign: "center",
});

export const FormLabel = styled("label")({
  marginBottom: "8px",
  color: "#fff",
  fontSize: "14px",
});

export const FormInput = styled("input")({
  padding: "16px 16px",
  marginBottom: "32px",
  border: "none",
  borderRadius: "4px",
});

export const FormButton = styled("button")({
  background: "#01bf71",
  padding: "16px 0",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "20px",
  cursor: "pointer",
});

export const Text = styled("span")({
  textAlign: "center",
  marginTop: "24px",
  color: "#fff",
  fontSize: "14px",
});
