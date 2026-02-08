import React from 'react'
import Light from '../../assets/Sun.png'
import Dark from '../../assets/Moon.png'
const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const element = document.documentElement; //html element
    // console.log(element);

    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme, element]);

    return (
        <div className='relative '>
            
            <img 
            src={Light} 
            alt="" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'light' ? 'opacity-300' : 'opacity-0'}`} />
            
            <img 
            src={Dark} 
            alt="" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />

        </div>
    )
}

export default DarkMode
