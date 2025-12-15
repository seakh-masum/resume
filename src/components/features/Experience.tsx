import { Stepper } from "../ui/Stepper";
import SkeletonList from "../loader/SkeletonList";
import { calculateTenure, formatDateRange } from "@/utils";

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
  data: StepperItem[];
  isLoading?: boolean;
  isMobile: boolean;
};

export const Experience = ({
  data,
  isLoading = false,
  isMobile = false,
}: Props) => {
  const mapStepperData = (data: any) => {
    return data.map((item: any) => {
      const tenure = calculateTenure(item.joiningDate, item.releaseDate);
      const dateRange = formatDateRange(item.joiningDate, item.releaseDate);

      return { ...item, tenure, dateRange };
    });
  };

  return (
    <div className="mt-4 mr-0 mb-0 sm:ml-6 pt-1">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          {mapStepperData(data).map((item: any, index: number) => (
            <Stepper
              key={item.id ?? index}
              isMobile={isMobile}
              hasLine={index < data.length - 1}
              index={index}
              stepperIndex={item.tenure}
              heading={item.designation}
              extraHeading={item.company}
              subHeading={item.dateRange}
              desc={item.desc}
              link={item?.link}
              list={item.roles}
            />
          ))}
        </>
      )}
    </div>
  );
};
