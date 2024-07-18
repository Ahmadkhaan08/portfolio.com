import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"
import { FaFacebookF, FaLinkedinIn, FaReact,FaCode, FaInstagram, FaVoicemail, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import {  DiJavascript } from 'react-icons/di'; 
//import { Link } from 'react-router-dom';


export default function LeftBanner() {
    const [text] = useTypewriter({
        words: ["CS Student.", "Front End Developer.", "Software Engineer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <div className='w-full lg:w-1/2 gap-20 flex flex-col'>
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD!</h4>
        <h1 className='text-5xl font-bold text-white'>
            Hi, I'm<span className='text-designColor capitalize'>Mr.Ahmad Khan</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>a <span >{text}</span><Cursor
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor="#ff014f"
      /></h2>
       <p className="text-base font-bodyFont leading-6 tracking-wide">
      I use animation as a third dimension by which to simplify experiences
      and kuiding thro each and every interaction. I'm not adding motion
      just to spruce things up, but doing it in ways that.
    </p>
    </div>
    <div className=" justify-center">
    <div >
        <h2 className="text-base uppercase font-titleFont mb-4 mt-5">Find me in</h2>
        <div className="flex gap-4">
        <a href='mailto:mrahmadismail@gmail.com'
        target='_blank'>
            <span className='bannerIcon'><FaEnvelope/></span></a>
            <a href='https://www.instagram.com/mr_ahmad_khaan?utm_source=qr&igsh=cXhvYjZsaHA2cnI2'
            target='_blank'>
            <span className='bannerIcon'><FaInstagram/></span></a>
            <a href='
            https://www.linkedin.com/in/mr-ahmad-ismail-b77664288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'>
            <span className='bannerIcon'><FaLinkedinIn/></span></a>
        </div>
    </div>
    <div >
        <h2 className="text-base uppercase font-titleFont mb-4 mt-5">Best skill in</h2>
        <div className="flex gap-4">
            <span className='bannerIcon'><FaReact/></span>
            <span className='bannerIcon'><FaCode/></span>
            <span className='bannerIcon'><SiTailwindcss/></span>
            <span className='bannerIcon'><DiJavascript/></span>
        </div>
    </div>
    </div>
</div>
)
}
