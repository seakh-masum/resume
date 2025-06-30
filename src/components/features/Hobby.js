import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseDataMapping, firebaseQuery } from "../../helper/GlobalService";

export const HobbyList = () => {
  const [hobbies, setHobbies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = Array(6).fill(0);
    setHobbies(data);
    getHobbies();
  }, []);

  const getHobbies = () => {
    const q = firebaseQuery("hobbies");
    onSnapshot(q, (querySnapshot) => {
      setHobbies(firebaseDataMapping(querySnapshot));
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-row flex-wrap justify-start items-center gap-1 sm:gap-2 pl-2">
      {hobbies.map((item, index) => (
        <div
          key={index}
          className={`${
            isLoading && "animate-pulse"
          } dark:bg-neutral-800 bg-neutral-200 sm:text-base text-xs inline-flex py-1 px-3 rounded-2xl items-center relative gap-1 h-8 dark:bg-${
            item.color
          }-100 dark:text-${item.color} min-w-[100px]`}
        >
          <img
            src={item.icon}
            alt=""
            width="16px"
            height="16px"
            className="w-4"
          ></img>
          {item.name}
        </div>
      ))}
    </div>
  );
};
