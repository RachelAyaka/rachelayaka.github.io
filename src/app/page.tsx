import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Rachel`&apos;`s Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        {/* <SkillsSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
