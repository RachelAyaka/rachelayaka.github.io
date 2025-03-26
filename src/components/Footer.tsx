'use client'
import { JSX } from 'react'

import { Box, Container, Grid2, Typography, useTheme } from '@mui/material'

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

        <Box sx={{ margin: '2rem 0rem' }}>
          <Grid2 container>
            <Grid2 container direction="column" size={4}>
              <Typography
                sx={{ fontWeight: 'bold' }}
                gutterBottom
              >
                Contact Me
              </Typography>
              <Grid2>
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                  >
                    858-280-6217
                  </Typography>
              </Grid2>
              <Grid2>
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                  >
                    rachellin117@gmail.com
                  </Typography>
              </Grid2>
              <Grid2>
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                  >
                    New York, New York
                  </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  )
}
export default Footer