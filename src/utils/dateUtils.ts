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

function formatYearMonth(value: string) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function formatDateRange(startDate: string, endDate: string) {
  const from = formatYearMonth(startDate);
  const to = endDate ? formatYearMonth(endDate) : "Present";

  return `${from} - ${to}`;
}

function calculateTenure(from: string, to?: string): string {
  const [fromYear, fromMonth] = from.split("-").map(Number);
  const [toYear, toMonth] = to
    ? to.split("-").map(Number)
    : [new Date().getFullYear(), new Date().getMonth() + 1];

  let totalMonths = (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  }

  if (months === 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  }

  return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
}

function convertMonthsToYearsMonths(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }

  if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}
type Tenure = {
  joiningDate: string; // in 'YYYY-MM' format
  releaseDate?: string; // in 'YYYY-MM' format or undefined for ongoing
};

function calculateTotalTenure(tenures: Tenure[]): string {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-based

  let totalMonths = 0;

  for (const t of tenures) {
    const [startYear, startMonth] = t.joiningDate.split("-").map(Number);

    const end =
      t.releaseDate && t.releaseDate !== ""
        ? t.releaseDate
        : `${currentYear}-${currentMonth}`;

    const [endYear, endMonth] = end.split("-").map(Number);

    totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // inclusive
  }

  return convertMonthsToYearsMonths(totalMonths);
}

export {
  timestampToDate,
  getYear,
  getMonth,
  getOnlyMonthAndYear,
  formatYearMonth,
  calculateTenure,
  formatDateRange,
  calculateTotalTenure,
};
