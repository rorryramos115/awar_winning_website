'use client';

import AnimetedTitle from "./AnimetedTitle";
import Image from "next/image";
import StoryImg from '@/public/img/entrance.webp';
import { useRef } from "react";
import gsap from "gsap";


const Story = () => {

    const frameRef = useRef('null');


    // put the text animate when enter in page
    const handleMouseLeave = () => {
        const element = frameRef.current;
    
        if (element) {
          gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut",
          });
        }
      };

    // put the card animate when hover the card
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
          });
    }


  return (
    <div id="story"
        className="min-h-dvh w-screen bg-black text-blue-100">
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">
                The multiversal ip world
            </p>

            <div className="relative size-full">
                <AnimetedTitle
                   title="The st<b>o</b>ry of <br/> a hidden realm"
                   className="mt-5 pointer-events-none text-8xl mix-blend-difference relative z-10 !text-blue-100"
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <Image 
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src={StoryImg}
                                alt="Entrance"
                                width='100%'
                                height='100%'
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story;