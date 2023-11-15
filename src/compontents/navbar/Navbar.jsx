import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Navbar = (props) => {

    const [disNav,setdisNav] = useState(false);

    // ----------------
    const StyledComponent = styled.div`

        display:block;

        @media (max-width: 768px) {
            display:${disNav?"block":"none"};
        }
    `;
    // ----------------

  return (
    <>
        <nav className={props.mode?"bg-[#1C1A1C] w-full z-20 top-0 left-0":"bg-[#f04984] w-full z-20 top-0 left-0"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className={props.mode?"self-center text-2xl font-semibold whitespace-nowrap text-white":"self-center text-2xl font-semibold whitespace-nowrap text-white"}>TextUtils</span>
                </a>
                <div className="flex md:order-2">
                {/* agar as a props hai toh fat arrow mat laga */}
                    <button type="button" onClick={props.changeMode} className="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">
                        <img className='w-6' style={{display : props.mode ? 'none' : 'block'}} src="./sunny.png" alt="Sun" />
                        <img className='w-6' style={{display : !props.mode ? 'none' : 'block'}} src="./moon.png" alt="Moon" />
                    </button>
                    <button onClick={()=>{setdisNav(!disNav)}} type="button" className={props.mode?"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none text-gray-400 hover:bg-gray-700":"inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-pink-600 focus:outline-none"}>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <StyledComponent className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbarSticky">
                    <ul className={props.mode?"text-white flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-[#1C1A1C] bg-[#1C1A1C] border-gray-700":"flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:bg-[#f04984] text-white border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#f04984] border-pink-700"}>
                        <li>
                            <a href="#" className={props.mode?"block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0":"block py-2 pl-3 pr-4 bg-pink-600 rounded md:bg-transparent md:text-pink-900  md:p-0"}>Home</a>
                        </li>
                        <li>
                            <a href="#" className={props.mode?"block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ":"block py-2 pl-3 pr-4 rounded hover:bg-pink-600 md:hover:bg-transparent md:hover:text-pink-900 md:p-0 "}>About</a>
                        </li>
                        <li>
                            <a href="#" className={props.mode?"block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ":"block py-2 pl-3 pr-4 rounded hover:bg-pink-600 md:hover:bg-transparent md:hover:text-pink-900 md:p-0 "}>Services</a>
                        </li>
                        <li>
                            <a href="#" className={props.mode?"block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ":"block py-2 pl-3 pr-4 rounded hover:bg-pink-600 md:hover:bg-transparent md:hover:text-pink-900 md:p-0 "}>Contact</a>
                        </li>
                    </ul>
                </StyledComponent>
            </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title : 'titlee',
};
