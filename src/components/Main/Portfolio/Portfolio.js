import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Portfolio = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    width: "200px",
    color: theme.palette.text.secondary,
  }));
  return (
    <section>
      <h1>Some of my work 💼</h1>
      <Container>
        <Box lignItems="center" justifyContent="center" sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Item>
              <h2>Project 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Item>
            <Item>
              <h2>Project 2</h2>
              <p>Duis ullamcorper pretium faucibus.</p>
            </Item>
            <Item>
              <h2>Project 3</h2>
              <p>Donec vel arcu ac enim ultricies fringilla.</p>
            </Item>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default Portfolio;
