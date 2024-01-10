import Car from "./Car";
import JobPortal from "./JobPortal";
import TecHouse from "./TecHouse";

const MyProject = () => {
  return (
    <div id="project" className="bg-[#f6ecec] p-3 py-20 lg:py-28">
      <div className="text-center">
        <h1 className="text-blue-600 font-bold mb-6"> PORTFOLIO</h1>
      </div>
      <JobPortal></JobPortal>
      <Car></Car>
      <TecHouse></TecHouse>
    </div>
  );
};

export default MyProject;
