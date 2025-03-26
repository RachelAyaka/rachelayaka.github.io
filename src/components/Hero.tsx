import { Avatar, Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
// import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        py: 20, 
        background: 'linear-gradient(to right, #F9A8D4, #ffffff)', 
        color: 'white',
      }}
    >
      <Grid2 container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid2 size={{sm: 12, md:6, lg: 'grow'}} >
          <Typography variant="h5" sx={{ color: 'black', mb: 6 }}>
            Full Stack Developer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 400, color: 'black', mb: 8 }}>
            I build modern, responsive web applications using cutting-edge technologies.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained" 
              color="primary" 
              sx={{ px: 6, py: 3, fontWeight: 'medium' }}
              href="#projects"
            >
              Projects
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ px: 6, py: 3, fontWeight: 'medium' }}
              href="#projects"
            >
              Resume
            </Button>
            {/* <Button 
              variant="outlined" 
              color="secondary" 
              sx={{ px: 6, py: 3, fontWeight: 'medium' }}
            >
              On my free time
            </Button> */}
          </Box>
        </Grid2>
        <Grid2 size={{sm: 12, md:6, lg: 'grow'}}  sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box 
            sx={{
              position: 'relative', 
              width: 200, 
              height: 200, 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '4px solid white', 
              boxShadow: 3
            }}
          >
            {/* <Image 
              src="/images/profile.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              priority
            /> */}
            {/* <Avatar
              alt="Rachel Ayaka Lin"
              src="../../images/next.svg" 
              sx={{ width: '100%', height: '100%' }}
            /> */}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Hero;