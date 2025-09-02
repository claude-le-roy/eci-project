import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <HowItWorks />
        <Impact />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
