import {Link, Outlet} from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="p-2 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage"
                           className="flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={"w-8 h-8"} viewBox="0 -960 960 960"
                                 width="24px"
                                 fill="#EAC452">
                                <path
                                    d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35H560Zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80H280Z"/>
                            </svg>
                        </a>
                        <ul className="items-stretch hidden space-x-3 lg:flex">

                                <li className="flex">

                                    <Link to={"/"}  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">

                                        Home
                                    </Link>
                                </li>



                                <Link to={"/object"}  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">

                                    Object View
                                </Link>

                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="px-5 py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log in
                        </button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        <Outlet/>

        </>

    );
};

export default Header;