import { styled } from "@material-ui/core";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled("div")({
  background: "#8c8c8c",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 30px",
  height: "800px",
  position: "relative",
  zIndex: "1",
  "&:before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(180deg,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0% transparent 100%) ",
    zIndex: "2",
  },
});

export const HeroBg = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

export const VideoBg = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  background: "#232a34",
});

export const HeroContent = styled("div")({
  zIndex: "3",
  maxWidth: "1200px",
  position: "absolute",
  padding: "8px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeroH1 = styled("h1")({
  color: "#fff",
  fontSize: "48px",
  textAlign: "center",
  "@media(max-width:768px)": {
    fontSize: "40px",
  },

  "@media(max-width:768px)": {
    fontSize: "32px",
  },
});

export const HeroP = styled("p")({
  marginTop: "24px",
  color: "#fff",
  fontSize: "24px",
  textAlign: "center",
  maxWidth: "600px",
  "@media(max-width:768px)": {
    fontSize: "24px",
  },

  "@media(max-width:768px)": {
    fontSize: "18px",
  },
});

export const HeroBtnWrapper = styled("div")({
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ArrowForward = styled(MdArrowForward)({
  marginLeft: "8px",
  fontSize: "20px",
});

export const ArrowRight = styled(MdKeyboardArrowRight)({
  marginLeft: "8px",
  fontSize: "20px",
});
