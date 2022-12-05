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

  const checkSentence = () => {
    const whitespaced = sentence.replace(".", "").split(" ");
    if ((data.chosenVerb.past.includes(whitespaced[1])) || (data.chosenVerb.auxiliary.includes(whitespaced[1]) && whitespaced[-1] === data.chosenVerb.perfect)) {
        // console.log(data);
      let copiedData = data;
      delete copiedData.chosenVerb;
      setData(copiedData);
      handleClose();
    } else {
      setWarning("Probeer opnieuw");
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
