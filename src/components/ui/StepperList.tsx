import React, { useCallback, useEffect, useState } from "react";
import { Stepper } from "../ui/Stepper";
import SkeletonList from "../loader/SkeletonList";

type StepperItem = {
  id?: string;
  stepperIndex: string;
  heading: string;
  extraHeading: string;
  subHeading: string;
  desc: string;
  link: string;
  list?: string[];
};

type Props = {
  isMobile: boolean;
  features: string;
  onDataLoad?: (data: string) => void;
};

export const StepperList = ({ isMobile, features, onDataLoad }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<StepperItem[]>([]);

  const getData = useCallback(async () => {
    const res = await fetch(`/api/${features}`);
    const json = await res.json();
    console.log(json);

    setData(json.data);
    if (onDataLoad) onDataLoad(json.totalExperience ?? "");

    setLoading(false);
  }, [features]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="mt-4 mr-0 mb-0 sm:ml-6 pt-1">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          {data.map((item, index) => (
            <Stepper
              key={item.id ?? index}
              isMobile={isMobile}
              hasLine={index < data.length - 1}
              index={index}
              stepperIndex={item.stepperIndex}
              heading={item.heading}
              extraHeading={item.extraHeading}
              subHeading={item.subHeading}
              desc={item.desc}
              link={item?.link}
              list={item.list}
            />
          ))}
        </>
      )}
    </div>
  );
};
