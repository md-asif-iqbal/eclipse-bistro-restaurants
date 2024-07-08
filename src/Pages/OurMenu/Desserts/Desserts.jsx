import banner4 from "../../../assets/home/chef-service.jpg"
import { useEffect, useState } from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
const Desserts = () => {
    const [ desserts, setDessert]= useState([])
    useEffect( ()=>{
        fetch('menu.json').then(res => res.json()).then(data => {
            const offerItems = data.filter(item => item.category === 'dessert');
            setDessert(offerItems)})
    }, [])
    return (
        <div>
            <div className="">
                <div
                className="relative flex justify-center items-center lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${banner4})` }}
                >
                <div className=" bg-black  text-white bg-opacity-50 p-8 mt-5 mb-5 md:p-12 lg:p-20 xl:p-28   rounded-lg shadow-lg max-w-screen-lg w-full  mx-4">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-center mb-4 md:mb-6 uppercase">
                    DESSERTS
                    </h1>
                    <p className="text-base md:text-lg text-center">
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                </div>
                <section >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-40 2xl:px-80 justify-center items-center p-4">
                    {
                        desserts.map(item => <MenuItems
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

        </div>
    );
};

export default Desserts;