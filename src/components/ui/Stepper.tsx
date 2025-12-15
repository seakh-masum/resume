type StepperProps = {
  isMobile: boolean;
  index: number;
  stepperIndex: string;
  hasLine?: boolean;
  link: string;
  heading: string;
  extraHeading?: string;
  subHeading?: string;
  desc?: string;
  list?: string[];
};

export const Stepper = ({
  isMobile,
  index,
  stepperIndex,
  hasLine,
  link,
  heading,
  extraHeading,
  subHeading,
  desc,
  list,
}: StepperProps) => {
  return (
    <div className="flex mb-2">
      <div className="items-center pr-6 flex flex-col">
        <div
          className={`stepper stepper-item text-black flex w-full text-xs bg-primary mb-1 h-9 aspect-square relative rounded-full items-center justify-center sm:aspect-third_one sm:rounded-none leading-8 ${
            !isMobile ? `min-w-[140px] ` : ""
          }`}
        >
          {isMobile ? index + 1 : stepperIndex}
        </div>
        {hasLine && <div className="w-[2px] bg-primary h-full sm:w-1"></div>}
      </div>
      <div className="-mt-1 mx-0 mb-4">
        <p className="mb-5 leading-4 text-base md:text-lg font-medium text-text">
          {heading}{" "}
          {extraHeading && (
            <>
              {" "}
              |{" "}
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-bold"
              >
                {extraHeading}
              </a>{" "}
            </>
          )}
        </p>
        <p className="text-sm mb-3 mt-2 leading-none text-text-light">
          {subHeading}
        </p>
        {desc && (
          <b className="text-md text-text mb-4 leading-3 font-extrabold">
            {desc}
          </b>
        )}
        {!isMobile && list && list.length > 0 && (
          <ul className="pl-8 space-y-2">
            {list.map((item, index) => (
              <li className="list-disc text-text" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
