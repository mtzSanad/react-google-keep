import React from 'react'
import { TextField , Button, Typography, Container, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react'

const AddNote = () => {
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [detailError, setDetailError] = useState(false)
    const [category, setCategory] = useState("todo")

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

        console.log(title,detail,category)

    }
    return (
        <Container>
            <Typography sx={{ mt:2 }} variant="h5" component="h2" color="text.secondary" gutterBottom>Add Note</Typography>
            <form onSubmit={addNote} noValidate autoComplete="off">
                <TextField sx={{mb:2}} label="Note title" variant="outlined" color="secondary" fullWidth required error={titleError} onChange={(e)=>setTitle(e.target.value)}/>
                <TextField sx={{mb:2}} label="Details" variant="outlined" color="secondary" fullWidth required multiline rows={4} error={detailError} onChange={(e)=>setDetail(e.target.value)}/>
                <FormControl style={{display:"block"}}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={ e => setCategory(e.target.value)}>
                        <FormControlLabel  value="todo" control={<Radio color="secondary"/>} label="Todo" />
                        <FormControlLabel  value="reminer" control={<Radio color="secondary" />} label="Reminder" />
                        <FormControlLabel  value="meditation" control={<Radio color="secondary"/>} label="Meditation" /> 
                        <FormControlLabel  value="meeting" control={<Radio color="secondary"/>} label="Meeting" /> 
                    </RadioGroup>
                </FormControl>

                <Button size="medium" type="submit" variant="contained" color="secondary" endIcon={<InsertEmoticonIcon />}>Submit</Button>
            </form>
        </Container>
    )
}

export default AddNote;