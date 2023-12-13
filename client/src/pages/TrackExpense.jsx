import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import { motion } from "framer-motion";
import { data } from "../data";

const TrackExpense = () => {
  return (
    <main className="w-screen h-screen bg-greyish-ig">
      <div className="py-16 md:ml-28 drop-shadow-lg ml-4">
        <DropdownMenu />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center drop-shadow-lg md:mx-28 mx-4 py-10 bg-white rounded-md"
      >
        <div className="w-1/4">
          <h2 className="text-center text-lg mb-6">Name</h2>
          {data.map((data) => {
            return (
              <>
                <p className="text-center mb-4" key={data.id}>
                  {data.name}
                </p>
                <hr className="mx-8" />
              </>
            );
          })}
        </div>
        <div className="w-1/4">
          <h2 className="text-center text-lg mb-6">Categories</h2>
          {data.map((data) => {
            return (
              <>
                <p className="text-center mb-4" key={data.id}>
                  {data.categories}
                </p>
                <hr className="mx-8" />
              </>
            );
          })}
        </div>
        <div className="w-1/4">
          <h2 className="text-center text-lg mb-6">Date</h2>
          {data.map((data) => {
            return (
              <>
                <p className="text-center mb-4" key={data.id}>
                  {data.date}
                </p>
                <hr className="mx-8" />
              </>
            );
          })}
        </div>
        <div className="w-1/4">
          {" "}
          <h2 className="text-center text-lg mb-6 ">Cost</h2>
          {data.map((data) => {
            return (
              <>
                <p className="text-center mb-4 text-red-700" key={data.id}>
                  -{data.cost}
                </p>
                <hr className="mx-8" />
              </>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
};

export default TrackExpense;
