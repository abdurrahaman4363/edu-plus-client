import { Navigate, useLocation } from "react-router";
// import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    // const { user, loading } = useAuth();
    // const { user } = useAuth();
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(user,'private route user');

    if(loading){
        return <progress className="progress w-56 text-center mt-10"></progress>
    }


    if (user) {
        return children;
    }

 
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;