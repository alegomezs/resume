import "./Social.scss";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";

const Social = () => {
  return (
    <div className="social">
      <Link href="https://github.com/alegomezs" target="_blank">
        <GitHubIcon fontSize="large"></GitHubIcon>
      </Link>
      <Link href="https://www.linkedin.com/in/agomezsantillan/" target="_blank">
        <LinkedInIcon fontSize="large"></LinkedInIcon>
      </Link>
      {/*  
      <Link href="https://twitter.com/_alegomezs" target="_blank">
        <TwitterIcon fontSize="large"></TwitterIcon>
      </Link>
      */}
    </div>
  );
};

export default Social;
