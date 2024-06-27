import React, { useState } from "react";
import PersonalForm from "./forms/PersonalForm";
import SummaryForm from "./forms/SummaryForm";
import Experience from "./forms/Experience";
import EducationForm from "./forms/EducationForm";
import SkillForm from "./forms/SkillForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button varient="outline" size="sm" className="flax gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2" size="sm">
          {activeFormIndex > 1 && (
            <Button
              className=""
              size="sm"
              onClick={() => {
                setActiveFormIndex(activeFormIndex - 1);
              }}>
              <ArrowLeft />
            </Button>
          )}
          <Button
            className="flex gap-2"
            size="sm"
            disabled={!enableNext}
            onClick={() => {
              setActiveFormIndex(activeFormIndex + 1);
            }}>
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {activeFormIndex == 1 ? (
        <PersonalForm
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeFormIndex == 2 ? (
        <SummaryForm
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeFormIndex == 3 ? (
        <Experience
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : null}

      <EducationForm />
      <SkillForm />
    </div>
  );
}

export default FormSection;
