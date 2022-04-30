import "./Header.scss";
import profilePic from "./assets/profile_pic.jpg";
import { Avatar, Container } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="App-header">
      <Container maxWidth="sm">
        <Avatar
          className="avatar-profile"
          alt="Profile pic"
          src={profilePic}
          sx={{ width: 300, height: 300 }}
        />
        <h1>Hi! I'm Alejandro,</h1>
        <h2>a Web Developer! 🔥</h2>
        <h4>
          If you got here it's because I had your curiosity before and now I
          have your attention.
        </h4>
      </Container>
      <ExpandCircleDown fontSize="80"></ExpandCircleDown>
    </header>
  );
};

export default Header;
