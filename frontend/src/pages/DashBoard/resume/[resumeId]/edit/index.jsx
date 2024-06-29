import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
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
