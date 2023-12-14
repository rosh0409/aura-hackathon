import { React, useEffect, useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import { motion } from "framer-motion";
// import { data } from "../data";
// import toast from "react-hot-toast";
import axios from "axios";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TrackExpense = () => {
  const [expense, setExpense] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await axios.get("/api/expense/fetchExpense", {
      withCredentials: true,
    });
    console.log(data);
    setExpense(data.expense);
    // setCategory(data.expense);
  }
  const createHandleMenuClick = (menuItem) => {
    // console.log(menuItem);
    // console.log(expense);
    // let category = [];
    // if (menuItem === "All") {
    //   category = expense;
    //   setExpense(category);
    // } else {
    //   category = expense.filter((exp) => exp.category === menuItem);
    //   console.log(category);
    //   setExpense(category);
    // }
    setFilter(menuItem);
  };

  const filterExpense = (expense) => {
    if (filter === "All" || filter === "") return expense;
    if (expense.category === filter) return expense;
  };
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-greyish-ig">
      <div className="pt-14 sticky">
        <Dropdown>
          <MenuButton className="px-4 py-1 flex items-center bg-lime-400 rounded-md">
            <FilterListOutlinedIcon /> filters
          </MenuButton>
          <Menu className="bg-gray-100 py-1 px-3 rounded-md">
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("All")}
            >
              All
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Education")}
            >
              Education
              <hr />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Vacation")}
            >
              Vacation
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Grocery")}
            >
              Grocery
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Medical")}
            >
              Medical
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Traveling")}
            >
              Travelling
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Vehical")}
            >
              Vehical
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Electricity")}
            >
              Electricity
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Entertainment")}
            >
              Entertainment
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Subscription")}
            >
              Subscription
              <hr className="h-1" />
            </MenuItem>
            <MenuItem
              className="ml-2 my-3"
              onClick={() => createHandleMenuClick("Home rent")}
            >
              Home rent
              <hr className="h-1" />
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>

      {expense.length > 0 ? (
        <>
          <main className=" h-screen  w-4/5">
            <div className="py-16 md:ml-28 drop-shadow-lg ml-4"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center drop-shadow-lg w-10/12 md:mx-20 mx-4 py-10 bg-white rounded-md"
            >
              <div className="w-1/5">
                <h2 className="text-center text-lg mb-6">Name</h2>
                {expense.length > 0 ? (
                  expense.filter(filterExpense).map((data) => {
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
              <div className="w-1/5">
                <h2 className="text-center text-lg mb-6">Categories</h2>
                {expense.length > 0 ? (
                  expense.filter(filterExpense).map((data) => (
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
              <div className="w-1/5">
                <h2 className="text-center text-lg mb-6">Date</h2>
                {expense.length > 0 ? (
                  expense.filter(filterExpense).map((data) => {
                    return (
                      <>
                        <p className="text-center mb-4" key={data.e_id}>
                          {new Date(data.format_date).getDate() +
                            "/" +
                            (new Date(data.format_date).getMonth() + 1) +
                            "/" +
                            new Date(data.format_date).getFullYear()}
                        </p>
                        <hr className="mx-8" />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div className="w-1/5">
                {" "}
                <h2 className="text-center text-lg mb-6 ">Cost</h2>
                {expense.length > 0 ? (
                  expense.filter(filterExpense).map((data) => {
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
              <div className="w-1/5">
                {" "}
                <h2 className="text-center text-lg mb-6 ">Remove</h2>
                {expense.length > 0 ? (
                  expense.filter(filterExpense).map((data) => {
                    return (
                      <div key={data.e_id} className="mb-4 ml-16">
                        <DeleteOutlineIcon color="red" />
                        <br />
                      </div>
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
          <h1 className="text-xl font-bold text-green-500">No Expense Found</h1>
        </>
      )}
    </section>
  );
};

export default TrackExpense;
