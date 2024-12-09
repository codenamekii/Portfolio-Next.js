import React from 'react'
import MagicButton from './ui/MagicButton'
import { IoRocketSharp } from 'react-icons/io5'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready To Take <span className="text-blue-200">Your</span> Digital Presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach Out to me today and let&apos;s discuss how i can help you achieve your goals.
        </p>
        <a href="mailto:magnoncro95@gmail.com">
          <MagicButton
            title="Let's Connect"
            icon={<IoRocketSharp />}
            position='right'
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Fiki
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer