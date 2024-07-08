import Banner from "../Banner/Banner";
import Desserts from "../Desserts/Desserts";
import Offers from "../Offers/Offers";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";


const OurMenu = () => {
    return (
        <div>
            <Banner/>
            <Offers/>
            <Desserts/>
            <Pizza/>
            <Salads/>
            <Soups/>
        </div>
    );
};

export default OurMenu;