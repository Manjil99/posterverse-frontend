import React from 'react'
import { Box, Typography } from '@mui/material';
import { flexCenter } from '../Themes/commonStyles';
import { pink,grey} from '@mui/material/colors';
import { FaAirbnb,FaSuperpowers } from "react-icons/fa";



const Logo = () => {
  return (
    <Box sx={flexCenter}>
        
        <FaSuperpowers size={40} color={grey[600]} />
        <Typography 
            sx={{
            ml:1,
            color: grey[600],
            fontSize: "20px",
            fontWeight: "bold",
        }}
        component="h3" 
        >
        Poster-Verse
        </Typography>
    </Box>
  )
}

export default Logo;