import saleImage1 from "../assets/image/perfume-sale1.jpg"
import saleImage2 from "../assets/image/perfume-sale2.jpg"
import saleImage4 from "../assets/image/perfume-sale4.jpg"
import saleImage5 from "../assets/image/perfume-sale5.jpg"
import saleImage6 from "../assets/image/perfume-sale6.jpg"
import saleImage7 from "../assets/image/perfume-sale7.jpg"
import saleImage8 from "../assets/image/perfume-sale8.jpg"
import saleImage9 from "../assets/image/perfume-sale9.jpg"
import saleImage10 from "../assets/image/perfume-sale10.jpg"
import saleImage11 from "../assets/image/perfume-sale11.jpg"

function Card(imageInput) {
    console.log(imageInput.value)
    return (
        <div className="fade" style={{ opacity: "0" }}>
            <div className="w-28 md:w-52 p-1 flex flex-col gap-1 cursor-pointer hover:bg-pink-100" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <img className="w-28 md:w-52" src={imageInput.value} alt="sale-item" />
                <p className="font-semibold md:text-lg">Titan Sheer For Women</p>
                <div className="flex gap-1 md:text-lg">
                    <p className="text-pink-500" ><i className="fa-solid fa-heart"></i></p>
                    <p className="text-pink-500"><i className="fa-solid fa-heart"></i></p>
                    <p className="text-pink-500"><i className="fa-solid fa-heart"></i></p>
                    <p className="text-pink-500"><i className="fa-solid fa-heart"></i></p>
                    <p className="text-pink-500"><i className="fa-regular fa-heart"></i></p>
                </div>
                <p className="font-semibold md:text-lg">&#8377; 599/-</p>
                <p className="bg-pink-600 text-center text-white font-bold cursor-pointer md:text-lg">Order Now</p>
            </div>
        </div>
    )
}

function Sales() {
    window.onload = function () {
        let fadeSlides = document.querySelectorAll('.fade')
        fadeSlides.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = "1"
                box.style.transition = "opacity 0.5s"
            }, 500 * (index + 1));
        })
    }


    return (
        <div>
            <h1 className="mt-7 md:mt-20 text-center text-xl md:text-4xl font-bold text-pink-700">Collection</h1>
            <div className="m-4 flex flex-wrap md:justify-center items-center px-8 justify-between gap-5 overflow-hidden" style={{ fontSize: '9px' }}>
            <Card value={saleImage1}></Card>
            <Card value={saleImage2}></Card>
            <Card value={saleImage4}></Card>
            <Card value={saleImage5}></Card>
            <Card value={saleImage6}></Card>
            <Card value={saleImage7}></Card>
            <Card value={saleImage8}></Card>
            <Card value={saleImage9}></Card>
            <Card value={saleImage10}></Card>
            <Card value={saleImage11}></Card>
            </div>
        </div>
    )
}


export default Sales