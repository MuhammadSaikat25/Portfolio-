import CarImg from "../../assets/car.png";
import { FaGithub } from "react-icons/fa";
const Car = () => {
  return (
    <div>
      <div className="lg:flex gap-5 e-full lg:w-[90%] lg:mx-auto bg-white shadow-lg rounded-xl p-10">
        <img
          className=" shadow p-3 rounded-xl lg:w-[500px] "
          src={CarImg}
          alt=""
        />

        <div className="w-full lg:w-[50%] h-full p-4">
          <h1 className="font-semibold inline-flex items-center justify-center w-full">
            Car <span className="text-rose-400 ml-2">Doctor</span>
          </h1>
          <p className="text-center h-full text-sm mt-5 lg:text-base text-gray-700 font-medium">
            I developed a Car Doctor website using the MERN stack, Firebase, and
            JWT for authentication. The website includes an admin dashboard and
            a user dashboard. Users can register, booing servicer and track
            their booing service. Admins have additional privileges, such as
            managing users and Service. The website is mobile responsive and
            securely stores user data in MongoDB. It showcases my skills in
            front-end development, Firebase integration, JWT security, and
            mobile responsiveness.
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-4 mt-4 text-center">
            <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">React.js</h1>
            <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">
              Tailwind.css
            </h1>
            <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">
              Express.js
            </h1>
            <h1 className=" bg-gray-50 shadow-md rounder-md  p-2 ">Mongobd</h1>
          </div>
          {/* ------------------------ */}
          <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-4 mx-auto ">
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/car-doctor-client"
              >
                <p className="flex items-center gap-3">
                  <span>Front end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md mx-auto w-fit text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/car-doctor-server"
              >
                <p className="flex items-center gap-3">
                  <span>Back end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a target="_blank" href="https://car-doctor-61feb.web.app/">
                <p className="flex items-center gap-3">Live link</p>
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row justify-center items-center flex-col gap-5 font-semibold mt-4 ">
            <p>Admin-email: smsaikat000@gmail.com </p>
            <p>Admin-pass: 1234567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
