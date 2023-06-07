
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import UseAuth from "./UseAuth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import { AuthContext } from "../Providers/AuthProvider";


const UseCarts = () => {
    const {user,loading} = useContext(AuthContext);
    console.log(user);


    // const [user, loading] = UseAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
    })

    return [cart, refetch]
};

export default UseCarts;