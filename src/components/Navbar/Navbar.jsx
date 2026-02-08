import React from 'react'
import Logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../Navbar/DarkMode';
import { FaCaretDown } from 'react-icons/fa';
const DropdownLinks = [
    { id: 1, name: "Trending Items", link: "#" },
    { id: 2, name: "Trending Books", link: "#" },
    { id: 3, name: "Best Sellers", link: "#" },
    { id: 4, name: "Authors", link: "#" }
];

const menubar = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Top Rated", link: "#" },
    { id: 3, name: "Kids Wear", link: "#" },
    { id: 4, name: "Mens Wear", link: "#" },
    { id: 5, name: "Electronics", link: "#" },
    // { id: 6, name: "Trending Items", link: "#" },
    // { id: 7, name: "Trending Books", link: "#" },
    // { id: 8, name: "Best Sellers", link: "#" },
    // { id: 9, name: "Authors", link: "#" }
];

const Navbar = ({ handleOrderPopup }) => {
    return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper navbar */}
        <div className='bg-primary/40 py-3 sm:py-0'>
            <div className='container flex justify-between items-center '>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="Logo" className='w-10'/>
                        Shopzy
                    </a>
                </div>
                {/* Search bar and order button */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                        <CiSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                </div>
                {/* order button */}
                <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group '>
                    <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
                {/* Dark mode Switch */}
                <div>
                    <DarkMode />
                </div>
            </div>
        </div>
        {/* lower navbar */}
        <div data-aos='zoom-in' className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {menubar.map((data) => (
                    <li key={data.id}>
                        <a href={data.link} className='inline-block px-4 hover:text-primary duration-200 '>{data.name}</a>
                    </li>
                ))}
                {/* Simple Dropdrown and Links */}
                <li className='group relative cursor-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>Trending Products
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] bg-white  rounded-md p-2 text-black shadow-md'>
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id} className=' '>
                                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
