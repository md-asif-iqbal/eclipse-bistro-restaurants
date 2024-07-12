import Banner from "../Banner/Banner";
import Desserts from "../Desserts/Desserts";
import Offers from "../Offers/Offers";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";
import { Helmet } from 'react-helmet-async';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Eclipse Bistro | Menu</title>
            </Helmet>

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