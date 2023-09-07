import { ImageResponse } from "next/server";
// import photo from "../assets/img/layout.png"
export const size = {
    width: 900,
    height : 450,
}

export const contentType = "image/png";

export default async function og(){

    return new ImageResponse (
        <div tw="relative flex items-center justify-center">
          <img src="../assets/img/layout.png" alt="profile photo" />
          <div tw="absolute flex bg-black opacity-50 inset-0 " />
          <div tw="absolute flex items-center top-2 w-full ">
            <p tw="text-white text-4xl flex font-bold m-5">Portfolio Site</p>
            <p tw="text-indigo-200 text-xl flex font-bold m-5">Samir Kumal</p>
           
          </div>
        </div>
      )
}