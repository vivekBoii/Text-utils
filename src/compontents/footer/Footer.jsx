import React from 'react'

function Footer(props) {
  return (
    <>
      <footer className={props.mode?"bg-[#1C1A1C] text-white px-4 md:px-10":"bg-[#f2a8c2] text-black px-4 md:px-10"}>
        <div className={props.mode?"w-full mx-auto max-w-screen-xl py-8 md:flex md:items-center md:justify-between text-white":"w-full mx-auto max-w-screen-xl py-8 md:flex md:items-center md:justify-between text-black"}>
          <span className="text-sm sm:text-center">© 2023 <a className='text-blue-700 hover:underline' href="https://github.com/vivekBoii" >VivekBoii™ </a>  All Rights Reserved.
          </span>
          <ul className="flex justify-center flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Contact</a>
              </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer