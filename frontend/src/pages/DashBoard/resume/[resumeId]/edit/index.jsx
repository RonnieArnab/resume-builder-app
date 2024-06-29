import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import useGetResume from "@/useHooks/useResume";

function EditResume() {
  const params = useParams();
  const { fetchResume } = useGetResume();

  const [resumeInfo, setResumeInfo] = useState(async () => {
    const resumeData = await fetchResume(params.resumeId);
    return resumeData;
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resumeData = await fetchResume(params.resumeId);
    setResumeInfo(resumeData);
  };

  console.log(resumeInfo);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
