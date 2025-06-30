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
          res.icon = res.icon.replace(
            "upload",
            `upload/co_rgb:fff,e_colorize:100,f_png,h_96`
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
          <a
            href={item?.link}
            key={index}
            className="flex flex-row gap-3 align-center"
          >
            <div
              className="bg-black rounded-full p-2
			"
            >
              <img
                width="24px"
                height="24px"
                src={item?.icon}
                alt="contact-icon"
              />
            </div>
            <p className="leading-10 text-lg dark:text-neutral-300">
              {item?.userId}
            </p>
          </a>
        </>
      ))}
    </div>
  );
};
