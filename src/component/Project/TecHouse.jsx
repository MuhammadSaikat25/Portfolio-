import img from "../../assets/TecHouse.png";
import { FaGithub } from "react-icons/fa";

const TecHouse = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mt-7 shadow-lg rounded-md shadow-gray-400">
      <div className="flex flex-col items-center gap-5 lg:flex-row bg-[#F6ECA9] p-10 ">
        <img src={img} alt="" className="w-[500px] rounded" />
        <div className="">
          <h1 className="font-bold text-center mb-2">
            TecHou<span className="text-[#E36414]">se</span>
          </h1>
          <div className="text-center">
            I developed a E-commerce website using the MERN stack, Firebase, and
            JWT for authentication . There is three role admin user and seller.
            The website includes an admin dashboard and a user dashboard adn
            seller dashboard.A user can register, can by any products and also
            request for being a seller.Admin can manage seller request.After
            accept seller request user will be come a seller.Then he will access
            to seller dashboard. Seller can add any products , update any
            product and delete product . It showcases my skills in front-end
            development, Firebase integration, JWT security, and mobile
            responsiveness.
          </div>
          {/* ------------------------------------- */}
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
          {/* ---------------------------------------- */}
          <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-4 mx-auto ">
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/e-commerce-client"
              >
                <p className="flex items-center gap-3">
                  <span>Front end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md mx-auto w-fit text-white">
              <a
                target="_blank"
                href="https://github.com/MuhammadSaikat25/e-commers-server"
              >
                <p className="flex items-center gap-3">
                  <span>Back end</span> <FaGithub></FaGithub>
                </p>
              </a>
            </div>
            <div className="bg-gray-700 hover:bg-blue-700 duration-300 p-2 rounded-md w-fit mx-auto text-white">
              <a target="_blank" href="https://techouse-670df.web.app/">
                <p className="flex items-center gap-3">Live link</p>
              </a>
            </div>
          </div>
          <div className="w-fit mx-auto mt-3">
            <p className="flex flex-col lg:flex-row lg:gap-3">
              <span>Admin: smsaikat000@gmail.com</span>
              <span>pass: 1234567</span>
            </p>
            <p className="flex mt-4 lg:mt-4 flex-col lg:flex-row lg:gap-3">
              <span>Seller: saikat120@gmail.com</span>
              <span>pass: 1234567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecHouse;
// import img from "../../assets/Job-Portal.png";