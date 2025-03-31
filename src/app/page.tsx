import { Metadata } from "next";

import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: 'Rachel Ayaka Lin | Home',
  description: 'Professional portfolio showcasing my projects and skills',
}

export default function Home() {
  return (
    <Hero />
  );
}
