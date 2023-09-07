import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Home from "@/containers/Home";
import Skills from "@/containers/Skills";
import { Work } from "@/containers/Work";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Samir Kumal",
  description:
    "I'm Samir Kumal, and I proudly call Pokhara, Nepal, my home. I'm deeply passionate about web development, and it's my mission to craft extraordinary websites and Mobile applications. My dedication goes beyond just creating websites; it's about crafting experiences that leave a lasting impression. I'm committed to delivering not just good but outstanding solutions to my clients.",
};

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
