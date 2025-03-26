import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import { Box } from "@mui/material";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Rachel Ayaka Lin | Home',
  description: 'Professional portfolio showcasing my projects and skills',
}

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Rachel&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <ProjectsSection /> 
      <Footer />
    </Box>
  );
}
