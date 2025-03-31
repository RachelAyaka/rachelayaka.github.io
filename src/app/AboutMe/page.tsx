import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Avatar,
  Paper,
  Grid2,
} from '@mui/material'
import DisplayPictures from '@/components/DisplayPictures';

export default function Home() {
  return (
    <>
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: 8
      }}>
        <Container maxWidth="md">
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{xs:12, md:4}} sx={{ textAlign: { xs: 'center', md: 'left' }, mt:10 }}>
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
                  src="/images/me.png"
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
                    mt: 3, 
                    fontFamily: "'Georgia', serif",
                    color: 'text.secondary'
                  }}
                >
                  Software Engineer 
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mb: 3, 
                    fontFamily: "'Georgia', serif",
                    color: 'text.secondary'
                  }}
                >
                  Active Secret Clearance
                </Typography>
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
                  I am a full stack developer at Naval Information Warefare Center, deeply passionate about continuously 
                  advancing skills. I enjoy the combination of creativity, problem-solving, and technology in my work.
                  When I am not at my computer, I enjoy staying active by playing tennis, surfig, and exploring my creative side through
                  cooking, baking, traveling, and crotching.

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
                    href={'/Resume'}
                  >
                    Resume
                  </Button>
                </Box>
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <DisplayPictures/>
    </>
  )
}