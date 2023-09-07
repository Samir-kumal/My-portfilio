import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Home from "@/containers/Home";
import Skills from "@/containers/Skills";
import { Work } from "@/containers/Work";
import { Metadata } from "next";
import React from "react";


const page = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
