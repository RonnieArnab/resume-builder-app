import React from "react";

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Skills</h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo.themeColor,
        }}
      />
      <div className="grid grid-cols-4 gap-3 my-4">
        {resumeInfo.skills?.map((skill, index) => (
          <div className="" key={index}>
            <h2 className="text-xs">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
