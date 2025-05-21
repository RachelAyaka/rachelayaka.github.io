'use client';

import Link from 'next/link';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export interface Page {
  title: string;
  path: string;
}

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  pages: Page[];
  pathname: string;
}

const NavDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  pages,
  pathname,
}: Props) => {
  const theme = useTheme();

  const isCurrentPathSelected = (
    pathName: string,
    navPath: string
  ): boolean => {
    const pathNameArray = pathName.slice(1).split('/');
    if (pathNameArray[0] === '') {
      return navPath === '/';
    } else {
      return navPath.includes(pathNameArray[0]);
    }
  };

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }} // Better mobile performance
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
          borderRadius: '0 0 16px 0',
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}
          >
            Rachel Ayaka Lin
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {pages.map((page: Page) => (
            <ListItem disablePadding key={page.title}>
              <ListItemButton
                component={Link}
                href={page.path}
                selected={isCurrentPathSelected(pathname, page.path)}
                sx={{
                  textAlign: 'center',
                  color: 'inherit',
                  fontWeight:
                    pathname === page.path.slice(1) ? 'bold' : 'normal',
                }}
              >
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
