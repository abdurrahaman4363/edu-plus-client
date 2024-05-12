import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content flex flex-col">
                    {/* Page content here   
           drawer-content flex flex-col items-center justify-center
         */}

                    <div className="flex flex-row justify-end mr-3">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            <FaBars />
                        </label>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Outlet />
                    </div>
                </div>


                <div className="drawer-side mt-16 md:mt-16 lg:mt-0">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4  w-60 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="mb-1">
                            <NavLink to="/dashboard/employee">
                                <FaHome></FaHome>
                                Employee</NavLink>
                        </li>

                        <li className="mb-1">
                            <details className="dropdown">
                                <summary className="">
                                    <FaUsers />
                                    Teachers
                                </summary>
                                <ul className="shadow menu dropdown-content w-48">
                                    <li className="mb-1">
                                        <NavLink to="/dashboard/teachers" className="inline-flex items-center">
                                            Teacher List
                                        </NavLink>
                                    </li>
                                    <li className="mb-1"><a>Add Teacher</a></li>
                                    <li className="mb-1"><a>Teacher Profile</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;