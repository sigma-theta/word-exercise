import * as React from "react";
import { Table, TableContainer, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import SubjectEntryRow from "../components/shared/SubjectEntryRow";
import SubjectRow from "../components/shared/SubjectRow";
import PropTypes from 'prop-types'

function SubjectEntry({
  editSubject,
  updatedSubject,
}: {
  editSubject: string;
  updatedSubject: string;
}) {
  const [subjects, setSubjects] = React.useState<string[]>([]);
  const [newSubject, setNewSubject] = React.useState("");

  const addNewSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubjects([...subjects, newSubject]);
  };

  const deleteSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubjects(subjects.filter((subject) => subject !== newSubject));
  };

  const updateSubject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let updatedSubjects = subjects;
    updatedSubjects[updatedSubjects.indexOf(editSubject)] = updatedSubject;
    setSubjects(updatedSubjects);
  };

  return (
    <Container>
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
          <SubjectEntryRow
            newSubject={newSubject}
            setNewSubject={setNewSubject}
            addNewSubject={addNewSubject}
          />
        </Table>
      </TableContainer>
      <Link to="/">Terug</Link>
    </Container>
  );
}

SubjectEntry.defaultProps = {
  editSubject: "",
  updatedSubject: ""
}

export default SubjectEntry;
