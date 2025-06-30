import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";

const checkDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  }
  return false;
};

const firebaseQuery = (url, orderParams = "isActive") => {
  return query(collection(db, url), orderBy(orderParams, "desc"));
};

const firebaseDataMapping = (querySnapshot) => {
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

const timestampToDate = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getYear = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.getFullYear();
};

const getMonth = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.getMonth() + 1; // Months are zero-based in JavaScript
};

const getLevelName = (value) => {
  if (Number(value) >= 90) return "Expert";
  if (Number(value) >= 70) return "Proficient";
  if (Number(value) >= 50) return "Intermediate";
  if (Number(value) >= 30) return "Beginner";
  return "Novice";
};

const getProjectSector = (value) => {
  switch (value) {
    case 0:
      return "Education";
    case 1:
      return "Health";
    case 2:
      return "Finance";
    case 3:
      return "Technology";
    case 4:
      return "Agriculture";
    case 5:
      return "Telecom";
    case 6:
      return "Transportation";
    case 7:
      return "Government";
    case 8:
      return "Retail";
    case 9:
      return "Manufacturing";
    case 10:
      return "Hospitality";
    case 11:
      return "Entertainment";
    case 12:
      return "Science";
    case 13:
      return "Others";
    default:
      return "Other";
  }
};

const getProjectType = (value) => {
  switch (value) {
    case 0:
      return "Personal";
    case 1:
      return "Professional";
    default:
      return "Other";
  }
};

const getOnlyMonthAndYear = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

function hexToRgba(hex, alpha = 1) {
  // Remove the '#' if present
  hex = hex.replace(/^#/, "");

  // Expand shorthand form (e.g. '03F') to full form ('0033FF')
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export {
  checkDarkMode,
  firebaseQuery,
  firebaseDataMapping,
  timestampToDate,
  getLevelName,
  getProjectSector,
  getProjectType,
  getYear,
  getMonth,
  getOnlyMonthAndYear,
  hexToRgba,
};
