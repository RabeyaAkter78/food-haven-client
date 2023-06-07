import { FaUtensils, FaHamburger, FaHome, FaRegBookmark, FaWallet, FaBook, FaUsers, FaShoppingCart, FaCalendar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../Hoocks/UseCarts";
import UseAdmin from "../Hoocks/UseAdmin";

const DashBoard = () => {
    const [cart] = UseCarts();

    // TODO: load data from the server to have dynamic isAdmin based on data:
    // const isAdmin = true;
    const [isAdmin] = UseAdmin();

    return (
        <div className="drawer drawer-mobile ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054] text-black">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashBoard/userHome'><FaHome></FaHome>Admin Home</NavLink></li>

                            <li><NavLink to='/dashBoard/reservations'><FaUtensils></FaUtensils> Add Items</NavLink></li>

                            <li><NavLink to='/dashBoard/paymentHistory'><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to='/dashBoard/paymentHistory'><FaBook></FaBook> Manage Bookings</NavLink></li>

                            <li><NavLink to='/dashBoard/allUsers'><FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashBoard/userHome'><FaHome></FaHome>User Home</NavLink></li>

                            <li><NavLink to='/dashBoard/userHome'><FaCalendar></FaCalendar>Reservations</NavLink></li>

                            <li><NavLink to='/dashBoard/userHome'><FaCalendar></FaCalendar>Payment History</NavLink></li>

                            <li><NavLink to='/dashBoard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>

                            </NavLink></li>
                        </>
                    }


                    {/* Sidebar content here */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHamburger></FaHamburger> OUR MENU</NavLink></li>
                    <li><NavLink to="/order/pizza"><FaRegBookmark></FaRegBookmark> ORDER FOOD</NavLink></li>
                  


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;