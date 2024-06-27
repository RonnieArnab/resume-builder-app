import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const initialFormDetails = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([initialFormDetails]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newExperienceList = [...experienceList];
    newExperienceList[index][name] = value;
    setExperienceList(newExperienceList);
  };

  const handleRichTextEditor = (event, name, index) => {
    const newExperienceList = [...experienceList];
    console.log(event.target.value, newExperienceList);
    newExperienceList[index][name] = event.target.value;
    setExperienceList(newExperienceList);
  };
  const AddNewExperience = () => {
    setExperienceList([...experienceList, initialFormDetails]);
  };

  const RemoveExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Experience</h2>
      <p>Add your previous experience</p>
      <div className="">
        {experienceList.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-3 my-5 p-3 border rounded-lg">
            <div className="">
              <label className=" text-xs ">Position Title</label>
              <Input
                type="text"
                name="title"
                value={experience.title}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="">
              <label className=" text-xs ">Company Name</label>
              <Input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="">
              <label className=" text-xs ">City</label>
              <Input
                type="text"
                name="city"
                value={experience.city}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="">
              <label className=" text-xs ">State</label>
              <Input
                type="text"
                name="state"
                value={experience.state}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="">
              <label className="text-xs">Start Date</label>
              <Input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="">
              <label className=" text-xs ">End Date</label>
              <Input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(event) => handleChange(event, index)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="col-span-2">
              <RichTextEditor
                onRichTextEditor={(event) =>
                  handleRichTextEditor(event, "workSummery", index)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-primary"
            onClick={AddNewExperience}>
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            className="text-primary"
            onClick={RemoveExperience}>
            - Remove
          </Button>
        </div>

        <Button>Save</Button>
      </div>
    </div>
  );
}

export default Experience;
