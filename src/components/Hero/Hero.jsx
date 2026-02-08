import React from 'react'
import Women from '../../assets/women.png'
import Shopping from '../../assets/shopping.png'
import Sale from '../../assets/sale.png'
import Slider from 'react-slick'
const Images = [
{
    id: 1,
    image: Women,
    title: "Summer Collection",
    description: "Explore our latest summer collection with vibrant colors and trendy styles.",
},
{
    id: 2,
    image: Shopping,
    title: "Exclusive Deals",
    description: "Don't miss out on our exclusive deals and discounts available for a limited time.",
},
{
    id: 3,
    image: Sale,
    title: "Big Sale Event",
    description: "Shop now and save big during our annual sale event with up to 50% off on selected items.",
},
]
const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>

        </div>
        {/* hero section */}
        <div className=' container w-full pb-8 sm:pb-0'>
            <Slider {...settings}>
                {Images.map((data) => (
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                                    {data.title}
                                </h1>
                                <p className='text-sm' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                    {data.description}
                                </p>
                                <div>
                                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                    onClick={handleOrderPopup}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div className='relative z-10' data-aos='zoom-in' data-aos-once="true">
                                    <img src={data.image} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto '/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    )
}

export default Hero
