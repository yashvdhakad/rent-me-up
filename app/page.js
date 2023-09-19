import Hero from "@/app/components/Hero";
import Properties from "./components/Properties";

export default function Home() {
  return (
    <section className="max-w-screen-xl m-auto">
      <Hero />
      <Properties city="Jaipur" />
      <Properties city="Mumbai" direction="right" />
    </section>
  );
}
