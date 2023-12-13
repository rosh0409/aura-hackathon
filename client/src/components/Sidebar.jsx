import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-1/3 bg-slate-200 lg:block hidden">
      <div className="mt-8">
        <h1 className="text-4xl text-center font-medium">LOGO</h1>
        <p className="text-sm text-center font-normal">
          Acumulate Wealth with us
        </p>
      </div>
      <div className="s">
        <h2 className="text-xl m-8">Our features</h2>
        <div className="flex">
          <div className="ml-8 mr-4 flex flex-col items-center">
            <div className="rounded-full h-3 w-3 bg-idk-blue" />
            <div className="prog-line h-24 w-1 rounded-full" />
            <div className="rounded-full h-3 w-3 bg-idk-blue" />
            <div className="prog-line h-24 w-1 rounded-full" />
            <div className="rounded-full h-3 w-3 bg-idk-blue" />
            <div className="prog-line h-24 w-1 rounded-full" />
            <div className="rounded-full h-3 w-3 bg-idk-blue" />
          </div>
          <div className="s">
            <p className="text-md mb-20">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-md mb-20">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-md mb-20">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-md mb-20">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
