"use client"

import React, { useRef } from 'react'

const cards = [
  { id: 1, title: "Podcast 1", image: "/images/trending.jpeg", subtitle: "Inspiring Talk" },
  { id: 2, title: "Podcast 2", image: "/images/trendingi.jpeg", subtitle: "Deep Dive" },
  { id: 3, title: "Podcast 3", image: "/images/harmonize.jpeg", subtitle: "Creative Minds" },
  { id: 4, title: "Podcast 4", image: "/images/lifestyle.jpeg", subtitle: "Tech Hour" },
  { id: 5, title: "Podcast 5", image: "/images/willingness.jpeg", subtitle: "Business Chats" },
  { id: 6, title: "Podcast 6", image: "/images/podcast4.jpg", subtitle: "Tech Hour" },
  { id: 7, title: "Podcast 7", image: "/images/podcast5.jpg", subtitle: "Business Chats" },
]

export default function Trending() {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    const scrollAmount = 300
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="px-4 md:px-12 py-8 relative">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-[24px] font-bold">Trending</h1>
        <p className="text-[16px] mt-2 text-gray-500 font-bold">Featured Podcasts</p>
      </div>

      {/* Left/Right Buttons */}
      <div className="absolute right-16 top-[90px] z-10 flex gap-2">
        <button
          onClick={() => handleScroll('left')}
          className="bg-white px-3 py-2 text-xl rounded-full shadow hover:bg-gray-100"
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
              className="min-w-[250px] h-[424px] bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[288] h-[424px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-white font-semibold text-lg">{card.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
