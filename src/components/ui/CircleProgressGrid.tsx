import { useCallback, useEffect, useState } from "react";
import SkillDetails from "../dialogs/SkillDetails";
import { RoundedProgressbar } from "./RoundedProgressbar";
import { useDialog } from "@/hooks/useDialog";
import Dialog from "./Dialog";

interface CircleProgressGridProps {
  features?: string;
  // add other props as needed
}

export const CircleProgressGrid = ({ features }: CircleProgressGridProps) => {
  const [skills, setSkills] = useState(Array(12).fill(0));
  const [isLoading, setLoading] = useState(true);
  const { isOpen, openDialog, closeDialog, dialogData } = useDialog<{
    message: string;
  }>();

  const getData = useCallback(async () => {
    const res = await fetch(`/api/${features}?orderBy=value`);
    const json = await res.json();

    setSkills(json.data);
    setLoading(false);
  }, [features]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {skills?.map((item, index) => (
        <RoundedProgressbar
          key={index}
          data={item}
          isLoading={isLoading}
          onDetails={() => openDialog({ data: item })}
        />
      ))}
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <SkillDetails data={dialogData} />
      </Dialog>
    </div>
  );
};
