import { Timestamp } from "firebase/firestore";

const toDate = (timestamp: any): Date | null => {
  if (!timestamp) return null;

  if (typeof timestamp.toDate === "function") {
    // Firestore Timestamp instance
    return timestamp.toDate();
  }

  if (typeof timestamp.seconds === "number") {
    // Serialized Firestore Timestamp
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
  }

  // Already a string or number
  const date = new Date(timestamp);
  return isNaN(date.getTime()) ? null : date;
};

const timestampToDate = (timestamp: Timestamp) => {
  if (!timestamp) return "";
  //   const date = timestamp.toDate();
  const date = toDate(timestamp);
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getYear = (timestamp: Timestamp) => {
  const date = toDate(timestamp);
  return date ? date.getFullYear() : "";
};

const getMonth = (timestamp: Timestamp): number => {
  const date = toDate(timestamp);
  return date ? date.getMonth() + 1 : 1; // Months are zero-based in JavaScript
};

const getOnlyMonthAndYear = (timestamp: Timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

export { timestampToDate, getYear, getMonth, getOnlyMonthAndYear };
