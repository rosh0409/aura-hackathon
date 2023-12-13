import React from "react";

const Input = () => {
  return (
    <div className="border-slate-600 relative border-2 rounded-sm h-12 w-6/12">
      <input
        type="text"
        className="inputText w-11/12 h-10 ml-4 focus:outline-none"
      />
    </div>
  );
};

export default Input;
