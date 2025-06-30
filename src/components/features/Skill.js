import React, { useEffect, useState } from "react";
import { firebaseDataMapping, firebaseQuery } from "../../helper/GlobalService";
import { onSnapshot } from "firebase/firestore";
import useModal from "../../hooks/useModal";
import SkillDetails from "../dialogs/SkillDetails";
import Circle from "../ui/Circle";

export const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { setDialog } = useModal();

  useEffect(() => {
    const data = Array(12).fill(0);
    setSkills(data);
    getSkills();
  }, []);

  const getSkills = () => {
    const q = firebaseQuery("skills");
    onSnapshot(q, (querySnapshot) => {
      setSkills(firebaseDataMapping(querySnapshot));
    });
    setLoading(false);
  };

  const onSkillDetails = (e, data) => {
    setDialog(<SkillDetails data={data} />);
  };

  const Skill = ({ data }) => {
    return (
      <div
        className="flex flex-col items-center justify-center mb-3"
        onClick={(e) => onSkillDetails(e, data)}
      >
        <div className="relative">
          <svg
            height="100"
            width="100"
            className={`relative -rotate-90 ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            <Circle
              size="sm"
              className={`stroke-neutral-200 dark:stroke-neutral-700 ${
                isLoading ? "fill-neutral-700" : "fill-none"
              }`}
            />
            <Circle
              size="sm"
              hasStroke
              className={`${
                isLoading ? "fill-neutral-700 stroke-neutral-700" : "fill-none"
              }`}
              stroke={data?.color}
              strokeDashoffset={`calc(625px - (250px * ${data?.value}) / 100)`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {!isLoading ? (
              <img
                width="45px"
                height="45px"
                src={data?.icon}
                alt=""
                loading="lazy"
              />
            ) : (
              <div className="w-11 h-11"></div>
            )}
          </div>
        </div>
        {!isLoading && (
          <span className="sm:text-base text-sm">{data?.name}</span>
        )}
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 gap-2">
      {skills?.map((item, index) => (
        <div key={index} className="basis-1/3 items-center justify-center">
          <Skill data={item} />
        </div>
      ))}
    </div>
  );
};
