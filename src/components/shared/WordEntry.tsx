import * as React from 'react'
import { Paper, TextField, Button } from '@mui/material'

function WordEntry() {
    const [isButton, setIsButton] = React.useState(false)
    const [verb, setVerb] = React.useState("")

    const handleIsButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setVerb(verb)
        setIsButton(true)
    }

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        setVerb(verb)
        setIsButton(true)
    }

    return isButton? (
        <Paper variant='outlined'>{verb}</Paper>
    ) : (
        <Paper variant='outlined'>
            <TextField value={verb} onChange={(event) => setVerb(event.target.value)} onKeyDown={handleEnter}></TextField>
            <Button onClick = {handleIsButton}></Button>
        </Paper>
    )
}

export default WordEntry