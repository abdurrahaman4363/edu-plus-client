import { Link } from 'react-router-dom';
import logo_1 from "../../../assets/Images/logo/logo_1.png"
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navMenu = <>
        <li className=''><Link to="/">Home</Link> </li>
        {user?.email ? <>

            <li className=''><Link to="/">user ache</Link> </li>
        </>
            : <li className=''> <Link to="/login">user nai</Link> </li>
        }
    </>

    return (
        <div className="navbar fixed z-10  bg-secondary text-white">

            <div className="navbar-start  bg-secondary text-white">

                <div className="dropdown  bg-secondary text-white">


                    <div className="flex flex-row justify-end mr-3">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                            <FaBars />
                        </label>
                    </div>


                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-white rounded w-52">
                        {navMenu}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}

                <Link to='/'>
                    <div className='flex justify-center items-center sm:ml-5'><img style={{ width: '50px', height: '50px' }} src={logo_1} alt="" />
                        <h1 className='text-2xl font-bold text-primary'> EduPlus</h1>
                    </div>

                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                </ul>
            </div>

            <div className="navbar-end">
                {user?.email ? <>

                    <button className="btn btn-sm mx-2" onClick={handleLogOut}>Log out</button>
                </>
                    : <button className="btn btn-sm mx-2"><Link to="/login">Login</Link></button>
                }

            </div>

        </div>
    );
};

export default Navbar;