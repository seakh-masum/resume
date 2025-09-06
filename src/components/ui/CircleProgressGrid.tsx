import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import SkillDetails from "../dialogs/SkillDetails";
import { RoundedProgressbar } from "./RoundedProgressbar";

interface CircleProgressGridProps {
  features?: string;
  // add other props as needed
}

export const CircleProgressGrid = ({ features }: CircleProgressGridProps) => {
  const [skills, setSkills] = useState(Array(12).fill(0));
  const [isLoading, setLoading] = useState(true);
  const { setDialog } = useModal() as any;

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const res = await fetch(`/api/${features}?orderBy=value`);
    const { data } = await res.json();

    setSkills(data);
    setLoading(false);
  };

  const onSkillDetails = (data: any) => {
    setDialog(<SkillDetails data={data} />);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {skills?.map((item, index) => (
        <RoundedProgressbar
          key={index}
          data={item}
          isLoading={isLoading}
          onDetails={() => onSkillDetails(item)}
        />
      ))}
    </div>
  );
};
