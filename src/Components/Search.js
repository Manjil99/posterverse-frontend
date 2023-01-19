import { IconButton, InputBase, Paper } from '@mui/material';
import { pink } from '@mui/material/colors';
import { IoSearchCircleSharp } from 'react-icons/io5';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { dFlex } from '../Themes/commonStyles';
import { useNavigate } from 'react-router';


const Search = () => {
  const navigate = useNavigate();
  const [keyword,setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/posters/${keyword}`);
    } else {
      navigate("/");
    }
  }
  return (
    <form onSubmit={searchSubmitHandler}>
    <Paper sx={{
        ...dFlex,
        borderRadius: 20,
        border: '1px solid #ccc',
        ml: 15,
    }}
    >
            <InputBase sx={{ml:1,flex:1,fontFamily:'Roboto',pl:1}} type="text" onChange={e => setKeyword(e.target.value)} placeholder="Search by poster"/>
            <IconButton type="submit">
                <SearchIcon size={31} />
            </IconButton>
    </Paper>
    </form>
  )
}

export default Search;