import { FaTrash } from "react-icons/fa";
import UseCarts from "../../../Hoocks/UseCarts";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = UseCarts();
    console.log(cart);

    // how does reduce work:
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,
                    {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Food Haven | My Cart</title>
            </Helmet>
            <div className="uppercase flex justify-evenly font-semibold h-[40px] items-center">
                <h2>Total Items:{cart.length}</h2>
                <h2>Total Price:{total}</h2>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>

            {/* table */}

            <div className="overflow-y-auto w-full mt-10 h-80">
                <table className="table w-full">
                    {/* head  */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                <td>
                                    <div className="text-sm font-bold ">& {item.price}</div>
                                </td>
                                <th>
                                    {/* <button className="btn btn-ghost font-bold btn-md text-white bg-red-600"><FaTrash></FaTrash></button> */}

                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost font-bold btn-md text-white bg-red-600"><FaTrash></FaTrash></button>
                                </th>

                            </tr>
                        )}



                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyCart;