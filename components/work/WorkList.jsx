"use client"
import React from "react";
import Image from "next/image";
import Image1 from "@/assets/img/work/panauti.png";
import Image2 from "@/assets/img/work/suscriber.png";
import Image3 from "@/assets/img/work/imagegallery.png";

const data = [
  {
    title: "Panauti Mobile Application",
    image: {
      desc: "tourist guide application",
      source: Image1,
      url:"https://play.google.com/store/apps/details?id=com.nexsewa.winedwine&pli=1"
    },
  },
  {
    title: "Landing Page for Digital Marketing",
    image: {
      desc: "landing page for digital marketing",
      source: Image2,
      url:"https://project-suscriber-org.vercel.app/"
    },
  },
  {
    title: "FullStack Image Gallery ",
    image: {
      desc: "fullstack",
      source: Image3,
      url:"https://image-gallery-with-unsplashapi.vercel.app/"
    },
  },
];

const WorkList = () => {
    const handleClick = (url)=>{
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank"
        a.click();

    }
  return (
    <div className=" flex items-center justify-center flex-col gap-y-12">
      {data.map((item) => (
        <button onClick={()=>handleClick(item.image.url)} className="flex items-center justify-center flex-col p-4 gap-10 " key={item.title} >
        <div className="text-3xl font-bold">
            {item.title}
        </div>
        <Image src={item.image.source} alt={item.image.desc} className="w-[80%] hover:opacity-50"/>
        </button>
      ))}
    </div>
  );
};

export default WorkList;
