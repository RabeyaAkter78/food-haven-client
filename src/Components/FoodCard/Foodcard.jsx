import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCarts from "../../Hoocks/UseCarts";

const Foodcard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;

    const { user } = useContext(AuthContext);
    const [, refetch] = UseCarts();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {

            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            // console.log(cartItem);

            fetch('http://localhost:5000/carts', {
             method:'POST',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number og the cart
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Food Added On The Crt',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login To Order The Food',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4"> $ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;