"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import options from "../../data/options";
import { AiFillRobot } from "react-icons/ai";
import Loading from "@/app/loading";

const JobpostForm = () => {
  const [selectedColleges, setSelectedColleges] = React.useState(null);
  const [selectedSkills, setSelectedSkills] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    expiresAt: "",
    collegeId: [],
    skills: [],
    type: "", // renamed from jobType to type
  });

  const postData = async (url = "/api/jobs", data = {}) => {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleCollegeChange = (selectedOptions) => {
    setSelectedColleges(selectedOptions);
    setFormData({
      ...formData,
      collegeId: selectedOptions.map((option) => String(option.value)),
    });
  };

  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    setFormData({
      ...formData,
      skills: selectedOptions.map((option) => option.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("submitting");

    try {
      const data = await postData("/api/jobs", {
        ...formData,
        expiresAt: `${formData.expiresAt}T00:00:00Z`,
        skills: selectedSkills.map((option) => option.value),
      });

      console.log("DATA", data);

      if (data.message === "success") {
        console.log(data);
        alert("Job Post Successful");
        // You can redirect to a different page here if needed
      } else {
        // Handle error messages from your API
        console.log(data.message);
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
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
      <h1 className="text-2xl font-bold text-center mb-4">Internship Form</h1>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Internship Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
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
        type="date"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Expires At"
        name="expiresAt"
        value={formData.expiresAt}
        onChange={handleChange}
      />
      <Select
        isMulti
        name="skills"
        options={options.skills}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSkillsChange}
        value={selectedSkills}
        placeholder="Select skills"
      />

      <Select
        isMulti
        name="colleges"
        options={options.colleges}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleCollegeChange}
        value={selectedColleges}
        placeholder="Select colleges"
      />
      <select
        className="w-full p-2 border border-gray-300 rounded"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="">Select job type</option>
        <option value="FULL_TIME">Full Time</option>
        <option value="PART_TIME">Part Time</option>
        <option value="INTERNSHIP">Internship</option>
        <option value="CONTRACT">Contract</option>
        <option value="REMOTE">Remote</option>
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
