// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// const Navbar = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">lamabooking</span>
//         </Link>
//         {user ? user.username : (
//           <div className="navItems">
//             <button className="navButton">Register</button>
//             <button className="navButton">Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import CustomButton from '../common/CustomButton'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
const NavBar = () => {
    const { user } = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    const currentPath = window.location.pathname
    const isRandomId =
        currentPath.startsWith('/hotels/') &&
        currentPath.length > '/hotels/'.length
    console.log(currentPath)
    const handleLogin = () => {
        window.location.href = '/login'
    }
    const handleRegister = () => {
        window.location.href = '/register'
    }
    return (
        <>
            {currentPath === '/login' ||
            currentPath === '/register' ||
            currentPath === '/booking' ||
            currentPath === '/hotels' ||
            isRandomId ? (
                <></>
            ) : (
                <header className="w-full absolute z-10">
                    <nav className="max-width flex-between padding-x padding-y bg-transparent">
                        {user ? (
                            user.username
                        ) : (
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '15px' }}>
                                    <CustomButton
                                        title="Đăng nhập"
                                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                                        handleClick={handleLogin}
                                    />
                                </div>
                                <div>
                                    <CustomButton
                                        title="Đăng Ký"
                                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                                        handleClick={handleRegister}
                                    />
                                </div>
                            </div>
                        )}
                    </nav>
                </header>
            )}
        </>
    )
}

export default NavBar
