import { useCallback, useEffect, useState } from "react";
import SkillDetails from "../dialogs/SkillDetails";
import { CircleProgress } from "./CircleProgress";
import { useDialog } from "@/hooks/useDialog";
import Dialog from "./Dialog";
import { Skill } from "@/types/Skill";

interface CircleProgressGridProps {
  features?: string;
  data?: any[];
  isLoading: boolean;
  // add other props as needed
}

export const CircleProgressGrid = ({
  features,
  data,
  isLoading,
}: CircleProgressGridProps) => {
  // const [skills, setSkills] = useState(Array(12).fill(0));
  const { isOpen, openDialog, closeDialog, dialogData } = useDialog<Skill>();

  // const getData = useCallback(async () => {
  //   const res = await fetch(`/api/${features}?orderBy=value`);
  //   const json = await res.json();

  //   setSkills(json.data);
  //   setLoading(false);
  // }, [features]);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1">
      {data?.map((item, index) => (
        <CircleProgress
          key={index}
          data={item}
          isLoading={isLoading}
          onDetails={() => openDialog({ data: item })}
        />
      ))}
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        {dialogData && <SkillDetails data={dialogData} />}
      </Dialog>
    </div>
  );
};
