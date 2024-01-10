import CarImg from "../../assets/Job-Portal.png";
import { FaGithub } from "react-icons/fa";
const JobPortal = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mb-9">
      <div className="lg:flex gap-5 lg:mx-auto bg-[#F6ECA9] shadow-lg rounded-xl p-10">
        <img
          className=" shadow p-3 rounded-xl lg:w-[500px] "
          src={CarImg}
          alt=""
        />

        <div className="w-full lg:w-[50%] h-full p-4">
          <h1 className="font-semibold inline-flex items-center justify-center w-full">
            Job<span className="text-rose-400 ml-2">Portal</span>
          </h1>
          <p className="text-center h-full text-sm mt-5 lg:text-base text-gray-700 font-medium">
            I developed a Job Portal website using the MERN stack, Firebase, and
            JWT for authentication. The website includes candidate dashboard and
            an employer dashboard. Candidate can register, any can apply to any
            job but before applying a job candidate have to create his resume ,
            he can also bookmark any job . And Employer can post any job ,
            update any job and also accept or reject apply how has apply on her
            job.It showcases my skills in front-end development, Firebase
            integration, JWT security, and mobile responsiveness.
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-4 mt-4 text-center">
            <h1 className=" bg-gray-50 shadow-md rounded-full py-2 px-10">
              React.js
            </h1>
            <h1 className=" bg-gray-50 shadow-md rounded-full py-2 px-10">
              Tailwind.css
            </h1>
            <h1 className=" bg-gray-50 shadow-md rounded-full py-2 px-10">
              Express.js
            </h1>
            <h1 className=" bg-gray-50 shadow-md rounded-full py-2 px-10">
              Mongodb
            </h1>
          </div>
          {/* ------------------------ */}
          <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-4 mx-auto ">
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/Job-portal"
              >
                <p className="flex items-center gap-3">
                  <span>Front end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md mx-auto w-fit text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/Job-portal-server"
              >
                <p className="flex items-center gap-3">
                  <span>Back end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a target="_blank" href="https://job-portal-80077.web.app/">
                <p className="flex items-center gap-3">Live link</p>
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row justify-center items-center flex-col gap-5 font-semibold mt-4 ">
            <p>Employer: smsaikat000@gmail.com </p>
            <p>pass: 1234567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
