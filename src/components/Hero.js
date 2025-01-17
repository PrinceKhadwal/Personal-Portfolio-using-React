import React from 'react'
import {PROFILE_DATA} from "../utils/data"
import PROFILE_PIC from "../assets/profile-pic-1.jpg"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {FiMail} from "react-icons/fi"
import { MdOutlineBadge } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const Hero = () => {
  let {name,tagline,jobTitle,yearsOfExperience,location,email,skills,} = PROFILE_DATA;
  if(!yearsOfExperience)
  yearsOfExperience="Fresher"
  return (
    <section className='max-w-screen-xl flex flex-col gap-14 md:flex-row items-center pt-16 md:pt-28 pb-20 px-6 mx-auto' id='hero'>
      
      
      <div className='flex-1 text-center md:text-left z-[1]'>
        <h3 className=''>Hi, I'm</h3>
        <h2 className='text-3xl mt-3 md:text-5xl md:mt-5'>{name}</h2>
        <span>
          A Frontend Web Developer
        </span>
        <p className='text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8'>{tagline}</p>
        <button className='primary-btn'>Contact Me</button>
      </div>


      <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]  md:w-2/5 lg:w-1/3'>
        <div className='w-[403]px bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6'>
          <div className='flex items-center justify-center'>
            <img className='hero-img' src={PROFILE_PIC} alt='img one'/>
          </div>
          
          <div className='bg-cardbg rounded-md text-center mt-3 p-4'>
            <h5 className='text-sm md:text-base text-white'>{name}</h5>
            <p className='text-slate-500 text-xs md:font-medium mt-1'>{jobTitle}</p>

            <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
              <HiOutlineLocationMarker />
              <p className='font-medium'>{location}</p>
            </div>
          </div>

          <InfoTile icon={<FiMail size={20} className='text-sky-400' />}
                    text={email} />
          <InfoTile icon={<MdOutlineBadge size={20} className='text-sky-400' />}
                    text={yearsOfExperience} />

          <div className='flex items-center gap-2 flex-wrap my-3'>
            {skills.map((item) => (
            <div key={item} className='text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1'>{item}</div>
            ))}
          </div>

          <div className='flex items-center gap-2 flex-wrap'>

            <div className='bg-blue-800/30 p-2 rounded'>
              <a href='https://github.com/PrinceKhadwal' target='_blank' rel="noreferrer"><FaGithub className='text-lg md:text-xl' /></a>
            </div>
            <div className='bg-blue-800/30 p-2 rounded'>
            <a href='https://www.linkedin.com/in/prince-khadwal-04003a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer"><FaLinkedin className='text-lg md:text-xl'/></a>
            </div>
            <div className='bg-blue-800/30 p-2 rounded'>
              <FaXTwitter className='text-lg md:text-xl'/>
            </div>

          </div>

        </div>
      </div>


    </section>
  )
}

const InfoTile = ({icon,text}) => {
  return <div className='flex items-center gap-4 bg-cardbg p-4 mt-3 rounded-md'>{icon}
  <p className='text-xs md:text-sm font-normal'>{text}</p></div>
}

export default Hero