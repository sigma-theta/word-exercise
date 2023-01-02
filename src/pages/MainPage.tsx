import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import WordEntry from "../components/WordEntry";

function MainPage() {
  return (
    <Container sx={{ bgcolor: "teal", minHeight: "600px", p: 4, mt: 8 }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ color: "white", mb: 4 }}
        align="center"
      >
        {" "}
        Imperfectum en Perfectum Werkwoorden{" "}
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {Array(10)
          .fill(1)
          .map((index) => {
            return (
              <Grid item key={index} xs={3}>
                <WordEntry />
              </Grid>
            );
          })}
      </Grid>

      <Link to="/SubjectEntry">Subjecten Wijzigen</Link>
      <Link to="/VerbEntry">Werkwoorden Wijzigen</Link>
    </Container>
  );
}

export default MainPage;
