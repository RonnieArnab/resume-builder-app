import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <h2 className="font-bold text-lg">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h2>
        <h2 className="text-sm">{resumeInfo.email}</h2>
        <a
          target="_blank"
          className="text-sm font-normal"
          href={resumeInfo.githubLink}>
          Github
        </a>
      </div>
      <div className="text-right">
        <h2 className="text-sm">Email: {resumeInfo.email}</h2>
        <h2 className="text-sm">Mobile: {resumeInfo.phone}</h2>
        <a
          target="_blank"
          className="text-sm font-normal"
          href={resumeInfo.LinkedinLink}>
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default PersonalDetailPreview;
