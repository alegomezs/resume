import "./Footer.scss";
import Social from "./Social";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer className="App-footer">
      <Social />
      <Container>
        <span>Hacking since 2015</span>
      </Container>
    </footer>
  );
};

export default Footer;
