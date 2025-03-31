import { Box, Typography } from '@mui/material';
import ProjectsSection from '@/components/ProjectsSection';

export default function Projects() {
  return (
    <>
      <Box>
        <Typography variant="h3">--</Typography>
      </Box>
      <ProjectsSection />
      {/* <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          padding: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          borderRadius: 1,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <Typography variant="body2">
          * Able to add/edit projects to show for demo purposes
        </Typography>
      </Box> */}
    </>
  );
}
