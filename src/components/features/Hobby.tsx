import Image from "next/image";
import { useEffect, useState } from "react";

type Hobby = {
  name?: string;
  icon?: string;
  color?: string;
};

export const HobbyList = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>(Array(6).fill({}));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getHobbies();
  }, []);

  const getHobbies = async () => {
    const res = await fetch("/api/hobbies");
    const { data } = await res.json();

    setHobbies(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-row flex-wrap justify-start items-center gap-1 sm:gap-2 min-h-hobby">
      {hobbies.map((item, index) => (
        // dark:bg-neutral-800
        <div
          key={index}
          className={`${
            isLoading && "animate-pulse"
          } bg-surface sm:text-base text-xs inline-flex py-1 px-3 rounded-xl items-center relative gap-1 h-8 dark:bg-${
            item.color
          }-100 dark:text-white min-w-[100px]`}
        >
          {typeof item.icon === "string" && (
            <Image
              src={item.icon}
              alt="hobby-icon"
              className="w-4"
              width={16}
              height={16}
              loading="lazy"
            />
          )}
          {item.name}
        </div>
      ))}
    </div>
  );
};
