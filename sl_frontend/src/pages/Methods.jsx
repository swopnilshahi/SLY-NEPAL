import React from "react";
import HealingMethods from "../components/methods/HealingMethods";
import Hero from "../components/methods/Hero";
import CTA from "../components/methods/CTA";

const MethodsPage = () => {

  return (

    < >
      <Hero />
      <HealingMethods />
      <div className="h-20"></div>
      <CTA />
    </>

  );
};

export default MethodsPage;