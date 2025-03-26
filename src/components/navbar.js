import { useRef } from "react";

function Navbar() {
    const sideNavRef = useRef(null);
    function openManu() {
        if (sideNavRef.current) {
            sideNavRef.current.style.transform = "translateX(0%)";  // Move into view
            sideNavRef.current.style.opacity = "1";
            sideNavRef.current.style.display = 'flex'
        }
    }

    function closeManu() {
        if (sideNavRef.current) {
            sideNavRef.current.style.transform = "translateX(100%)"
            sideNavRef.current.style.opacity = "0"
        }
    }

    return (
        <div>
            <div className="flex justify-between text-white p-5 md:px-10 bg-gradient-to-r from-pink-500 to-purple-500 ">
                <h1 className="text-xl font-bold">Perfumy</h1>
                <ul className="gap-7 hidden md:flex">
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">Home</a></li>
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">About Us</a></li>
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">Shop</a></li>
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">Blog</a></li>
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">Contact Us</a></li>
                    <li className="hover:bg-white hover:text-black p-1 rounded-xl"><a href="#">Blog</a></li>
                </ul>
                <div style= {{display:'none'}} className="fixed top-0 right-0 w-screen h-screen  transition-transform duration-700 ease-in-out" ref={sideNavRef}>
                    <p onClick={closeManu} className="text-white absolute top-0 right-0 p-4 z-10 cursor-pointer">
                        <i className="fa-solid fa-circle-xmark text-white"></i>
                    </p>
                    <ul className="md:hidden flex flex-col gap-5 absolute top-0 bg-pink-800 right-0 h-screen p-14 grow-1">
                        <li className="hover:underline"><a href="../index.html" className="hover:font-bold">Home</a></li>
                        <li className="hover:underline"><a href="#">About Us</a></li>
                        <li className="hover:underline"><a href="#">Shop</a></li>
                        <li className="hover:underline"><a href="#">Blog</a></li>
                        <li className="hover:underline"><a href="#">Contact Us</a></li>
                        <li className="hover:underline"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <p onClick={openManu} className="md:hidden cursor-pointer">
                    <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
                </p>
            </div>
        </div>
    );
}

export default Navbar;
