import React from "react";
import { RiLinkM } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ShareJob = () => {
  return (
    <>
      <div className="border-2 border-t-0 border-gray-300 p-4 ">
        <label className="font-semibold text-base">Share this job:</label>
        <div className="grid grid-cols-5 mt-2 gap-2 justify-between">
          <div>
            <button className="flex text-blue-700 text-[10px] md:text-sm font-semibold rounded-sm bg-gray-200 p-2 hover:bg-gray-300">
              <RiLinkM size={20} color="blue" />
              <span className="hidden md:inline">Copy Links</span>
              <span className="md:hidden">Copy</span>
            </button>
          </div>

          <div>
            <button className="rounded-sm bg-gray-200 p-2 hover:bg-gray-300">
              <BsLinkedin size={30} color="blue" />
            </button>
          </div>

          <div>
            <button className="rounded-sm bg-gray-200 p-2 hover:bg-gray-300">
              <FaSquareFacebook size={30} color="blue" />
            </button>
          </div>

          <div>
            <button className="rounded-sm bg-gray-200 p-2 hover:bg-gray-300">
              <FaSquareXTwitter size={30} color="blue" />
            </button>
          </div>

          <div>
            <button className="rounded-sm bg-gray-200 p-2 hover:bg-gray-300">
              <SiGmail size={30} color="blue" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareJob