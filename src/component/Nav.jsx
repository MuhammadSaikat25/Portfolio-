import { Link } from "react-scroll";
import { FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="hidden sticky top-0 bg-white z-10 shadow-md lg:flex lg:justify-between p-7 ">
                <Link to="home" spy={true} smooth={true} offset={-300} duration={500} className="font-bold cursor-pointer lg:text-xl">Saikat <span className="text-rose-500">.dev</span></Link>
                <div className="font-bold lg:flex gap-10 lg:mr-10 lg:text-xl text-gray-600">
                    <Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-300} duration={500}>Home</Link>
                    <Link className="cursor-pointer" to="about" spy={true} smooth={true} offset={-300} duration={500}>About</Link>
                    <Link className="cursor-pointer" to="project" spy={true} smooth={true} offset={-300} duration={500}>Project</Link>
                    <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={-300} duration={500}>Contact</Link>
                </div>
            </nav>
            {
                <span className="flex sticky top-0 z-20 bg-white items-center p-2 justify-between lg:hidden">
                    <Link to="home" spy={true} smooth={true} offset={-300} duration={500} className="font-bold lg:text-xl">Saikat.dev</Link>

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
                        <Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={-300} duration={500}>Home</Link>
                        <Link className="cursor-pointer" to="about" spy={true} smooth={true} offset={-300} duration={500}>About</Link>
                        <Link className="cursor-pointer" to="project" spy={true} smooth={true} offset={-300} duration={500}>Project</Link>
                        <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={-300} duration={500}>Contact</Link>
                    </nav>
                )
            }
        </>
    );
};

export default Nav;

