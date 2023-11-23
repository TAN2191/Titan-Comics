import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onSubmitClick } from "../redux/comicPanelSlice";
import { ToastContainer } from "react-toastify";

export default function Navbar() {
    return <>
        <ToastContainer />
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.png" class="h-16" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Titan Comics</span>
                </a>
                <div class="block w-auto" id="navbar-default">
                    <ul class="font-medium flex p-2 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-900 dark:border-gray-900">

                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <li>
                                <Link to="/" class="block py-2 px-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            </span>
                        </button>                        
                        
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <li>
                                <Link to="/comic-strip" class="block py-2 x-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Create
                                </Link>
                            </li>
                            </span>
                        </button>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>;
}