'use client'
import { JSX } from 'react'
import Link from 'next/link'

import { Box, Container, Divider, Grid2, Typography, useTheme } from '@mui/material'

function Footer(): JSX.Element {
    const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ margin: '4rem 0rem' }}>
          <Grid2 container>
            <Grid2 container direction="column" size={4}>
              <Typography
                color="white"
                sx={{ fontWeight: 'bold' }}
                gutterBottom
              >
                Resources
              </Typography>
              <Grid2>
                <Link
                  href={''}
                  style={{
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: 'white' } }}
                  >
                    Explore LiDAR
                  </Typography>
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  href={''}
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  <Typography
                    color="gray"
                    sx={{ '&:hover': { color: 'white' } }}
                  >
                    FAQ
                  </Typography>
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
          <Divider color="gray" sx={{ margin: '2rem 0rem 1rem' }} />
        </Box>
      </Container>
    </Box>
  )
}
export default Footer