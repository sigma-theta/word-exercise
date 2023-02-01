import * as React from "react";
import { Table, TableContainer, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import SubjectEntryRow from "../components/SubjectEntryRow";
import SubjectRow from "../components/SubjectRow";

function SubjectEntry({
  editSubject,
  updatedSubject,
  editMode,
  setEditMode
}: {
  editSubject: string;
  updatedSubject: string;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [subjects, setSubjects] = React.useState<string[]>([]);
  const [newSubject, setNewSubject] = React.useState("");

  const addNewSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubjects([...subjects, newSubject]);
    setNewSubject("")
  };

  const deleteSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubjects(subjects.filter((subject) => subject !== editSubject));
  };

  const updateSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let updateIndex = subjects.findIndex((subject => subject === editSubject))
    let updatedSubjects = subjects;
    updatedSubjects[updateIndex] = updatedSubject;
    setSubjects(updatedSubjects);
    setEditMode(false);
  };

  return (
    <Container>
      <SubjectEntryRow
            newSubject={newSubject}
            setNewSubject={setNewSubject}
            addNewSubject={addNewSubject}
          />
      <TableContainer component={Paper}>
        <Table>
          {subjects.map((subject) => {
            return (
              <SubjectRow
                subject={subject}
                deleteSubject={deleteSubject}
                updateSubject={updateSubject}
              />
            );
          })}
          
        </Table>
      </TableContainer>
      <Link to="/">Terug</Link>
    </Container>
  );
}

SubjectEntry.defaultProps = {
  editSubject: "",
  updatedSubject: "",
  editMode: false,
  setEditMode: false
}

export default SubjectEntry;
