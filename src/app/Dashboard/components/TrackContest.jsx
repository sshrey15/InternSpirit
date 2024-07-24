"use client";
import React, { useState } from "react";
import Image from "next/image";

const itemsPerPage = 6;

export const collegeIdMap = {
  123: "gec.png",
  321: "pcce.png",
  231: "dbce.png",
  132: "rit.jpg",
  232: "aitd.png",
};

const TrackContest = ({ competitions }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(competitions.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const competitionsOnPage = competitions.slice(startIndex, endIndex);

  return (
    <div>
      <ul className="list-none p-2 ml-72 grid grid-cols-2 gap-2">
        {competitionsOnPage &&
          competitionsOnPage.map((comp) => {
            const currentDate = new Date();
            const startDate = new Date(comp.startDate);
            const endDate = new Date(comp.endDate);
            // Calculate the total duration of the contest and how much of it has passed
            const totalDuration =
              new Date(comp.endDate) - new Date(comp.startDate);
            let passedDuration;

            if (currentDate < startDate) {
              passedDuration = 0;
            } else if (currentDate > endDate) {
              passedDuration = totalDuration;
            } else {
              passedDuration = currentDate - startDate;
            }

            // Calculate the percentage of the contest that has been completed
            const completedPercentage = Math.min(
              100,
              (passedDuration / totalDuration) * 100
            );

            return (
              <li
                key={comp.id}
                className="mb-4 p-4 border rounded shadow relative flex flex-col justify-between"
              >
                <div>
                  {currentDate >= startDate && currentDate <= endDate && (
                    <span className="text-red-500 font-bold absolute top-0 right-0 m-2 animate-pulse">
                      • LIVE
                    </span>
                  )}

                  <div className="mb-4 flex gap-2">
                    <Image
                      src={`/logos/${collegeIdMap[comp.collegeId]}`}
                      width={70}
                      height={70}
                      alt="college logo"
                    />
                    <div>
                      <h2 className="font-bold text-xl mb-2">{comp.name}</h2>
                      <p className="text-gray-700 text-base">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end border-t pt-4">
                  <p className="text-lg rounded font-bold text-black">
                    🏆 ₹{comp.prize} + Rewards
                  </p>
                  <p className="text-sm font-semibold text-gray-700 ml-4">
                    🎟️ Entry Fee: {comp.entryFee}
                  </p>
                </div>
                <div className="w-full bg-gray-100 mt-4 rounded">
                  <p className="text-sm font-semibold rounded text-gray-700">
                    Contest Progress
                  </p>
                  <div
                    style={{ width: `${completedPercentage}%` }}
                    className="h-2 bg-green-500 rounded border border-green-600 "
                  ></div>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="flex justify-center ml-72">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-l ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`px-4 py-2 border-t border-b ${
              pageNum === currentPage
                ? "text-blue-500"
                : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-r ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrackContest;
