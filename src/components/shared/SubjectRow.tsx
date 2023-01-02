import * as React from "react";
import { Paper, Button, TableRow, TextField } from "@mui/material";

function SubjectRow({
  subject,
  deleteSubject,
  updateSubject,
}: {
  subject: string;
  deleteSubject: (event: React.MouseEvent<HTMLButtonElement>) => void;
  updateSubject: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [editMode, setEditMode] = React.useState(false);
  const [updatedSubject, setUpdatedSubject] = React.useState("");
  const [editSubject, setEditSubject] = React.useState("");

  const handleEditButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEditMode(true);
    setUpdatedSubject(subject);
    setEditSubject(subject);
  };

  return editMode ? (
    <TableRow>
      <TextField
        value={updatedSubject}
        onChange={(event) => {
          setUpdatedSubject(event.target.value);
        }}
      />
      <Button onClick={updateSubject} />
    </TableRow>
  ) : (
    <TableRow>
      <Paper>{subject}</Paper>
      <Button onClick={handleEditButton}>✏️</Button>
      <Button onClick={deleteSubject}>🗑️</Button>
    </TableRow>
  );
}

export default SubjectRow;
