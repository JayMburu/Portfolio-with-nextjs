import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const imgURl =
  "https://imgur.com/a/8be1S1t?w=500&h=500&fit=crop&crop=faces&auto=compress";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, i'm James Mburu - crafting digital experiences that captivate and inspire.",
      "I design things and bring design/brand ideas to life.",
      "Creating content that connects people is my passion - let's make something remarkable together.",
      "Learning every day to stay ahead",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src={imgURl}
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2">
          Computer technologist | Graphic Designer | UI/UX Designer
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#aaaaaa" />
        </h1>

        <div className="pt-4 lg:pt-4">
          <Link href="#about">
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">about</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
