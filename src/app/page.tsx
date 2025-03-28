import { Metadata } from "next";
import { Box } from "@mui/material";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: 'Rachel Ayaka Lin | Home',
  description: 'Professional portfolio showcasing my projects and skills',
}

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <ProjectsSection /> 
      <Footer />
    </Box>
  );
}
