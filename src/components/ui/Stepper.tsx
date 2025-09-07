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
          className={`stepper-item text-white flex w-full text-xs bg-blue-800 mb-1 h-8 aspect-square relative rounded-full items-center justify-center sm:aspect-third_one sm:rounded-none leading-8 ${
            !isMobile
              ? `min-w-[140px] before:content-[''] before:absolute before:-left-4 before:top-0 before:border-solid before:border-y-transparent before:border-r-blue-800 before:border-y-[16px] before:border-r-[16px]`
              : ""
          }`}
        >
          {isMobile ? index + 1 : stepperIndex}
        </div>
        {hasLine && <div className="w-[2px] bg-blue-800 h-full sm:w-1"></div>}
      </div>
      <div className="-mt-1 mx-0 mb-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mb-5 leading-4 text-lg font-medium text-neutral-900 dark:text-white"
        >
          {heading}{" "}
          {extraHeading && (
            <>
              {" "}
              | <b>{extraHeading}</b>{" "}
            </>
          )}
        </a>
        <p className="text-sm mb-3 mt-2 leading-none text-neutral-600 dark:text-neutral-400">
          {subHeading}
        </p>
        {desc && (
          <b className="text-md mb-4 leading-3 font-extrabold">{desc}</b>
        )}
        {!isMobile && list && list.length > 0 && (
          <ul className="pl-8 space-y-2">
            {list.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
