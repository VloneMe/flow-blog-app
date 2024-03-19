import { Link, Outlet } from "react-router-dom"
import { Container } from "../Container"

import { GoWorkflow } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaPenAlt } from "react-icons/fa";
import { Search } from "../Search";
import { useState } from "react";


export const Navbar = () => {

    const [show, setShow] = useState(false);
  return (
    <>
        <nav className={`z-10 fixed top-0 flex items-center w-full h-[70px] border-b border-grey bg-white`}
        >
            <Container className="flex justify-between w-full items-center"
            >
                <Link to='/'
                        className="flex flex-row p-4"
                >
                    <GoWorkflow className="size-10"
                    />
                    <span className="font-bold"
                    >Flow</span>
                </Link>

                

                <div className="flex items-center md:gap-6 ml-auto space-x-2"
                >
                    <div>
                        { show && <Search />}

                        {/* Show on response */}
                        { !show &&
                        (<IoSearchOutline    onClick={() => setShow(true)} 
                                            className="size-7 justify-end w-full"
                        />)}
                    </div>

                    <div className="gap-2 items-center hidden md:block flex-row"
                    >
                        <p className="text-lg">Write</p>
                        <FaPenAlt className="size-4"
                        />
                    </div>

                    <Link   to="/sign-in"
                            className="btn-dark text-lg"
                    >
                        Sign In
                    </Link>

                    <Link   to="/sign-up"
                            className="btn-light hidden md:block text-lg    "
                    >
                        Sign Up
                    </Link>
                </div>
            </Container>
        </nav>

        <Outlet />
    </>
  )
}
