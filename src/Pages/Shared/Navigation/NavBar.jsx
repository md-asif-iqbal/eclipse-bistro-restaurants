import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navOptions =
                    <>
                    <li className="hover:text-yellow-400"><Link to='/'>Home</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/contact'>Contact Us</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/menu'>Our Menu</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/shop'>Our Shop</Link></li>
                    <li className="flex justify-center items-center gap-2"><Link to='/login' className="hover:text-yellow-400 ">Login</Link></li>
                    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navOptions}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Eclipse Bistro</a>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="justify-center items-center  menu-horizontal md:gap-6 xl:gap-10  px-1 uppercase font-bold hover:bg-transparent cursor-pointer">
                    <li className="hover:text-yellow-400"><Link to='/'>Home</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/contact'>Contact Us</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/menu'>Our Menu</Link></li>
                    <li className="hover:text-yellow-400"><Link to='/shop'>Our Shop</Link></li>
            
                    <li className="flex justify-center items-center gap-2"><Link to='login' className="hover:text-yellow-400 ">
                    Login</Link> <IoMdContact size={35}/></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default NavBar;