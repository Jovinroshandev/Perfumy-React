import perfumeimage from '../assets/image/perfume6.png'
import girl2 from '../assets/image/girl2.png'
import { useEffect } from 'react'

function Imagebar(){
    useEffect(()=>{
        setTimeout(() => {
            let section1Container = document.getElementById("section1Container")
            section1Container.classList.add("opacity-100");
        }, 1000);
    })

    
    return (
        <div id="section1Container" className='flex m-5 md:mx-10 gap-4 items-center opacity-0 transition-opacity duration-700 ease-in-out'>
            <div className="text-wrap w-48 md:w-auto">
                <div className='md:flex md:gap-2'>
                    <h2 className="text-xl md:text-5xl font-bold">Discover <span className="text-pink-700" style={{fontFamily:"cursive"}}>Natural</span></h2>
                    <h2 className="text-xl md:text-5xl font-bold">Perfume</h2>
                </div>
                <p className='pt-2 md:pt-5 text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid enim quos magni nobis quis dolores quibusdam, suscipit quod id consequuntur accusamus</p>
                <div className='md:hidden mt-2 flex gap-2' style={{fontSize:"9px"}}>
                    <p className='bg-pink-700 text-white font-bold p-1 cursor-pointer'><input type="button" value="" /> Explore Now</p>
                    <p className='bg-white font-bold p-1 cursor-pointer'><input type="button" value="" /> How its work <i className="fa-regular fa-circle-play" style={{color:"black"}}></i></p>
                </div>
                <div className='hidden md:flex mt-14 bottom-0 gap-2' style={{fontSize:"20px"}}>
                    <p className='bg-pink-700 p-2 text-white font-bold cursor-pointer'> Explore Now</p>
                    <p className='bg-white p-2 font-bold cursor-pointer'> How its work <i className="fa-regular fa-circle-play" style={{color:"black"}}></i></p>
                </div>
            </div>
            <div>
                <img className='w-48 h-48 md:hidden' src={perfumeimage} alt="perfumeimage" />
                <img className='hidden md:block' style={{width:"40dvw"}} src={girl2} alt="perfumeimage" />
            </div>
        </div>
    )
}

export default Imagebar