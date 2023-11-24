import { Outlet } from "react-router-dom";

const Deshbord = () => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r">
        <h1 className="text-2xl md:text-4xl font-cinzel font-bold  m-5 md:m-0 text-center py-10">
          Sur<span className="text-primary_Colors text-3xl md:text-5xl">v</span>
          ey
        </h1>
      </div>
      <div className="col-span-9 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
