
import soup from "../../../assets/menu/soup-bg.jpg"
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const Soups = () => {
    const [menu] = useMenu();
    const soupItems = menu.filter(item => item.category === 'soup');

    return (
        <div>
                        <div className="mt-2 lg:mt-8 lg:mb-8 mb-3">
            <div
            className="relative flex bg-fixed justify-center items-center lg:h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${soup})` }}
            >
            <div className=" bg-black  text-white bg-opacity-60 p-8 mt-5 mb-5 md:p-12 lg:p-20 xl:p-28  rounded-lg shadow-lg max-w-screen-lg w-full  mx-4">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-center mb-4 md:mb-6 uppercase">
                SOUPS
                </h1>
                <p className="text-base md:text-lg text-center uppercase">
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>

            </div>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-40 2xl:px-80 justify-center items-center p-4">
                    {soupItems.map(item => (
                    <MenuItems key={item._id} item={item} />
                    ))}
                </div>
                <div className="flex justify-center items-center mt-8">
                    <button className="btn hover:bg-slate-200 bg-white border-0 border-b-4 border-black btn-wide sm:btn-sm md:btn-md uppercase">
                    ORDER YOUR FAVOURITE FOOD
                    </button>
                </div>
            </section>



    </div>
        </div>
    );
};

export default Soups;