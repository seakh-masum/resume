import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firebaseDataMapping, firebaseQuery } from "../../helper/GlobalService";

export const ContactList = ({ isMobile }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setContacts(Array(4).fill(0));
    getContacts();
  }, []);

  const getContacts = () => {
    const query = firebaseQuery("contacts");
    onSnapshot(query, (querySnapshot) => {
      setContacts(
        firebaseDataMapping(querySnapshot).map((res) => {
          res.iconWhite = res.icon.replace(
            "upload",
            `upload/co_rgb:fff,e_colorize:100,f_png,h_96`
          );
          res.iconBlack = res.icon.replace(
            "upload",
            `upload/co_rgb:000,e_colorize:100,f_png,h_96`
          );
          return res;
        })
      );
    });
    setLoading(false);
  };

  return (
    <div className="p-6 pt-2 flex flex-row justify-evenly">
      {contacts.map((item, index) => (
        <>
          {/* <a
          href={item?.link}
          key={index}
          className={`${
            isLoading ? "animate-pulse" : ""
          } bg-neutral-200 dark:bg-neutral-700 aspect-square rounded-full leading-8 grid place-content-center shadow-[${
            item.color
          }] shadow-lg`}
          style={{
            background: isLoading ? "#404040" : item?.color,
            boxShadow: `0 0 8px  ${item.color}`,
          }}
        >
          <img
            width="48px"
            height="48px"
            className="w-6"
            src={item?.iconWhite}
            alt=""
          />
        </a> */}

          <div className="flex flex-row gap-3 align-center">
            <img
              width="48px"
              height="48px"
              className="w-6"
              src={item?.iconBlack}
              alt=""
            />
            <p className="leading-6">{item?.userId}</p>
          </div>
        </>
      ))}
    </div>
  );
};
