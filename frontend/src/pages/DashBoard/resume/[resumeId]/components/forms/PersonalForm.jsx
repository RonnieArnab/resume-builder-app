import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Loader2 } from "lucide-react";
import React, { useContext, useState } from "react";

function PersonalForm({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState();

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  console.log(resumeInfo);

  const onSave = (e) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Details Updated",
        description: "Personal Deatils Updated",
      });
      enableNext(true);
    }, 3000);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div className="">
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              required
              defaultValue={resumeInfo.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              defaultValue={resumeInfo.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeInfo.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;
