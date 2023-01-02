import { TableRow, TextField, Button } from "@mui/material";
import * as React from "react";

function SubjectEntryRow({
  newSubject,
  setNewSubject,
  addNewSubject,
}: {
  newSubject: string;
  setNewSubject: Function;
  addNewSubject: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <TableRow>
      <TextField
        value={newSubject}
        onChange={(event) => {
          setNewSubject(event.target.value);
        }}
      />
      <Button onClick={addNewSubject}>➕</Button>
    </TableRow>
  );
}

export default SubjectEntryRow;
