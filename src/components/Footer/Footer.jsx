import React from 'react'
import FooterLogo from '../../assets/Logo.png'
import Banner from '../../assets/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const BannerImag = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        title: 'Home',
        links: '#',
    },
    {
        title: 'About',
        links: '/#about',
    },
    {
        title: 'Contact',
        links: '/#contact',
    },
    {
        title: 'Blog',
        links: '/#blog',
    },
]
const Footer = () => {
    return (
    <div className='text-white mb-20' style={BannerImag}>
        <div className='container'>
            <div data-aos='zoom-in' className='grid md:grid-cols-3 pv-44 pt-5'>
                {/* Company Details  */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify flex items-center gap-3 mb-3'>
                        <img src={FooterLogo} alt="" className='max-w-[50px]'/>
                        Shopsy
                    </h1>
                    <p>Your one-stop shop for all your needs.</p>
                </div>
                {/* Footer Links  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Link
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((links) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={links.title}>
                                            <span>{links.title}</span>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Link
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((links) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={links.title}>
                                            <span>{links.title}</span>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Social Links  */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary hover:scale-110 duration-300'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl hover:text-primary hover:scale-110 duration-300'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary hover:scale-110 duration-300'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Thailand, Bankok</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt />
                                <p>+66 1234 5678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
