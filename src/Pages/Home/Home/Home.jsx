import Banner from "../Banner/Banner";
import CallUS from "../CallUS/CallUS";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FoodRecommend from "../FoodRecommend/FoodRecommend";
import HeroSection from "../HeroSection/HeroSection";
import PopularManu from "../PopularManu/PopularManu";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
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