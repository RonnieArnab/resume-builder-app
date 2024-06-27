import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { BrainIcon, Loader2 } from "lucide-react";
function SummaryForm({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState();

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Details Updated",
        description: "Summary Deatils Updated",
      });
      enableNext(true);
    }, 3000);
  };

  useEffect(() => {
    summery &&
      setResumeInfo(() => ({
        ...resumeInfo,
        summery: summery,
      }));
  }, [summery]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              type="button"
              variant="outline"
              className="border-primary text-primary flex gap-2">
              <BrainIcon className="h-5 w-5" /> Generate AI
            </Button>
          </div>
          <Textarea
            required
            className="mt-3"
            value={summery}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button variant="" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SummaryForm;
