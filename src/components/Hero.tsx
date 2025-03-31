'use client'
import { JSX, useRef } from 'react';
import { Avatar, Box, Button, Container, Grid2, Typography } from '@mui/material';
import ProjectsSection from './ProjectsSection';

function Hero(): JSX.Element {
  const projectsSection = useRef<HTMLElement | null>(null)
  const scrollToSection = () => {
    if (projectsSection.current) {
      projectsSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
    <Box sx={{minHeight: '10vh',}}></Box>
    <Container maxWidth={false} disableGutters sx={{
      display: 'flex',             
      justifyContent: 'center',     // Center horizontally
      alignItems: 'center',         // Center vertically 
      paddingBottom: '8rem',
      paddingTop: '8rem',
      minHeight: '100vh',
      backgroundImage: 'url(/images/water.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: 0,
      margin: 0,
      width: '100%',
    }}>
      <Grid2 container spacing={15} alignItems="center">
        <Grid2 size={{sm: 12, md: 6, lg: 'grow'}}>
          <Typography variant="h3" sx={{color: 'white'}}>
            Full-Stack
          </Typography>
          <Typography variant="h3" sx={{color: 'white', whiteSpace: 'nowrap'}} gutterBottom>
            Software Engineer
          </Typography>
          <Typography variant="h6" sx={{color: 'white'}}>
            Active Secret Clearance
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Button 
              variant="contained" 
              color="primary" 
              style={{  marginTop: '1rem' }}
              href='/AboutMe'
            >
              About Me
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginTop: '1rem'}}
              onClick={() => {
                scrollToSection();
              }}
            >
              View My Work
            </Button>
          </Box>
        </Grid2>
      
        <Grid2 size={{sm: 12, md:6}}  sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box 
            sx={{
              position: 'relative', 
              width: 300, 
              height: 300, 
              borderRadius: '50%', 
              // overflow: 'hidden', 
              border: '4px solid white', 
              boxShadow: 3
            }}
          >
            <Avatar
              alt="Rachel Ayaka Lin"
              src="/images/portrait.png" 
              sx={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
    <Box ref={projectsSection}>
      <ProjectsSection /> 
    </Box>
    </>
  );
};

export default Hero;