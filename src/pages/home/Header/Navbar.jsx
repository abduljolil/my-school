import { Link } from "react-router-dom";

 

const Navbar = () => {
    const navlink = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='services'>Services</Link></li>
    <li><Link to='about'>about</Link></li>
    <li><Link to='contact'>contact</Link></li>
    <li><Link to='dashboard'>Dashboard</Link></li>

    
</>
return (
    <div>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold ">
                        {navlink}
                    </ul>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center uppercase">
                    {navlink}

                </ul>
            </div>
            <div className="navbar-end">
     
        
   
            </div>
            
        <Link to='login'><button className="btn btn-outline btn-warning uppercase">Login</button></Link> 
        </div>
    </div>
    );
};

export default Navbar;





