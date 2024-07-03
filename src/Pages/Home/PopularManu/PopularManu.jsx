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
        <div>
            <SectionTitle 
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div>
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item = {item}></MenuItems>)
                }
            </div>

        </div>
    );
};

export default PopularManu;