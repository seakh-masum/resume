export const Stepper = (props) => {
  return (
    <div className="flex mb-2">
      <div className="items-center pr-6 flex flex-col">
        <div
          className={`stepper-item text-white flex w-full text-xs bg-blue-500 mb-1 h-8 aspect-square relative rounded-full items-center justify-center sm:aspect-third_one sm:rounded-none leading-8 ${
            !props.isMobile
              ? `min-w-[140px] before:content-[''] before:absolute before:-left-4 before:top-0 before:border-solid before:border-y-transparent before:border-r-blue-500 before:border-y-[16px] before:border-r-[16px]`
              : ""
          }`}
        >
          {props.isMobile ? props.index + 1 : props.stepperIndex}
        </div>
        {props.hasLine && (
          <div className="w-[2px] bg-blue-500 h-full sm:w-1"></div>
        )}
      </div>
      <div className="-mt-1 mx-0 mb-4">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="mb-5 leading-4 text-lg font-medium text-neutral-900 dark:text-white"
        >
          {props.heading}{" "}
          {props?.extraHeading && (
            <>
              {" "}
              | <b>{props.extraHeading}</b>{" "}
            </>
          )}
        </a>
        <p className="text-sm mb-3 mt-2 leading-none text-neutral-500">
          {props.subHeading}
        </p>
        {props?.desc && (
          <b className="text-md mb-4 leading-3 font-extrabold">{props.desc}</b>
        )}
        {!props.isMobile && props?.list?.length > 0 && (
          <ul className="pl-8 space-y-2">
            {props?.list.map((item, index) => (
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
