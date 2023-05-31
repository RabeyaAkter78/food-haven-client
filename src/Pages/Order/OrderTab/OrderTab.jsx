import Foodcard from "../../../Components/FoodCard/Foodcard";

const OrderTab = ({items}) => {
    // console.log(items)
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                items.map(item => <Foodcard
                    key={item._id}
                    item={item}
                ></Foodcard>)
            }
        </div> 
    );
};

export default OrderTab;