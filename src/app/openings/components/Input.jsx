import React from "react";

const Input = () => {
  return (
    <>
      <div className="absolute justify-items-center mx-[15rem] shadow-md">
        <input
          className=" h-12 w-[40rem] p-2"
          type="text"
          placeholder="Type Something"
        />
        <button className=" bg-green-800 text-white h-12 w-20"> Search</button>
      </div>
    </>
  );
};

export default Input;
