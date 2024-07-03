import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const FoodRecommend = () => {
    const [ menu, setMenu]= useState([])
    useEffect( ()=>{
        fetch('menu.json').then(res => res.json()).then(data => {
            const offerItems = data.filter(item => item.category === 'offered');
            setMenu(offerItems)})
    }, [])
    return (
        <div>
            <SectionTitle 
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}>
                </SectionTitle>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-20 lg:grid-cols-3
             justify-center items-center justify-items-center lg:mb-5">
            {
                menu.map(item => <>
                    <div className="card  glass w-full shadow-md">
                    <figure>
                        <img className="w-full"
                        src={item.image}
                        alt={item.image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-white hover:bg-slate-900 hover:text-yellow-600 px-8 uppercase">Add To Cart</button>
                        </div>
                    </div>
            </div>
                </>)
            }
            </section>
        </div>
    );
};

export default FoodRecommend;