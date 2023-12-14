import { React, useEffect, useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import { motion } from "framer-motion";
import { data } from "../data";
import toast from "react-hot-toast";
import axios from "axios";

const TrackBudget = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await axios.get("/api/expense/fetchExpense", {
      withCredentials: true,
    });
    console.log(data);
  }
  return (
    <section className="h-screen flex justify-center items-center">
      {expense.length > 0 ? (
        <>
          <main className=" h-screen bg-greyish-ig">
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
                {expense.length > 0 ? (
                  expense.map((data) => {
                    return (
                      <>
                        <p className="text-center mb-4" key={data.e_id}>
                          {data.expName}
                        </p>
                        <hr className="mx-8" />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div className="w-1/4">
                <h2 className="text-center text-lg mb-6">Categories</h2>
                {expense.length > 0 ? (
                  expense.map((data) => (
                    <>
                      <p className="text-center mb-4" key={data.e_id}>
                        {data.category}
                      </p>
                      <hr className="mx-8" />
                    </>
                  ))
                ) : (
                  <>
                    <h1>No expense found</h1>
                  </>
                )}
              </div>
              <div className="w-1/4">
                <h2 className="text-center text-lg mb-6">Date</h2>
                {expense.length > 0 ? (
                  expense.map((data) => {
                    return (
                      <>
                        <p className="text-center mb-4" key={data.e_id}>
                          {data.date}
                        </p>
                        <hr className="mx-8" />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div className="w-1/4">
                {" "}
                <h2 className="text-center text-lg mb-6 ">Saving</h2>
                {expense.length > 0 ? (
                  expense.map((data) => {
                    return (
                      <>
                        <p
                          className="text-center mb-4 text-red-700"
                          key={data.e_id}
                        >
                          -{data.amount}
                        </p>
                        <hr className="mx-8" />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </motion.div>
          </main>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold text-green-500">No Budget Found</h1>
        </>
      )}
    </section>
  );
};

export default TrackBudget;