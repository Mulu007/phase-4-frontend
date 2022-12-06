import React from 'react'
// import styles from '../style'
import {footerLinks} from './Constants'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className = "flex justify-center items-center sm:py-16 py-6 flex-col bg-black text-white">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className= "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className=" flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
                </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index)=>(
                  <li key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-rgba(225, 255, 255, 0.7) hover:text-red-600 cursor-pointer ${index !== footerLink.links.length -1? 'mb-4' : 'mb-0'}` }
                //   onClick={() => window.open(footerLink.links.link)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center '>
        <p className='py-4'>2022 ALLMOVIES. All rights reserved</p>
        </div>
        <div className='flex flex-row justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
        </div>
    </section>
  )
}
export default Footer







