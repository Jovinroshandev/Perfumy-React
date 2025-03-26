import flowerImage from "../assets/image/flower4.png"
import { useEffect } from "react"


function Main() {
    useEffect(() => {
        setTimeout(() => {
            let Container = document.getElementById("Container");
            Container.classList.add("opacity-100");
        }, 100);
    }, []);
    return (
        <div id="Container" className="m-4 md:m-7 pt-4 md:pt-14 flex gap-4 opacity-0 transition-opacity duration-1000 ease-in-out">
            <div className="md:hidden">
                <img className="w-36 md:w-96" src={flowerImage} alt="flower" />
            </div>
            <div className="hidden md:block">
                <img style={{width:"700px"}} src={flowerImage} alt="flower" />
            </div>
            <div className="md:hidden w-60 text-center flex flex-col items-center">
                <div className="text-xl font-bold md:text-4xl">
                    <h2><span className="text-pink-700" style={{ fontFamily: "cursive" }}>Explore</span> The Greatest</h2>
                    <h2>Collection of All Time</h2>
                </div>
                <p className="text-xs mt-3 md:text-xl md:mt-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius quos nisi iste corporis culpa veritatis, ullam deleniti sit, reprehenderit fugit sed quia libero similique minima neque magnam aliquam? Ratione odit iure ab hic eum assumenda enim doloribus ipsam, sapiente eligendi totam incidunt cum quasi excepturi sequi rem modi placeat officia laboriosam dolorum mollitia fugit saepe? Odio atque porro quod labore ea quaerat laborum accusamus consequuntur ipsam fugiat vero numquam.
                </p>
                <div className="mt-3 bg-pink-700 text-white font-bold text-center rounded p-1 w-fit mx-auto">
                    <p className="text-xs px-2 cursor-pointer">Explore More</p>
                </div>
            </div>
            <div className="hidden text-center md:flex flex-col items-center">
                <div className="flex font-bold text-4xl">
                    <h2><span className="text-pink-700" style={{ fontFamily: "cursive" }}>Explore</span> The Greatest</h2>
                    <h2>Collection of All Time</h2>
                </div>
                <p className="text-xl mt-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius quos nisi iste corporis culpa veritatis, ullam deleniti sit, reprehenderit fugit sed quia libero similique minima neque magnam aliquam? Ratione odit iure ab hic eum assumenda enim doloribus ipsam, sapiente eligendi totam incidunt cum quasi excepturi sequi rem modi placeat officia laboriosam dolorum mollitia fugit saepe? Odio atque porro quod labore ea quaerat laborum accusamus consequuntur ipsam fugiat vero numquam.
                </p>
                <div className="mt-7 bg-pink-700 text-white font-bold text-center rounded p-1 w-fit mx-auto">
                    <p className="text-xl px-2 cursor-pointer">Explore More</p>
                </div>
            </div>
            <div className="hidden md:block">
                <img style={{width:"700px"}} src={flowerImage} alt="flower" />
            </div>
        </div>

    )
}

export default Main