import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white px-1'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-red-600 py-8'>
            <div>
                <h6 className='font-bold pt-2 text-red-600'>Useful Links</h6>
                <ul>
                    <li className='py-1'><a href='/'>FAQ</a></li>
                    <li className='py-1'><a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>Investor Relations</a></li>
                    <li className='py-1'><a href='https://help.netflix.com/legal/privacy'>Privacy</a></li>
                    <li className='py-1'><a href='https://fast.com/'>Speed Test</a></li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 text-red-600'>Recommendations</h6>
                <ul>
                    <li className='py-1'><a href="https://www.imdb.com/search/title/?country_of_origin=KE"> Suggestions</a></li>
                    <li className='py-1'><a href="https://www.rottentomatoes.com/"> Rotten Tomatoes</a></li>
                    <li className='py-1'><a href="https://www.netflix.com/ke/browse/genre/27346"> Kids Shows</a></li>
                    <li className='py-1'><a href="https://collider.com/best-tv-shows-to-binge-watch/"> Series To Watch</a></li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold pt-2 text-red-600'>Account</h6>
                <ul>
                    <li className='py-1'><a href="https://www.netflix.com/our-partner/"> Ways To Watch</a></li>
                    <li className='py-1'><a href="https://www.netflix.com/terms-and-services/"> Terms & Services</a></li>
                </ul>
            </div>
            <div className='col-span-3 pt-8 md:pt-2'>
                <p className='font-bold uppercase text-red-600'>Subscribe to our new releases</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4 bg-red-600 rounded font-extrabold text-white'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 ALLMOVIES. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.twitter.com/"><FaTwitter /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
            <a href="https://github.com/"><FaGithub /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer