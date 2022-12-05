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
  const errorMessage = "Probeer opnieuw"

  const checkSentence = () => {
    const trimmedSentence = sentence.trim();
    const whitespaced = trimmedSentence.replace(".", "").split(" ");
    let valid: boolean = false;

    if (whitespaced.length < 2) { // ileride whitespaced[1] diyoruz o yüzden bundan emin olmamız gerekiyor
      setWarning(errorMessage);
    } else {
      valid = true;
    }

    if (valid) {
      let success: boolean = false;
      const innerKeys = Object.keys(data[chosenVerb]) // past, perfect, auxillary

      for (let x = 0; x < innerKeys.length; x ++) {
        console.log(data[chosenVerb][innerKeys[x]])
        if (data[chosenVerb][innerKeys[x]].includes(whitespaced[1])) {
          success = true;
          break
        } else {
          success = false;
        }
      }
  
      if (success) {
        let copiedData = data;
        delete copiedData[chosenVerb];
        setData(copiedData);
        handleClose();
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
