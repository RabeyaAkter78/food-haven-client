import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hoocks/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-16">


            <SectionTitle
                subHeading={"Check It Out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">VIEW FULL MENU</button>
            </div>
        </section>
    );
};

export default PopularMenu;