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
type Tenure = {
  joiningDate: string; // in 'YYYY-MM' format
  releaseDate?: string; // in 'YYYY-MM' format or undefined for ongoing
};

function calculateTotalTenure(tenures: Tenure[]): {
  years: number;
  months: number;
} {
  if (!Array.isArray(tenures) || tenures.length === 0) {
    return { years: 0, months: 0 };
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  let totalMonths = 0;

  for (const t of tenures) {
    if (!t?.joiningDate) continue;

    const [startYear, startMonth] = t.joiningDate
      .split("-")
      .map((n) => Number(n));

    if (!startYear || !startMonth) continue;

    let endYear: number;
    let endMonth: number;

    if (t.releaseDate && t.releaseDate.trim() !== "") {
      const endParts = t.releaseDate.split("-").map(Number);
      endYear = endParts[0];
      endMonth = endParts[1];
    } else {
      endYear = currentYear;
      endMonth = currentMonth;
    }

    if (!endYear || !endMonth) continue;

    const diff = (endYear - startYear) * 12 + (endMonth - startMonth);

    if (diff >= 0) {
      totalMonths += diff;
    }
  }

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}

export {
  formatYearMonth,
  calculateTenure,
  formatDateRange,
  calculateTotalTenure,
};
