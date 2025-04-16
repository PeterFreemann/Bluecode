"use client"

import React, { useRef } from 'react'

const cards = [
  { id: 1, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/hope.jpeg", subtitle: "Inspiring Talk" },
  { id: 2, title: "Employee Well-being: Prioritising Mental Health in the Workplace",date:"AUG 29, 2023",min:'45 MINS', image: "/images/employee.jpeg", subtitle: "Deep Dive" },
  { id: 3, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/relationship.jpeg", subtitle: "Creative Minds" },
  { id: 4, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/relationship.jpeg", subtitle: "Tech Hour" },
  { id: 5, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/relationship.jpeg", subtitle: "Business Chats" },
  { id: 6, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/relationship.jpeg", subtitle: "Tech Hour" },
  { id: 7, title: "Relationship Button - Starting Afresh as a Widow",date:"AUG 29, 2023",min:'45 MINS', image: "/images/relationship.jpeg", subtitle: "Business Chats" },
]

export default function Episodes() {
  const scrollRef = useRef(null)

  

  return (
    <section className="px-4 md:px-12 py-8 relative">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-[24px] font-bold">Newly added episodes</h1>
        
      </div>

      {/* Left/Right Buttons */}
      <div className="absolute right-16 top-[90px] z-10 flex gap-2">
        <button
          onClick={() => handleScroll('left')}
          className="bg-white px-3 py-2 text-xl rounded-full shadow-2xl hover:bg-gray-100"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="bg-white px-3 py-2 text-xl rounded-full shadow hover:bg-gray-100"
        >
          →
        </button>
      </div>

      {/* Card Slider */}
      <div className="overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex gap-4 w-max scroll-smooth"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[238px] h-[320px]  rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-gray-400 font-semibold text-lg text-[13px] text-left">{card.date} {card.min}</h2>
                <p className=" text-black text-sm mt-1 text-[15px] text-left">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
