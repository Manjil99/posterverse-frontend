import { Box, Button, Stack } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../Themes/commonStyles';
import MenuOption from './MenuOption.js';
import './common.css';
import { IconButton } from '@mui/material';

const ProfileSettings = () => {
  const [anchorEl,setAnchorEl] = useState(null);
  return (
    <Box sx={{borderRadius:100}}>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                    <FaRegUserCircle size={30} />
        </IconButton>
        <MenuOption className="menu" anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </Box>
  )
}

export default ProfileSettings;