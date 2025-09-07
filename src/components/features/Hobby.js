import Image from "next/image";
import { useEffect, useState } from "react";

export const HobbyList = () => {
  const [hobbies, setHobbies] = useState([Array(6).fill(0)]);
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
    <div className="flex flex-row flex-wrap justify-start items-center gap-1 sm:gap-2">
      {hobbies.map((item, index) => (
        <div
          key={index}
          className={`${
            isLoading && "animate-pulse"
          } dark:bg-neutral-800 bg-neutral-200 sm:text-base text-xs inline-flex py-1 px-3 rounded-2xl items-center relative gap-1 h-8 dark:bg-${
            item.color
          }-100 dark:text-${item.color} min-w-[100px]`}
        >
          {item.icon && (
            <Image
              src={item.icon || null}
              alt="hobby-icon"
              className="w-4"
              width={16}
              height={16}
            />
          )}
          {item.name}
        </div>
      ))}
    </div>
  );
};
