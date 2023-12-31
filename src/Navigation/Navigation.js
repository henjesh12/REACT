import React from 'react'
import {Link} from 'react-router-dom'
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Navigation = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="Static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SIET
          </Typography>
          <nav>
        
          <Button color="inherit"><Link to='/'>Home</Link></Button>
          <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
          <Button color="inherit"><Link to='/todolist'>TodoList</Link></Button>
        
      </nav>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}
export default Navigation
