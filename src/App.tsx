import React from "react";
import Hero from "./components/hero";
import Features from "./components/features";
import CtaSection from "./components/cta";

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Features />
      <CtaSection />
    </div>
  );
};

export default App;
