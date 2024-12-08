import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Paper} from '@mui/material'
import { borderRadius } from '@mui/system';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
  <Paper component="form"  elevation={10} onSubmit={()=>{}} sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2,boxShadow:"none" ,mr:{sm:'5'}}}>
    <input style={{outline:"none",border: "none"}}className='search-bar' placeholder='Search...' value="" onchange={()=>{}}/>
    <IconButton type='submit' sx={{p:1,color:'#245d9e'}}><Search/></IconButton>
  </Paper>
      
    
    
  )
}

export default SearchBar
