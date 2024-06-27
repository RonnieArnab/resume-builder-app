import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Education</h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo.themeColor,
        }}
      />
      {resumeInfo.education?.map((education, index) => (
        <div className="my-5" key={index}>
          <h2 className="text-sm font-bold">{education.universityName}</h2>
          <h2 className="text-xs flex justify-between">
            {education.degree} in {education.major}
            <span>
              {education.startDate} - {education.endDate}
            </span>
          </h2>
          <p className="text-xs">{education.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
