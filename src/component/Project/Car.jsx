import CarImg from '../../assets/car.png'
import { FaGithub } from "react-icons/fa";
const Car = () => {
    return (
        <div>
            <div className="lg:flex gap-5 e-full lg:w-[90%] lg:mx-auto bg-white shadow-lg rounded-xl p-10">
                <img className=' shadow p-3 rounded-xl lg:w-[500px] ' src={CarImg} alt="" />

                <div className="w-full lg:w-[50%] h-full p-4">
                    <h1 className='font-semibold inline-flex items-center justify-center w-full'>Car <span className='text-rose-400 ml-2'>Doctor</span></h1>
                    <p className='text-center h-full text-sm mt-5 lg:text-base text-gray-700 font-medium'>
                    I developed a Car Doctor website using the MERN stack, Firebase, and JWT for authentication. The website includes an admin dashboard and a user dashboard. Users can register, booing servicer and track their booing service. Admins have additional privileges, such as managing users and Service. The website is mobile responsive and securely stores user data in MongoDB. It showcases my skills in front-end development, Firebase integration, JWT security, and mobile responsiveness.</p>
                    <div className="flex mt-10 w-full justify-center items-center gap-4 font-bold ">
                        <h1 className=' bg-gray-50 shadow-md rounder-md  p-2'>React</h1>
                        <h1 className=' bg-gray-50 shadow-md rounder-md  p-2'>Tailwind CSS</h1>
                    </div>
                    <div className=" mt-10">
                        <div className='space-y-3 lg:flex gap-4 items-center lg:justify-center'>
                            <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://github.com/MuhammadSaikat25/car-doctor-client">Front End 
                                <span>
                                    <FaGithub size={30}></FaGithub>
                                </span>
                            </a>
                            <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://github.com/MuhammadSaikat25/car-doctor-server">Back End 
                                <span>
                                    <FaGithub color='blue' size={30}></FaGithub>
                                </span>
                            </a>
                            <a className='inline-flex items-center gap-2' target='_blank' title='Front end' href="https://car-doctor-61feb.web.app/">Live link
                                <span>
                                    <FaGithub size={30}></FaGithub>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Car;