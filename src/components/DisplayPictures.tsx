'use client'
import { Box, Container, styled, Typography } from "@mui/material"
const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  }));

const ImageIconBox = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover .imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover .imageMarked': {
      opacity: 0,
    },
    '& .imageTitle': {
      position: 'relative',
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }))
  
  const images = [
    {
      url: '/images/tennis.jpg',
      title: 'Tennis',
      width: '40%',
    },
    {
      url: '/images/surf.jpg',
      title: 'Surf',
      width: '20%',
    },
    {
      url: '/images/flowerPlate.jpg',
      title: 'Cook / Eat',
      width: '40%',
    },
    {
      url: '/images/flyingOffBoat.jpeg',
      title: 'Water Sport',
      width: '38%',
    },
    {
      url: '/images/swing.jpeg',
      title: 'Travel',
      width: '38%',
    },
    {
      url: '/images/fish.png',
      title: 'Snorkel',
      width: '24%',
    },
    {
      url: '/images/hiking.jpg',
      title: 'Hike',
      width: '40%',
    },
    {
      url: '/images/macaron.jpg',
      title: 'Bake',
      width: '20%',
    },
    {
      url: '/images/crotchet.jpg',
      title: 'Crotchet',
      width: '40%',
    },
  ]

export default function DisplayPictures() {
    return (
      <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" component="h2">
          Hobbies
        </Typography>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image) => (
                <ImageIconBox
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                {/* <> */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 40%',
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <ImageBackdrop className="imageBackdrop" />
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'common.white',
                        }}
                    >
                        <Typography
                            component="h3"
                            variant="h6"
                            color="inherit"
                            className="imageTitle"
                        >
                            {image.title}
                            <div className="imageMarked" />
                        </Typography>
                    </Box>
                {/* </> */}
                </ImageIconBox>
            ))}
        </Box>
      </Container>
    );
  }