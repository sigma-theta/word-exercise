import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

export default function AlertDialog({
  open,
  handleClose,
  chosenVerb,
  data,
  setData,
}: {
  open: boolean;
  handleClose: any;
  chosenVerb: string;
  data: any;
  setData: any;
}) {
  const [sentence, setSentence] = React.useState("");
  const [warning, setWarning] = React.useState("");
  const errorMessage = "Probeer opnieuw";

  const checkSentence = () => {
    let question: boolean = false;
    const trimmedSentence = sentence.trim().toLowerCase();
    if (trimmedSentence.includes("?")) {
      question = true;
    } else {
      question = false;
    }
    const words = trimmedSentence.replace(".", "").replace("?", "").split(" ");
    let valid: boolean = false;

    if (words.length < 2) {
      // ileride words[1] diyoruz o yüzden bundan emin olmamız gerekiyor
      setWarning(errorMessage);
    } else {
      valid = true;
    }

    if (valid) {
      let success: boolean = false;
      const innerKeys = Object.keys(data[chosenVerb]); // past, perfect, auxillary
      if (!question) {
        if (
          data[chosenVerb][innerKeys[0]].includes(words[1]) ||
          (data[chosenVerb][innerKeys[1]].includes(words[words.length - 1]) &&
            data[chosenVerb][innerKeys[2]].includes(words[1]))
        ) {
          success = true;
        } else {
          success = false;
        }
      } else {
        if (
          data[chosenVerb][innerKeys[0]].includes(words[0]) ||
          (data[chosenVerb][innerKeys[1]].includes(words[words.length - 1]) &&
            data[chosenVerb][innerKeys[2]].includes(words[0]))
        ) {
          success = true;
        } else {
          success = false;
        }
      }

      if (success) {
        let copiedData = data;
        delete copiedData[chosenVerb];
        setData(copiedData);
        setSentence("");
        handleClose();
        setWarning("")
      } else {
        setWarning(errorMessage);
      }
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">{"Schrijf je zin in"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Maak een zin met: {chosenVerb}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Antwoord"
            fullWidth
            variant="standard"
            value={sentence}
            onChange={(event) => {
              setSentence(event.target.value);
            }}
          />
          <Typography>{warning}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={checkSentence}>Opslaan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
