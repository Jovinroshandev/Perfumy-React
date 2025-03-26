import categoryHeaderImage from "../assets/image/perfume1.png"
import BalloonImage from "../assets/image/balloon2.png"

function Category(){
    return(
        <div className="flex m-4 pt-5 md:pt-10 items-center justify-center text-center">
            <div className="w-28 md:w-72">
                <img src={categoryHeaderImage} alt="" />
            </div>
            <div>
                <div className="md:flex gap-2 justify-center text-xl md:text-4xl font-bold">
                    <h2>Explore The Beauty of</h2>
                    <h2>Being <span className="text-pink-700" style={{fontFamily:"cursive"}}> Magical</span></h2>
                </div>
                <p className="text-xs mt-3 md:mt-5 w-52 md:w-auto md:text-xl md:text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere expedita obcaecati voluptatum exercitationem. Qui, ipsum!</p>
            </div>
            <div className="w-28 md:w-72">
                <img src={BalloonImage} alt="" />
            </div>
        </div>
    )
}

export default Category