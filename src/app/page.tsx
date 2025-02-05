import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWork from "@/components/works";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
import Foooter from "@/components/footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar/>
      <main className="container mx-auto px-4 py-16 space-y-32">
          <Hero/>
          <Features/>
          <HowItWork/>
          <Pricing/>
          <CTA/>
      </main>
      <Foooter/>
    </div>
  );
}
