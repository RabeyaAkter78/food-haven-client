import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import "./FeaturedItems.css"

const FeaturedItems = () => {
    return (
        <div className="featured-items bg-fixed pt-10 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Items"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 px-36 pt-12 bg-slate-500 bg-opacity-60 text-white">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 20,2923</p>
                    <h4 className="text-2xl uppercase">where can i get some?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae officia ipsa quibusdam adipisci assumenda voluptates nam, nihil dolor blanditiis laudantium recusandae! Iste obcaecati quod architecto aperiam eaque dignissimos labore cum?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedItems;