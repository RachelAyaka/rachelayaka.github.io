import { Box, Container, Typography } from '@mui/material';

import Header from '@/components/Header';

const ResumePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Resume
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <embed
              src="/Resume.pdf"
              type="application/pdf"
              width="100%"
              height="900px"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ResumePage;
