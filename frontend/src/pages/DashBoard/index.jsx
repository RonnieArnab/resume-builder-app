import React, { useState } from "react";
import AddResume from "./components/AddResume";
import ResumeCardItem from "./components/ResumeCardItem";

function DashBoard() {
  const [resumeList, setResumeList] = useState([{ title: "Resume title" }]);
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <div className="font-bold text-3xl">My Resume</div>
      <p>Start creating resume for your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume, index) => (
            <ResumeCardItem key={index} resume={resume} />
          ))}
      </div>
    </div>
  );
}

export default DashBoard;
