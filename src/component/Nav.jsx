import { Link } from "react-scroll";
import { FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="hidden sticky top-0 bg-white z-10 shadow-md lg:flex lg:justify-between p-7 ">
                <h1 className="font-bold lg:text-xl">Saikat.dev</h1>
                <div className="font-bold lg:flex gap-10 lg:mr-10 lg:text-xl text-gray-600">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Project</Link>
                    <Link>Contact</Link>
                </div>
            </nav>
            {
                <span className="flex sticky top-0 z-20 bg-white items-center p-2 justify-between lg:hidden">
                    <h1 className="text-xl font-semibold">Saikat</h1>
                    <span onClick={() => setOpen(!open)}>
                        {
                            open ? <FaTimes size={30}></FaTimes> : <FcMenu size={30}></FcMenu>
                        }
                    </span>
                </span>
            }
            {
                open && (
                    <nav className="text-3xl bg-white z-10 space-y-10 shadow-md font-semibold flex flex-col text-center h-screen md:hidden lg:hidden">
                        <Link className="mt-20">Home</Link>
                        <Link>About</Link>
                        <Link>Project</Link>
                        <Link>Contact</Link>
                    </nav>
                )
            }
        </>
    );
};

export default Nav;

