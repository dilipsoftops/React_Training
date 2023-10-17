import { styled } from "@material-ui/core";

export const ServicesContainer = styled("div")({
  height: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#010606",
  "@media(max-width:768px)": {
    height: "1100px",
  },
  "@media(max-width:480px)": {
    height: "1300px ",
  },
});

export const ServicesWrapper = styled("div")({
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  gridGap: "16px",
  padding: "0 50px",
  "@media(max-width:1000px)": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@media(max-width:768px)": {
    gridTemplateColumns: "1fr",
    padding: "0 20px",
  },
});

export const ServicesCard = styled("div")({
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "10px",
  maxHeight: "340px",
  padding: "30px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    transform: "scale(1.02)",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  },
});

export const ServicesIcon = styled("img")({
  height: "160px",
  width: "160px",
  marginBottom: "64px",
});

export const ServicesH1 = styled("h1")({
  fontSize: "2.5rem",
  color: "#fff",
  marginBottom: "64px",

  "@media(max-width:480px)": {
    fontSize: "2rem",
  },
});

export const ServicesH2 = styled("h2")({
  fontSize: "1rem",
  marginBottom: "10px",
});

export const ServicesP = styled("p")({
  fontSize: "1rem",
  textAlign: "center",
});
