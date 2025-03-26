import footerImage from "../assets/image/flower1.png";
import { useEffect } from "react";

function Footer() {
    

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= 
                              document.body.offsetHeight - 10;
            let footerBG = document.getElementById('footerBG')
            if (isAtBottom) {
                footerBG.style.transform = "translateY(0)";
                footerBG.style.opacity = "1";
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["Home", "About Us", "Shop", "Blog", "Contact Us"];

    return (
        <div className="pt-9 bg-gradient-to-t from-pink-500">
            <div className="flex px-2 text-xs md:text-xl justify-center gap-4 md:gap-20 font-semibold">
                {links.map((item) => (
                    <a key={item} href="#">{item}</a>
                ))}
            </div>
            <img
                id="footerBG"
                src={footerImage}
                alt="Footer"
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: "translateY(30px)", opacity: 0 }}
            />
        </div>
    );
}

export default Footer;