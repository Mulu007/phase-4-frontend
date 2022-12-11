import { Link } from "react-router-dom";
//import AddMovie from "./AddMovie"

const crud = () => {
  return (
    <div className="text-white w-1/4 bg-red-300 ml-8 mt-10">
      crud
      <div className="flex flex-col ml-16">
        <div>
          <button className="bg-red-600 py-3 my-6 mt-10 rounded font-bold">
            Add Movie
          </button>
          <Link path="/addMovie"></Link>
        </div>

        <div>
          <button className="bg-red-600 py-3 my-6 mt-10 rounded font-bold">
            Edit Desc
          </button>
        </div>

        <div>
          <button className="bg-red-600 py-3 my-6 mt-10 rounded font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default crud;
