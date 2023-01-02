import * as React from "react";
import { Paper, TextField, Button } from "@mui/material";

function WordEntry() {
  const [isButton, setIsButton] = React.useState(false);
  const [verb, setVerb] = React.useState("");

  const handleIsButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVerb(verb);
    setIsButton(true);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setVerb(verb);
      setIsButton(true);
    }
  };

  return isButton ? (
    <Paper sx={{ justifyContent: "center" }} variant="outlined">
      {verb}
    </Paper>
  ) : (
    <Paper
      sx={{ justifyContent: "center", alignItems: "center" }}
      variant="outlined"
    >
      <TextField
        sx={{ width: "90%", ml: "5%", mt: "5px"}}
        value={verb}
        onChange={(event) => setVerb(event.target.value)}
        onKeyDown={verb.length ? handleEnter : undefined}
      />
      <Button
        sx={{ ml: "38%", textTransform: "none" }}
        onClick={handleIsButton}
      >
        Opslaan
      </Button>
    </Paper>
  );
}

export default WordEntry;
