import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../FormSection/FormSection";
import ResumePreview from "../ResumePreview/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import useGetResume from "@/useHooks/useResume";

function EditResume() {
  const params = useParams();
  const { fetchResumebyResumeId } = useGetResume();

  // console.log(fetchResumebyResumeId(params.resumeId));

  const [resumeInfo, setResumeInfo] = useState(async () => {
    const { status, resume } = await fetchResumebyResumeId(params.resumeId);

    // console.log(status, resume);
    return resume;
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, resume } = await fetchResumebyResumeId(params.resumeId);

    // console.log(status, resume);
    setResumeInfo(resume);
  };

  // console.log(resumeInfo);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-10">
        <FormSection />
        <div className="">
          <h2 className="mb-4 text-center text-lg ">Resume Preview</h2>
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
