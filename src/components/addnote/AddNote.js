import React from 'react'
import { TextField , Button, Typography, Container } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react'

const AddNote = () => {
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [detailError, setDetailError] = useState(false)
    const addNote = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailError(false)

        if ( !title ){
            setTitleError(true)
        }

        if ( !detail){
            setDetailError(true)
        }

        console.log(title,detail)

    }
    return (
        <Container>
            <Typography sx={{ mt:2 }} variant="h5" component="h2" color="text.secondary" gutterBottom>Add Note</Typography>
            <form onSubmit={addNote} noValidate autoComplete="off">
                <TextField sx={{mb:2}} label="Note title" variant="outlined" color="secondary" fullWidth required error={titleError} onChange={(e)=>setTitle(e.target.value)}/>
                <TextField sx={{mb:2}} label="Details" variant="outlined" color="secondary" fullWidth required multiline rows={4} error={detailError} onChange={(e)=>setDetail(e.target.value)}/>
                <Button size="medium" type="submit" variant="contained" color="secondary" endIcon={<InsertEmoticonIcon />}>Submit</Button>
            </form>
        </Container>
    )
}

export default AddNote;