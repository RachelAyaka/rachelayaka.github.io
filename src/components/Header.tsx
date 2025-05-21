'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer';

const pages = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/AboutMe',
  },
  {
    title: 'Resume',
    path: '/Resume',
  },
  {
    title: 'Projects',
    path: '/Projects',
  },
];

const Header = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Main AppBar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.primary.dark,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // position: 'left',
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: '2rem',
                    mr: 2,
                  }}
                >
                  Rachel Ayaka Lin
                </Typography>
                {/* <Image
                  src="/fanohgeWhite.png"
                  alt="Camp Fanohge White Logo"
                  // layout="fill"
                  style={{ objectFit: 'contain' }}
                  width={60}
                  height={60}
                  priority
                /> */}
              </Box>
            </Link>

            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={Link}
                  href={page.path}
                  sx={{
                    marginRight: 2,
                    color: 'white',
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <NavDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        pages={pages}
        pathname={pathname}
      />
    </>
  );
};

export default Header;
