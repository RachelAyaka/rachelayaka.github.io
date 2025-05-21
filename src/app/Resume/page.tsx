import { Box, Container, Typography } from '@mui/material';

const ResumePage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', m: 4 }}>
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
  );
};

export default ResumePage;
