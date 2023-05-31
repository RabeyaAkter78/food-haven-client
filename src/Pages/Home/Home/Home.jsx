
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Teatimonials/Testimonials";
import { Helmet } from 'react-helmet-async';
import Call from "./Call/Call";
import ChefRecommends from "./ChefRecommends/ChefRecommends";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Haven | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <ChefRecommends></ChefRecommends>
            <FeaturedItems></FeaturedItems>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;