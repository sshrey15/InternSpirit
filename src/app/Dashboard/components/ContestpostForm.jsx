"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import options from "../../data/options";
import { AiFillRobot } from "react-icons/ai";
import Loading from "@/app/loading";
import { set } from "lodash";

function CompetitionForm() {
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    prize: "",
    entryFee: "",
    competitionType: "",
    collegeId: [],
  });

  const postData = async (url = "/api/competition", data = {}) => {
    setIsLoading(true);
    console.log(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setIsLoading(false);
    return response.json();
  };

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
  
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);



  const handleCollegeChange = (selectedOptions) => {
    setSelectedColleges(selectedOptions);
    setFormData({
      ...formData,
      collegeId: selectedOptions.map((option) => option.value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("submitting");
    try {
      const data = await postData("/api/competition", {
        ...formData,
        startDate: `${formData.startDate}T00:00:00Z`,
        endDate: `${formData.endDate}T00:00:00Z`,
        collegeId: selectedColleges.map((option) => option.value),
      });
      
      console.log("data le bsdk: ",data);
      console.log("data.message le bsdk: ",data.message);

      if (data.message === "success") {
        setIsLoading(false);
        alert("Competition created successfully");
      } else {
        console.log(data.message);
        alert("Error creating competition");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      console.log("submitted");
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4  ml-72 bg-gray-100 m-2"
    >
      <h1 className="text-2xl font-bold text-center mb-4">Competition Form</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className="relative">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button className="absolute right-2 bottom-4 bg-purple-600 text-white rounded px-2 py-1 flex items-center">
          <AiFillRobot className="mr-1" />
          Generate using AI
        </button>
      </div>

      <input
        type={formData.startDate ? "date" : "text"}
        placeholder="Start Date (mm/dd/yyyy)"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type={formData.endDate ? "date" : "text"}
        placeholder="End Date (mm/dd/yyyy)"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <label className="block">
        <span className="text-gray-700">Prize</span>
        <input
          type="range"
          min="0"
          max="100000"
          step="100"
          name="prize"
          value={formData.prize}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <span>{formData.prize}</span>
      </label>
      {/* <label className="flex items-center text-gray-500">
        <input
          type="checkbox"
          name="isFree"
          checked={formData.isFree}
          onChange={handleChange}
          className="mr-2 leading-tight form-checkbox h-5 w-5 text-blue-500"
        />
        <span className="text-sm">Is the contest free?</span>
      </label> */}
      <input
        type="number"
        placeholder="Entry Fee"
        name="entryFee"
        value={formData.isFree ? 0 : formData.entryFee}
        onChange={handleChange}
        disabled={formData.isFree}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <select
        name="competitionType"
        value={formData.competitionType}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Select Competition Type</option>
        <option value="INDIVIDUAL">Individual</option>
        <option value="TEAM">Team</option>
      </select>
      <Select
        isMulti
        name="colleges"
        options={[{ value: "all", label: "Select All" }, ...options.colleges]}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleCollegeChange}
        value={selectedColleges}
        placeholder="Select colleges"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default CompetitionForm;
