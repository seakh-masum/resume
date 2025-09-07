import Image from "next/image";
import React, { useEffect, useState } from "react";
import SkeletonLine from "../loader/SkeletonLine";

export const ContactList = () => {
  const [contacts, setContacts] = useState(Array(4).fill(0));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await fetch("/api/contacts?orderBy=value");
    const { data } = await res.json();
    const data2 = data.map((res: any) => {
      res.icon = res.icon.replace(
        "upload",
        `upload/co_rgb:fff,e_colorize:100,f_png,h_96`
      );
      return res;
    });

    setContacts(data2);
    setLoading(false);
  };

  return (
    <div className="p-6 pt-2 flex flex-col sm:flex-row gap-3 justify-evenly">
      {contacts.map((item, index) => (
        <a
          href={item?.link}
          key={index}
          className="flex flex-row gap-2 align-center"
        >
          {isLoading ? (
            <>
              <div className="rounded-full w-6 h-6 bg-neutral-700"></div>
              {/* <SkeletonLine width="5" /> */}
              <div
                className={`bg-neutral-200 dark:bg-neutral-800 h-4 rounded-xl animate-pulse w-32`}
              ></div>
            </>
          ) : (
            <>
              <div className="bg-black rounded-full p-3">
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ width: 24 + "px", height: 24 + "px" }}
                  loading="lazy"
                  src={item?.icon}
                  alt="contact-icon"
                />
              </div>
              <p className="leading-[48px] text-lg dark:text-neutral-300">
                {item?.userId}
              </p>
            </>
          )}
        </a>
      ))}
    </div>
  );
};
