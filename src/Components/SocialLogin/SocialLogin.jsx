import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";






const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
   

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
         /* {   const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }} */
            navigate('/dashboard')
    
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