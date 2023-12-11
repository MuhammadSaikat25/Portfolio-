import buildingImg from "../../assets/building.png";
import { FaGithub } from "react-icons/fa";
const Building = () => {
  return (
    <div className="lg:flex gap-5 e-full lg:w-[90%] lg:mx-auto bg-white shadow-lg rounded-xl p-10 mb-10">
      <img
        className=" shadow p-3 object-cover rounded-xl lg:w-[500px] "
        src={buildingImg}
        alt="image"
      />

      <div className="w-full lg:w-[50%] h-full p-4">
        <h1 className="text-center font-bold">
          <span className="text-blue-600">Building</span> Management
        </h1>
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
        <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-4 mt-4 text-center">
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">React.js</h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">
            Tailwind.css
          </h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2">Express.js</h1>
          <h1 className=" bg-gray-50 shadow-md rounder-md  p-2 ">Mongobd</h1>
        </div>
      </div>
    </div>
  );
};

export default Building;
