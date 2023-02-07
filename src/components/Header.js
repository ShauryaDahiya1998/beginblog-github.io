import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';



const Header = () => {
    
    return ( 
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Button color="inherit" style = {styleSheet.buttonStyle}>About</Button>
            <Button color="inherit" style = {styleSheet.buttonStyle}>Projects</Button>
            <Button color="inherit" style = {styleSheet.buttonStyle}>Ideas</Button>
            <Button color="inherit" style = {styleSheet.buttonStyle}>Resume</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

const styleSheet = {
    buttonStyle: {
        backgroundColor: "#04AA6D",
        marginLeft: '10px'
    }
}
 
export default Header;