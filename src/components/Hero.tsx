'use client';

import { JSX, useRef } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ProjectsSection from './ProjectsSection';

function Hero(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const projectsSection = useRef<HTMLElement | null>(null);

  const scrollToSection = () => {
    if (projectsSection.current) {
      projectsSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: { xs: '4rem', md: '8rem' },
          paddingBottom: { xs: '4rem', md: '8rem' },
          minHeight: { xs: 'auto', md: '100vh' },
          backgroundImage: 'url(/images/water.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          width: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for better text readability
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            padding: { xs: '1rem', sm: '2rem' },
            zIndex: 2, // Place content above the overlay
          }}
        >
          <Grid2 container spacing={{ xs: 4, md: 15 }} alignItems="center">
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  marginBottom: { xs: '2rem', md: 0 },
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                  }}
                >
                  Full-Stack
                </Typography>
                <Typography
                  variant="h3"
                  component="span"
                  sx={{
                    color: 'white',
                    whiteSpace: { xs: 'normal', md: 'nowrap' },
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                  gutterBottom
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    marginBottom: '1.5rem',
                  }}
                >
                  Active Secret Clearance
                </Typography>
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  gap={2}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMobile ? 'medium' : 'large'}
                    sx={{
                      fontWeight: 600,
                      padding: { xs: '0.5rem 1rem', md: '0.75rem 1.5rem' },
                      borderRadius: '4px',
                      textTransform: 'none',
                      boxShadow: theme.shadows[3],
                      '&:hover': {
                        boxShadow: theme.shadows[5],
                      },
                    }}
                    href="/AboutMe"
                  >
                    About Me
                  </Button>
                  <Button
                    variant="outlined"
                    size={isMobile ? 'medium' : 'large'}
                    sx={{
                      fontWeight: 600,
                      padding: { xs: '0.5rem 1rem', md: '0.75rem 1.5rem' },
                      borderRadius: '4px',
                      textTransform: 'none',
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                    onClick={scrollToSection}
                  >
                    View My Work
                  </Button>
                </Box>
              </Box>
            </Grid2>

            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 200, sm: 250, md: 300 },
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: theme.shadows[10],
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Image
                  alt="Rachel Ayaka Lin"
                  src="/images/me.png"
                  fill
                  sizes="(max-width: 600px) 200px, (max-width: 960px) 250px, 300px"
                  priority
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>

      <Box ref={projectsSection}>
        <ProjectsSection />
      </Box>
    </>
  );
}

export default Hero;
