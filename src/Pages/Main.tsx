import React from "react";
import Dialog from "../Components/Dialog";
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";

function Main() {
  const [data, setData] = React.useState({});
  const [chosenVerb, setChosenVerb] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    import("../data.json").then((data) => {
      setData(data.default);
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(true);

    const lastNumber = Object.keys(data).length
    const chosenNumber = Math.floor(Math.random() * lastNumber)
    const chosenKey = Object.keys(data)[chosenNumber]

    setChosenVerb(chosenKey);

  };

  if (Object.keys(data).length) 
  {return (
    <>
    {/* eğer data varsa Dialog'u çağır */}
    {data && <Dialog open={open} handleClose={handleClose} chosenVerb={chosenVerb} data={data} setData={setData} />}
    <Container sx={{ bgcolor: "teal", minHeight: "600px", p: 4, mt: 8 }}>
      <Typography variant="h3" component="h3" sx={{ color: "white", mb: 4 }} align="center">
        {" "}
        Imperfectum en Perfectum Werkwoorden{" "}
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {Object.keys(data).map((key, index) => {
          return (
            <Grid item key={index} xs={3}>
              <Paper sx={{ p: 2 }}>{key}</Paper>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ mt: 4, width: "50%" }}
          onClick={handleClick}
        >
          Kies een woord
        </Button>
      </Box>
    </Container>
    </>
  );} else {
    return (
      <Container sx={{ bgcolor: "teal", minHeight: "600px", p: 4, mt: 8 }}>
      <Typography variant="h3" component="h3" sx={{ color: "white", mb: 4 }} align="center">
        {" "}
        Goed gedaan!{" "}
      </Typography>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 500
        }}
        src="https://stickerly.pstatic.net/sticker_pack/PC3No6nCVu59ELrFqXD05g/MOUI70/2/6a7cc0f8-ac62-4aa5-aa53-17b52b50f804.png"
        alignItems="center"
        justifyContent="center"
        display="flex"
        margin="auto"
      />
      </Container>
    );
  }
}

export default Main;
