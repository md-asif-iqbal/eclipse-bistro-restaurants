import shefs from "../../../assets/home/chef-service.jpg"

const HeroSection = () => {
    return (
        <div className="mt-3 sm:mt-5 md:mt-8 lg:mt-10 xl:mt-14">
            <div
                className="relative flex justify-center items-center lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${shefs})` }}
                >
                <div className="bg-white bg-opacity-90 p-8 mt-5 mb-5 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-screen-lg mx-4">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-center mb-4 md:mb-6">
                    Bistro Service
                    </h1>
                    <p className="text-base md:text-lg text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
                </div>
        </div>
    );
};

export default HeroSection;