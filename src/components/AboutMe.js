import React from 'react'
import PROFILE_PIC from '../assets/profile-pic-2.jpg'
import { ABOUT_ME_DATA } from '../utils/data'

const AboutMe = () => {
  return (
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id='about'>
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center pb-10 md:pb-14'>
        About Me
      </h5>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img className='w-full h-80 object-cover rounded-lg mb-4 md:mb-0' src={PROFILE_PIC} alt='profile pic' />

        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6'>
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT_ME_DATA.introduction}{ABOUT_ME_DATA.background}{" "}
            
          </p>
          <br/>

          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT_ME_DATA.careerGoals}{ABOUT_ME_DATA.interests}
          </p>

        </div>
      </div>


    </section>
  )
}


export default AboutMe