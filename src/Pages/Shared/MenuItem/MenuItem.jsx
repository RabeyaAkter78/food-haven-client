
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div>

            <div className="flex space-x-3">
                <img className="w-[120px]" style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />
                <div>
                    <p className="uppercase">{name}---------</p>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-400">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;