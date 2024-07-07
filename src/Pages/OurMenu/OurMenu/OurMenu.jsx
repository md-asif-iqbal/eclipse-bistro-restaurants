import Banner from "../Banner/Banner";
import Desserts from "../Desserts/Desserts";
import Offers from "../Offers/Offers";
import Pizza from "../Pizza/Pizza";


const OurMenu = () => {
    return (
        <div>
            <Banner/>
            <Offers/>
            <Desserts/>
            <Pizza/>
        </div>
    );
};

export default OurMenu;