"use client";
import { servicesData } from "@/data/service";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface ParallaxImageProps {
  service: ServiceType;
}

export default function ParallaxImage({
  service,
}: ParallaxImageProps) {
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
const data = servicesData[service].parallax;
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -15,
          scale: 1.2,
        },
        {
          yPercent: 15,
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] flex items-center justify-center bg-[#151515]"
    >
      <div className="relative w-[90%] h-[90vh] overflow-hidden rounded-3xl">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src={data.image}
            alt="Parallax"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}