
import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const Offers = () => {
    const [menu] = useMenu();
    const offerItems = menu.filter(item => item.category === 'offered');
    return (
        <div className="w-full md:mb-10">
            <SectionTitle subHeading="---Don't miss---"
            heading="TODAY'S OFFER"></SectionTitle>
            <section >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-40 2xl:px-80 justify-center items-center p-4">
                    {
                        offerItems.map(item => <MenuItems
                        key={item._id}
                        item = {item}></MenuItems>)
                    }
                </div>
                <div className="flex justify-center items-center h-full md:mt-8">
                    <button className="btn hover:bg-slate-200 bg-white border-0 border-b-4 border-black btn-wide sm:btn-sm md:btn-md uppercase">
                    ORDER YOUR FAVOURITE FOOD
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Offers;