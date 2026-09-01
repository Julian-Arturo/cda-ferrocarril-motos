import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { VehicleTypes } from "@/components/sections/VehicleTypes";
import { SocialProof } from "@/components/sections/SocialProof";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Pricing />
        <Process />
        <VehicleTypes />
        <SocialProof />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
