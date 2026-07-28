import type { HeaderContact } from "@/types/features";
import type { ResumeContact } from "@/types/models";

const isEmailContact = (value: string = "", url: string = "") =>
  /@/.test(value) || /^mailto:/i.test(url);

const isPhoneContact = (value: string = "", url: string = "") =>
  /^tel:/i.test(url) || /\+?[\d\s().-]{7,}/.test(value);

const getPhoneContact = (contacts: ResumeContact[] = []) =>
  contacts.find((item) => isPhoneContact(item?.value || "", item?.url || ""));

const getEmailContact = (contacts: ResumeContact[] = []) =>
  contacts.find((item) => isEmailContact(item?.value || "", item?.url || ""));

const getWebsiteContact = (contacts: ResumeContact[] = []) =>
  contacts.find(
    (item) =>
      !isPhoneContact(item?.value || "", item?.url || "") &&
      !isEmailContact(item?.value || "", item?.url || ""),
  );

const getHeaderContacts = (contacts: ResumeContact[] = []): HeaderContact[] => {
  const output: HeaderContact[] = [];
  const phoneContact = getPhoneContact(contacts);
  const emailContact = getEmailContact(contacts);

  if (phoneContact?.value) {
    output.push({ type: "phone", value: phoneContact.value });
  }

  if (emailContact?.value) {
    output.push({ type: "email", value: emailContact.value });
  }

  return output;
};

export {
  getEmailContact,
  getHeaderContacts,
  getPhoneContact,
  getWebsiteContact,
  isEmailContact,
  isPhoneContact,
};
