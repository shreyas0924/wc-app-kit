import Connect from "@/components/connect";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
