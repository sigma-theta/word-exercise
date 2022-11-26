import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";

export default function AlertDialog({
  open,
  handleClose,
  chosenVerb
}: {
  open: boolean;
  handleClose: any;
  chosenVerb: string;
}) {

  const [sentence, setSentence] = React.useState("");

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
            onChange={
                (event)=>{setSentence(event.target.value)}
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {console.log(sentence)}}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
