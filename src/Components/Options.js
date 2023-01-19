import React,{useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './common.css';
import Button from '@mui/material/Button';

const Options = () => {
    const [value, setValue] = React.useState("All");
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleChange = (e,newValue) => {
      setValue(newValue);
      navigate(`/categories/posters/${newValue}`)
    };
  
    return (
    <div className="options">
      <Box className="options">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="options"
        > 
          <Tab value="All" label="ALL" />
          <Tab value="DC" label="DC" />
          <Tab value="Marvel" label="MARVEL" />
          <Tab value="Manga" label="ANIME" />
        </Tabs>
      </Box>
      </div>
    );
}

export default Options