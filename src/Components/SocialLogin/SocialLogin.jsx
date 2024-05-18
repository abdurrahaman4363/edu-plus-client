import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";






const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";
   

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
     {  /*    {   const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }} 
            console.log(result.user?.password); */}
            navigate(from, { replace: true });
            // navigate('/dashboard')
    
        })
    }

    return (
        <div className="">
            <div className="divider"></div>
            <div className="">
                <button onClick={handleGoogleSignIn} className="btn w-full bg-secondary text-white">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;