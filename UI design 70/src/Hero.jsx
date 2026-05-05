import React from 'react'
import coolImg from './img/cool.png'

const Hero = () => {
  return (
    <div className="px-16 pb-16">

      {/* Image Wrapper */}
      <div className="relative w-full rounded-2xl overflow-hidden">

        {/* Background Image */}
        <img
          src={coolImg}
          alt="hero"
          className="w-full h-120 object-cover block"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.15) 100%)'
          }}
        />

        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-[70%]">
          <i className="ri-add-line text-2xl mb-2 block"></i>
          <h1 className="text-4xl font-black leading-tight mb-4">
            Where Money Grows
          </h1>
          <p className="text-base opacity-90 leading-relaxed mb-6">
            A programmable, utility-driven stable token <br />
            designed for native value accrual and seamless <br />
            integration into DeFi.
          </p>
          <button className="bg-[#202020] text-white rounded-full px-7 py-3 text-sm cursor-pointer transition-opacity duration-200 hover:opacity-85">
            Try it now
          </button>
        </div>

        {/* Bottom Right — Socials */}
        <div className="absolute bottom-5 right-6 flex gap-5">
          <a href="#" className="text-white text-xs opacity-85 no-underline transition-opacity duration-200 hover:opacity-100">Twitter</a>
          <a href="#" className="text-white text-xs opacity-85 no-underline transition-opacity duration-200 hover:opacity-100">Instagram</a>
          <a href="#" className="text-white text-xs opacity-85 no-underline transition-opacity duration-200 hover:opacity-100">LinkedIn</a>
        </div>

      </div>
    </div>
  )
}

export default Hero