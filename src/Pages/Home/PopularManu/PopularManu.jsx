import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularManu = () => {
    const [ menu, setMenu]= useState([])
    useEffect( ()=>{
        fetch('menu.json').then(res => res.json()).then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    }, [])
    return (
        <div className="w-full">
           <section className=" mb-12">
            <SectionTitle 
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}>
                </SectionTitle>
                <div className=" items-center 2xl:ml-28 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
                    {
                        menu.map(item => <MenuItems
                        key={item._id}
                        item = {item}></MenuItems>)
                    }
                </div>
           </section>

        </div>
    );
};

export default PopularManu;