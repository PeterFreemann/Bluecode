"use client";

import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/news.jpeg",
    subtitle: "Inspiring Talk",
  },
  {
    id: 2,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/hubcast.jpeg",
    subtitle: "Deep Dive",
  },
  {
    id: 3,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/nextgen.jpeg",
    subtitle: "Creative Minds",
  },
  {
    id: 4,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/mun.jpeg",
    subtitle: "Tech Hour",
  },
  {
    id: 5,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/sphere.jpeg",
    subtitle: "Business Chats",
  },
  
];

export default function Prodcast() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  

  return (
    <section className="px-4 md:px-12 py-8 relative">
      <div className="text-left mb-10">
        <h1 className="text-[24px] font-bold">Other Prodcast</h1>
      </div>

      
      <div className="overflow-x-auto">
        <div ref={scrollRef} className="flex gap-4 w-max scroll-smooth">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[265px] h-[367px] rounded-lg overflow-hidden shadow-md "
            >
              <div className="flex justify-center items-center w-full h-[234px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[223px] h-[234px] object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-gray-400 font-semibold text-lg text-[13px] text-left">
                  {card.date} {card.min}
                </h2>
                <p className="text-black text-sm mt-1 text-[15px] text-left">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
