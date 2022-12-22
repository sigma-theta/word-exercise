import * as React from 'react'
import { Container, Grid } from '@mui/material'
import WordEntry from './shared/WordEntry';

function MainPage() {return (
  <Container sx={{ bgcolor: "teal", minHeight: "600px", p: 4, mt: 8 }}>
     <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {Array(10).map((index) => {
          return (
            <Grid item key={index} xs={3}>
              <WordEntry />
            </Grid>
          );
        })}
      </Grid>
  </Container>
  )
}

export default MainPage