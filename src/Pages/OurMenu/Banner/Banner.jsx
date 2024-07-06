import banner3 from "../../../assets/menu/banner3.jpg"
const Banner = () => {
    return (
        <div className="">
            <div
                className="relative flex justify-center items-center lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${banner3})` }}
                >
                <div className=" bg-black  text-white bg-opacity-60 p-8 mt-5 mb-5 md:p-12 lg:p-20 xl:p-28  rounded-lg shadow-lg max-w-screen-lg w-full  mx-4">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-center mb-4 md:mb-6 uppercase">
                    OUR MENU
                    </h1>
                    <p className="text-base md:text-lg text-center uppercase">
                    Would you like to try a dish?
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Banner;