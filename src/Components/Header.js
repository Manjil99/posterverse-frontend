import { Box, Container } from '@mui/material';
import React from 'react';
import { dFlex, flexBetweenCenter,displayOnDesktop } from '../Themes/commonStyles';
import Logo from './Logo';
import Search from './Search';
import './common.css';
import ProfileSettings from './ProfileSettings';
import Options from './Options';
import MobileSearch from './MobileSearch';

const Header = () => {
  return (
    <Box  className="header" >
    <Box sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
    }}>
        <Container maxWidth="xl">
            <Box sx={{
                ...flexBetweenCenter,
                minHeight: 70,
                px: 4,
            }}>
                <div className='left'>
                <Box sx={displayOnDesktop}>
                <Logo />
                </Box>
                <Box sx={displayOnDesktop}>
                <Options />
                </Box>
                </div>
                <div className='right'>
                <Box className="search-box" sx={displayOnDesktop}>
                <Search />
                </Box>
                <Box sx={displayOnDesktop}>
                <ProfileSettings />
                </Box>
                </div>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MobileSearch />
                </Box>
            </Box>
        </Container>
       
    </Box>
    </Box>
  )
}

export default Header;