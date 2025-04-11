'use client';

import { useEffect, useRef, useState } from "react";
import LogoImg from '@/public/img/logo.png';
import Image from "next/image";
import Buttons from "./Buttons";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll  } from "react-use";
import gsap from "gsap";


const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisisble, setIsNavVisible] = useState(true);

  const  {y: currentScrollY} = useWindowScroll();

  useEffect(() => {
    if(currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if(currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisisble ? 0 : -100,
      opacity: isNavVisisble ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisisble])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={navContainerRef} 
    className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <Image
                src={LogoImg}
                alt="Logo"
                width={50}
                height={50}
                className=""
               />

               <Buttons
                  id="product-button"
                  title="Products"
                  rightIcon={<TiLocationArrow />}
                  className="bg-blue-100 md:flex hidden items-center justify-center gap-1"
                />
            </div>

            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <Link key={index} 
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn ">
                    {item}
                  </Link>
                ))}
              </div>

              <button  
                className="ml-10 flex items-center space-x-0.5 cursor-pointer"
                onClick={toggleAudioIndicator}>
                  <audio 
                    ref={audioElementRef} 
                    src='audio/public_audio_loop.mp3'
                    loop
                    className="hidden" />
                    
                  {[1, 2, 3, 4].map((bar) => (
                    <div key={bar}
                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s`}} />
                  ))}
              </button>
            </div>
          </nav>
      </header>
    </div>
  )
}

export default Navbar;