"use client";

import Form from "./components/Form";
import LandingHero from "./components/LandingHero";
import Result from "./components/Result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12">
      <LandingHero />
      <Form />
      <Result />
    </main>
  );
}
