import { Link } from 'react-router-dom';
import React from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const NavMenu = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 font-OpenSans bg-violet-950 mb-3 drop-shadow-2xl">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link tag={Link} to="/rank-languages" className="text-lg text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-100 text-3xl antialiased font-semibold tracking-wide" href="#">
                        Rank Stack
                        </Link>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <Bars3Icon className="h-10 w-10 text-white" />
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center " + (navbarOpen ? "flex" : "hidden")} id="example-navbar-danger">
                        <ul className="flex gap-3 flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link tag={Link} to="/rank-languages" className="flex items-center text-2xs uppercase font-bold text-white hover:opacity-75 cursor-pointer" href="#">
                                Rank Languages
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link tat={Link} to="/rank-frameworks" className="flex items-center text-2xs uppercase font-bold text-white hover:opacity-75 cursor-pointer" href="#">
                                    Rank Frameworks
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMenu;