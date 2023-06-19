import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <Link to="https://www.instagram.com/eberbrown/" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">Instagram</Link>
              </li>
              <li>
                  <Link to="https://www.linkedin.com/in/eber-brown/in" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">LinkedIn</Link>
              </li>
              <li>
                  <Link to="https://github.com/eberbrown" target="_blank" rel='noreferrer' className="hover:underline">Github</Link>
              </li>
          </ul>
      </footer>
  )
}
