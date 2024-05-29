import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const { logout, user } = useAuth();
    // console.log(user);
    // console.log(user.email);


    const handleLogout = async () => {
        await logout()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        <li>
                            <Link to={"/"} className="">Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        {!user && (
                            <>
                                <li>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </>
                        )}
                        {user && (
                            <li>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="btn bg-red-500 text-white"
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold">SHOE LAND</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"} className="text-base font-semibold">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="text-base font-semibold">About</Link>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <Link to={"/login"} className="text-base font-semibold">Login</Link>
                            </li>
                            <li>
                                <Link to={"/register"} className="text-base font-semibold">Register</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <Link to={"/dashboard"} className="text-base font-semibold">Dashboard</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {user && (
                    <button
                        onClick={handleLogout}
                        className="btn bg-red-500 text-white hidden lg:block"
                    >
                        Logout
                    </button>
                )}
                <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-black">
                        <img src={user?.photoURL || "/public/placeholder.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
