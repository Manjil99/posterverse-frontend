import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userAction';
import { useNavigate } from 'react-router';
import { useAlert } from 'react-alert';

export default function MenuOption({anchorEl,setAnchorEl}) {
  
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const alert = useAlert();

  const {isAuthenticated,user} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    handleClose();
    dispatch(logout());
  }

  const loggedinOptions = [
    {title:"My Profile",func: ()=>{handleClose();navigate("/account")}},
    {title:"My Orders" , func: ()=>{handleClose();navigate("/myorders")}},
    {title:"My Cart" , func: ()=>{handleClose();navigate("/Cart")}},
    {title:"Logout" , func: ()=>{handleClick();alert.success("Successfully Logged Out");}}
  ]

  const loginOptions = [
    {title:"Login" , func: ()=>{handleClose();navigate("/login");}},
    {title:"Signup", func: ()=>{handleClose();navigate("/login");}},

  ]
  if(isAuthenticated && user?.role === "admin"){
    loggedinOptions.unshift({title:"Dashboard",func: ()=>{handleClose();navigate("/admin/dashboard")}});
  }

  return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{mt:1}}
      >
        {isAuthenticated ? loggedinOptions.map((item,id) => (
          <MenuItem key = {id} onClick={item.func}>{item.title}</MenuItem>
        )) : 
        loginOptions.map((item,id) => (
          <MenuItem key={id} onClick={item.func}>{item.title}</MenuItem>
        ))
        }
      </Menu>
  );
}
