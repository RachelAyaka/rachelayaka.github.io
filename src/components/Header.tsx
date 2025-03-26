'use client'
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backdropFilter: 'blur(24px)',
  padding: '8px 12px',
}));

export default function Header() {

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: '#F9A8D4',
        backgroundImage: 'none',
        width: '100%',
        padding: '1rem'
      }}
    >
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <StyledToolbar variant="dense" disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black'}}>
                Rachel Ayaka Lin
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              <Button variant="text" color="info">
                Home
              </Button>
              <Button variant="text" color="info">
                Resume
              </Button>
              <Button variant="text" color="info">
                Projects
              </Button>
              <Button variant="text" color="info" sx={{ minWidth: 0 }}>
                About
              </Button>
            </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}