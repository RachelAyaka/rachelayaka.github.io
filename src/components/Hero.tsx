import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex',              // Use flexbox layout
      justifyContent: 'center',     // Center horizontally
      alignItems: 'center',         // Center vertically 
      paddingBottom: '7rem',
      paddingTop: '7rem'
    }}>
      <Grid2 container spacing={9} alignItems="center">
        <Grid2 size={{sm: 12, md: 6, lg: 'grow'}}>
          <Typography variant="h4" gutterBottom>
            Full Stack Software Engineer
          </Typography>
          <Typography variant="body1" >
            Experienced in web develop and design
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ marginTop: '1rem' }}
          >
            Checkout My Work
          </Button>
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
    </Container>
  );
};

export default Hero;