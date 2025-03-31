'use client'
import { JSX } from 'react'
import Link from 'next/link';

import { Box, Container, Grid2, IconButton, Typography, useTheme } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer(): JSX.Element {
    const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="lg">

        <Box sx={{ margin: '1rem' }}>
          <Grid2 container >
            <Grid2 container direction="column">
              <Typography
                sx={{ fontWeight: 'bold' }}
                gutterBottom
              >
                Contact Me
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton aria-label="Phone" sx={{ color: theme.palette.primary.main, width: 30, height: 30}}>
                  <PhoneIcon />
                </IconButton>
                <Typography
                  color="gray"
                  sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                >
                  858-280-6217
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton aria-label="Email" sx={{ color: theme.palette.primary.main, width: 30, height: 30 }}>
                  <EmailIcon />
                </IconButton>
                <Typography
                  color="gray"
                  sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                >
                  rachellin117@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton aria-label="Location" sx={{ color: theme.palette.primary.main, width: 30, height: 30 }} size="small">
                  <LocationOnIcon />
                </IconButton>
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                  >
                    New York, New York
                  </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton aria-label="LinkedIn" sx={{ color: theme.palette.primary.main, width: 30, height: 30 }} size="small">
                  <LinkedInIcon />
                </IconButton>
                <Link href="https://www.linkedin.com/in/rachel-ayaka-lin" passHref>
                  <Typography
                    color="gray"
                    sx={{ textDecoration: 'none','&:hover': { color: theme.palette.primary.dark }}}
                  >
                    LinkedIn 
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ textAlign: 'center', mt: 1, pb: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  &copy; 2025 Rachel Ayaka Lin. All rights reserved.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}
export default Footer