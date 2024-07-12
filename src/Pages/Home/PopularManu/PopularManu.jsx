
import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularManu = () => {
    const [ menu]= useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
            
    return (
        <div className="w-full">
           <section className=" mb-12">
            <SectionTitle 
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}>
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-40 2xl:px-80 justify-center items-center p-4">
                    {
                        popularItems.map(item => <MenuItems
                        key={item._id}
                        item = {item}></MenuItems>)
                    }
                </div>
                <div className="flex justify-center items-center h-full md:mt-8">
                    <button className="btn hover:bg-slate-200 bg-white border-0 border-b-4 border-black btn-wide sm:btn-sm md:btn-md uppercase">
                        View full menu
                    </button>
                </div>
           </section>

        </div>
    );
};

export default PopularManu;