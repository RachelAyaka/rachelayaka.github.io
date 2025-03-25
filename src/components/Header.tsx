import { JSX, Suspense } from 'react'
import Link from 'next/link'

import { ShoppingCart } from '@mui/icons-material'
import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  Toolbar,
} from '@mui/material'

// import UserHeaderButton from './UserHeaderButton'
// import AppNavIconButton from './AppNavIconButton'

async function Header(): Promise<JSX.Element> {
  return (
    <>
      <AppBar>
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href='home'>
              Home
            </Link>
            <Box component="nav" sx={{ display: 'flex', gap: '1rem' }}>
              {/* <AppNavIconButton
                icon={<ShoppingCart />}
                path={Paths.CART}
                label="Cart"
              /> */}
              <Suspense
                fallback={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '8rem',
                    }}
                  >
                    <CircularProgress color="secondary" size="2rem" />
                  </Box>
                }
              >
                {/* <UserHeaderButton /> */}
              </Suspense>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
export default Header