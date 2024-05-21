import { Link, useNavigate } from 'react-router-dom';
import logo_1 from "../../../assets/Images/logo/logo_1.png"
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
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
                    <div className="relative ">
                        <span onClick={toggleDropdown} className='rounded-full cursor-pointer'>
                            <img style={{ height: '30px', width: '30px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                        </span>
                        {isDropdownOpen && (
                            <div className="absolute top-10 right-0 bg-primary text-black rounded-md shadow-md">
                                <ul className='list-none'>
                                    <li className="w-full py-2 px-4 font-bold" onClick={handleLogOut} style={{ whiteSpace: 'nowrap' }}>
                                        Log out
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>



                </>
                    : <button className="btn btn-sm mx-2"><Link to="/login">Login</Link></button>
                }

            </div>

        </div>
    );
};

export default Navbar;