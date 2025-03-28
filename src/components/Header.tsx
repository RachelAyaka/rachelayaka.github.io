'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Typography, useTheme } from '@mui/material'

export default function Header() {
  const theme = useTheme()
  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default }} elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2}}>
        <Typography variant="h3" style={{ flexGrow: 1, padding: '10px' }}>
          Rachel Ayaka Lin
        </Typography>
        <Button color="inherit" href={'/'} sx={{ fontSize: '18px', 
          '&:hover': {backgroundColor: theme.palette.primary.main}}}>Home</Button>
        <Button color="inherit" href={'/Resume'} sx={{ fontSize: '18px', 
          '&:hover': {backgroundColor: theme.palette.primary.main}}}>Resume</Button>
        <Button color="inherit" href={'/Projects'} sx={{ fontSize: '18px', 
          '&:hover': {backgroundColor: theme.palette.primary.main}}}>Project</Button>
        <Button color="inherit" href={'/AboutMe'} sx={{ fontSize: '18px', 
          '&:hover': {backgroundColor: theme.palette.primary.main}}}>About Me</Button>
      </Toolbar>
    </AppBar>
  );
}