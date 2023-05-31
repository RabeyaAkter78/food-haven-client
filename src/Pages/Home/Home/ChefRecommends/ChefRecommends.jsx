import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import pizza from "../../../../assets/menu/pizza-bg.jpg"
import salad from "../../../../assets/menu/salad-bg.jpg"
import soup from "../../../../assets/menu/soup-bg.jpg"
const ChefRecommends = () => {
    return (
        <div className="mt-28 mb-14">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"chefs recommends"}
            ></SectionTitle>

            <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pizza} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={soup} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soup</h2>
                        <p>Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={salad} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;