import Banner from "../Banner/Banner";
import CallUS from "../CallUS/CallUS";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FoodRecommend from "../FoodRecommend/FoodRecommend";
import HeroSection from "../HeroSection/HeroSection";
import PopularManu from "../PopularManu/PopularManu";
import Review from "../Review/Review";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Eclipse Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <HeroSection></HeroSection>
            <PopularManu></PopularManu>
            <CallUS></CallUS>
            <FoodRecommend></FoodRecommend>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;