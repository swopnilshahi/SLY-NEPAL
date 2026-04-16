import React from "react";
import Hero from "../components/home/Hero";
import Methods from "../components/home/Methods";
import Conditions from "../components/home/Conditions";
export default function Home(){
    return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

        <Hero />
        <Methods />
        <Conditions />

    </div>
  );
}
