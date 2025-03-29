import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Avatar,
  IconButton,
  Paper,
  Grid2,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header/>
      <Box sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh', 
        py: 8
      }}>
        <Container maxWidth="md">
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{xs:12, md:4}} sx={{ textAlign: { xs: 'center', md: 'left' }, mt:6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Avatar 
                  sx={{ 
                    width: 200, 
                    height: 200, 
                    borderRadius: '50%',
                    border: '5px solid #F3D0D7', 
                    mb: 2
                  }}
                  alt="Rachel Lin"
                  src="/IMG_2835.png"
                />
                <Typography 
                  variant="h4" 
                  component="h1" 
                  sx={{ 
                    mb: 0.5, 
                    fontFamily: "'Georgia', serif",
                    color: 'text.primary'
                  }}
                >
                  Rachel Ayaka Lin
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mb: 3, 
                    fontFamily: "'Georgia', serif",
                    color: 'text.secondary'
                  }}
                >
                  Software Engineer
                </Typography>
                
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    mb: 2, 
                    maxWidth: 250, 
                    borderColor: 'primary.main',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'secondary.main',
                    }
                  }}
                >
                  Email me
                </Button>
                <IconButton aria-label="LinkedIn" sx={{ color: 'primary.dark' }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid2>
            
            <Grid2 size={{xs:12, md:8}}>
              <Paper 
                sx={{ 
                  p: { xs: 2, md: 4 },
                  backgroundColor: 'background.paper',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{ 
                    mb: 3, 
                    fontFamily: "'Georgia', serif",
                    color: 'text.primary'
                  }}
                >
                  About Me
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: 'text.primary',
                    lineHeight: 1.7
                  }}
                >
                  I am a creative and collaborative digital marketing manager with over 15 years of experience. 
                  I am an expert in driving growth and raising brand awareness through customer-centric campaign strategies. 
                  I specialize in cross-channel marketing, digital communication, and social media management.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      borderColor: 'primary.main',
                      color: 'text.primary',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'secondary.main',
                      }
                    }}
                  >
                    Resume
                  </Button>
                </Box>
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  )
}