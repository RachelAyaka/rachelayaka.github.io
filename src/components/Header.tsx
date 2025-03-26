'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Header() {

  return (
    <AppBar position="fixed" color="primary" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2}}>
        <Typography variant="h3" style={{ flexGrow: 1, padding: '10px' }}>
          Rachel Ayaka Lin
        </Typography>
        <Button color="inherit" style={{ fontSize: '18px' }}>Home</Button>
        <Button color="inherit" style={{ fontSize: '18px' }}>Resume</Button>
        <Button color="inherit" style={{ fontSize: '18px' }}>About</Button>
        <Button color="inherit" style={{ fontSize: '18px' }}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}