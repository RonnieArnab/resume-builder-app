import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Experience</h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo.themeColor,
        }}
      />

      {resumeInfo.experience?.map((experience, index) => (
        <div className="my-5" key={index}>
          <h2 className="text-sm font-bold">{experience.title}</h2>
          <h2 className="flex justify-between text-xs">
            {experience.companyName}
            {" ,"}
            {experience.city}
            {" ,"} {experience.state}{" "}
            <span>
              {experience.startDate}
              {" - "}
              {experience.currentlyWorking
                ? "Present"
                : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className="text-xs my-2">{experience.workSummery}</p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
