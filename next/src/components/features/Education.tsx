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
  data: StepperItem[];
  isLoading?: boolean;
  isMobile: boolean;
};

export const Education = ({
  data,
  isLoading = false,
  isMobile = false,
}: Props) => {
  return (
    <div className="mt-4 mr-0 mb-0 sm:ml-6 pt-1">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          {data.map((item: any, index: number) => (
            <Stepper
              key={item.id ?? index}
              isMobile={isMobile}
              hasLine={index < data.length - 1}
              index={index}
              stepperIndex={`${item.startYear} - ${item.endYear}`}
              heading={item.degree}
              extraHeading={item.stream}
              subHeading={item.institute}
              desc={item.marks}
              link={item?.link}
            />
          ))}
        </>
      )}
    </div>
  );
};
