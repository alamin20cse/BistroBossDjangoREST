import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { FiShoppingCart } from "react-icons/fi";
import useCart from '../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [ ,cart]=useCart();



     const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const link= <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Menu</NavLink></li>
    <li><NavLink to='/order'>Order</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
 


    <li><NavLink to='/'><button className="btn">
      <FiShoppingCart></FiShoppingCart>
   <div className="badge badge-sm badge-secondary">+{cart.length}</div>
</button></NavLink></li>
 
       
    

    </>

  

    return (
       <div className="navbar bg-black/30 fixed z-10   text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">

    {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
        
        
  </div>
</div>
    );
};

export default Navbar;