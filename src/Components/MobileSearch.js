import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { useState } from 'react';
import MenuOption from './MenuOption.js';

const MobileSearch = () => {
  const [anchorEl,setAnchorEl] = useState(null);
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: '1px solid #ccc',
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="What are you looking for..." />
      <IconButton  sx={{ p: '10px' }} onClick={(e) => setAnchorEl(e.currentTarget)}>
        <VscSettings />
      </IconButton>
      <MenuOption className="menu" anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </Paper>
  );
};

export default MobileSearch;