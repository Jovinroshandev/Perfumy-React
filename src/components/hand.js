import HandImage from "../assets/image/girl1.png";


function Hand() {
    return (
        <div>
            <div className="md:hidden hand-container">
                <img id="handImage" src={HandImage} alt="Balloon" />
            </div>

        </div>
    );
}

export default Hand;
