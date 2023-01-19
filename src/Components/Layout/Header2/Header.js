import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material';


function Header(){
    return (
        <header>
        <div className="head">
            <div className="header-left">
                <img src="https://www.citypng.com/public/uploads/preview/-31600814645r12wwzenhe.png" alt="logo"/>
            </div>
            <div className="header-middle">
                <input className="search-box" type="text"/>
                <IconButton>
                    <SearchIcon className="search"/>
                </IconButton>
            </div>
            <div className="header-right">
                <IconButton>
                    <Avatar className="avatar-icon" sx={{width: 42, height: 38}}/>
                </IconButton>
            </div>
        </div>
        <hr className="solid" />
        </header>
    )
}

export default Header;