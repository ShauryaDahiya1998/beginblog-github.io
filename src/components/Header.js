import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Header = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Link to="/" style = {styleSheet.linkStyle}><Button color="inherit" style = {styleSheet.buttonStyle}>🏠</Button></Link>
            <Link to="/about" style = {styleSheet.linkStyle}><Button color="inherit" style = {styleSheet.buttonStyle}>About</Button></Link>
            <Link to="/projects" style = {styleSheet.linkStyle}><Button color="inherit" style = {styleSheet.buttonStyle}>Projects</Button></Link>
            <Link to="/ideas" style = {styleSheet.linkStyle}><Button color="inherit" style = {styleSheet.buttonStyle}>Ideas</Button></Link>
            <Link to="/resume" style = {styleSheet.linkStyle}><Button color="inherit" style = {styleSheet.buttonStyle}>Resume</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

const styleSheet = {
    buttonStyle: {
        backgroundColor: "#04AA6D",
        marginLeft: '10px'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white',
        '&:active': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '5px',
          padding: '5px',
        },
    }
}
 
export default Header;