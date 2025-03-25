import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import { Box } from "@mui/material";
import { Metadata } from "next";
import Head from "next/head";
// import Image from "next/image";

export const metadata: Metadata = {
  title: 'Rachel Ayaka Lin | Home',
  description: 'Professional portfolio showcasing my projects and skills',
}

export default function Home() {
  return (
    <Box
        sx={{
          minHeight: '100vh', // Mimicking min-h-screen
          backgroundColor: 'background.default', // MUI dark mode handling
          color: 'text.primary', // Text color based on MUI theme
        }}
      >
      <Head>
        <title>Rachel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        {/* <SkillsSection /> */}
      </main>
      {/* <Footer /> */}
    </Box>
  );
}
