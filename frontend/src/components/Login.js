import React, { useRef } from 'react'
import {Container, TextField, Button, Box} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import {Autorenew} from '@mui/icons-material'
import {v4 as uuidV4} from 'uuid'

export default function Login({ setId }) {
  const idRef = useRef()
  const handleSubmit = (e)=>{
    e.preventDefault()
    setId(idRef.current.value)
  }
  const createNewId = ()=>{
    setId(uuidV4())
  }
  return (
    <Container maxWidth="sm" sx={{p:5,m:'auto',height:'100vh',display:'flex',width:'100%',alignItems:'center'}}>
        <form style={{width:'100%'}} onSubmit={(event)=>{handleSubmit(event)}}>
            <TextField id="outlined-basic" inputRef={idRef} label="ID" variant="outlined" sx={{mb:2,width:'100%'}}/>
            <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center', flexWrap:'wrap'}}>
                <Button type='submit' variant="contained" endIcon={<LoginIcon />} sx={{m:1}}>Send</Button>
                <Button onClick={()=>{createNewId()}} variant="contained" endIcon={<Autorenew />} sx={{m:1}}>Generate New ID</Button>
            </Box>
        </form>
    </Container>
  )
}
