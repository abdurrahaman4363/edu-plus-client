import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/login/signUp.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        // const  name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;

                console.log('created user', user)

                const username = 'rahaman';
                const email = 'abdur.rahaman4363@gmail.com'
                const password = '123456'

                fetch(`https://edu-plus-server.onrender.com/accounts/register/`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({username,email,password})
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/dashboard')
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#27374D] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='my-4 text-center'>Already Have An Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;