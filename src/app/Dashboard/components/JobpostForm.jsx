"use client";
import React, { useState } from "react";
import Select from "react-select";
import options from "../../data/options";
import { AiFillRobot } from 'react-icons/ai';


const JobpostForm = () => {
  const [selectedColleges, setSelectedColleges] = React.useState(null);
  const [selectedSkills, setSelectedSkills] = React.useState(null);

  return (
    <form className="space-y-4 p-10 ml-72">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Internship Title"
      />
<div className="relative">
  <textarea
    className="w-full p-2 border border-gray-300 rounded"
    placeholder="Description"
  ></textarea>
  <button className="absolute right-2 bottom-4 bg-purple-600 text-white rounded px-2 py-1 flex items-center">
    <AiFillRobot className="mr-1" />
    Generate  using AI
  </button>
</div>
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Expires At"
      />
      <Select
        isMulti
        name="skills"
        options={options.skills}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={setSelectedSkills}
        value={selectedSkills}
        placeholder="Select skills"
      />

      <Select
        isMulti
        name="colleges"
        options={options.colleges}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={setSelectedColleges}
        value={selectedColleges}
        placeholder="Select colleges"
      />
      <select className="w-full p-2 border border-gray-300 rounded">
        <option value="">Select job type</option>
        <option value="FULL_TIME">Full Time</option>
        <option value="PART_TIME">Part Time</option>
        <option value="INTERNSHIP">Internship</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default JobpostForm;
