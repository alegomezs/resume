import "./Main.scss";
import Portfolio from "./Portfolio";
import CV from "./CV";
import Contact from "./Contact";
import { Divider } from "@mui/material";

const Main = () => {
  return (
    <main className="App-main">
      <Portfolio />
      <Divider variant="middle"></Divider>
      <CV />
      <Contact />
    </main>
  );
};

export default Main;
