import logo_1 from "../../../assets/Images/logo/logo_1.png"

const Navbar = () => {
    const navMenu = <>

        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>

    </>
    return (
        <div className="navbar bg-secondary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <div><img style={{ width: '50px', height: '50px' }} src={logo_1} alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm mx-2">Login</a>
                <a className="btn btn-sm ">SingUp</a>
            </div>
        </div>
    );
};

export default Navbar;