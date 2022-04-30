import "./Contact.scss";
import {
  createTheme,
  ThemeProvider,
  Input,
  InputLabel,
  Button,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFC",
    },
    neutral: {
      main: "#beb7a4",
    },
  },
});

const handleSubmit = async (event) => {
  alert("Message sent!");
  event.preventDefault();
};

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <h2>Get in touch!</h2>
          <InputLabel>Your email</InputLabel>
          <Input type="email" placeholder="Eg: somenting@domain.com" />
          <br />
          <br />
          <InputLabel>Subject</InputLabel>
          <Input type="text" placeholder="The subject..." />
          <br />
          <br />
          <InputLabel>Message</InputLabel>
          <Input
            multiline={true}
            type="textarea"
            minRows={3}
            placeholder="Your message..."
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </section>
    </ThemeProvider>
  );
};

export default Contact;
