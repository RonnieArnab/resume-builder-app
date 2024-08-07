import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">
        {resumeInfo.firstName} {resumeInfo.lastName}
      </h1>
      <div className="flex flex-col md:flex-row items-center space-x-2 text-xs">
        <div className="">
          <span>{resumeInfo.phone}</span>
          <span> | </span>
          <a href={`mailto:${resumeInfo.email}`} className="font-normal">
            {resumeInfo.email}
          </a>
          <span> | </span>
        </div>
        <div className="">
          <a
            href={resumeInfo.LinkedinLink}
            target="_blank"
            className=" font-normal">
            Linkedin
          </a>
          <span> | </span>
          <a
            href={resumeInfo.githubLink}
            target="_blank"
            className=" font-normal">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailPreview;
