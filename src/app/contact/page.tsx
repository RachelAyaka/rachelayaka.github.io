// import Hero from "@/components/Hero";
// import ProjectsSection from "@/components/ProjectsSection";
// import Head from "next/head";
// import Image from "next/image";

import { Card, CardContent, Grid2, Typography } from "@mui/material";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Grid2 size={{sm: 12, md:5, lg: 'grow'}}>
          <Card elevation={0}>
            <CardContent>
              <Typography
                variant="h5" 
                color="primary"
                style={{ 
                  fontWeight: 500,
                  marginBottom: '1rem'
                }}
              >
                Core Principles
              </Typography>
              <Typography variant="body2">
                • Minimalist Design
                • Warm Neutral Palette
                • Intentional Simplicity
                • Timeless Aesthetics
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
    </div>
  );
}
