import buildingImg from "../../assets/building.png";
import { FaGithub } from "react-icons/fa";
const Building = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mx-auto lg:w-[90%] shadow-lg rounded-xl bg-white p-4 mb-10">
      <img
        className=" shadow p-3 object-fill rounded-xl lg:w-[500px] "
        src={buildingImg}
        alt="image"
      />

      <div className="w-fit  h-full p-4 ">
        <h1 className="text-center font-bold">
          <span className="text-blue-600">Building</span> Management
        </h1>
        {/* ----------------------------- */}
        <p className="text-center h-full text-sm mt-5 lg:text-base text-gray-700 font-medium">
          I developed a Building Management website using the MERN stack,
          Firebase, and JWT for authentication Payment method. There is three
          role admin user and member. The website includes an admin dashboard
          and a member dashboard . A user can register, can request for booking
          a apartment . Admins have additional privileges, manage member, manage
          booking request, when admin accept any booking request, then user's
          role will be member and admin reject request then user's role still be
          user ,And when admin accept any request then member can access the
          member dashboard.Admin can make announcement. A member can payment for
          her apartment, He can see her all payment history, and can also see
          all announcement has admin make. It showcases my skills in front-end
          development, Firebase integration, JWT security, and mobile
          responsiveness.
        </p>
        {/* ------------------------- */}
        <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-4 mt-4 text-center">
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">React.js</h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">
            Tailwind.css
          </h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">Express.js</h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2 ">Mongobd</h1>
        </div>
        {/* ------------------------ */}
        <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-4 mx-auto ">
          <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
            <a
              target="_blank"
              href="https://github.com/MuhammadSaikat25/BuildingManagement"
            >
              <p className="flex items-center gap-3"><span>Front end</span> <FaGithub></FaGithub></p>
            </a>
          </div>
          <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md mx-auto w-fit text-white">
            <a
              target="_blank"
              href="https://github.com/MuhammadSaikat25/BuildingManagement-server"
            >
              <p className="flex items-center gap-3"><span>Back end</span> <FaGithub></FaGithub></p>
            </a>
          </div>
          <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
            <a
              target="_blank"
              href="https://building-management-744cc.web.app/"
            >
              <p className="flex items-center gap-3">Live link</p>
            </a>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className="flex lg:flex-row justify-center items-center flex-col gap-5 font-semibold mt-4 ">
            <p>Admin-email: smsaikat007@gmail.com </p>
            <p>Admin-pass: 1234567</p>
        </div>
      </div>
    </div>
  );
};

export default Building;
