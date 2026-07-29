export type PrintDocumentKind = "resume" | "cover-letter";

const PRINT_OWNER = "sk-masum";

export const getPrintDate = (date: Date = new Date()): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const getPdfPrintFileName = (
  kind: PrintDocumentKind,
  date: Date = new Date(),
): string => {
  return `${kind}_${PRINT_OWNER}_${getPrintDate(date)}`;
};

export const applyPdfPrintTitle = (
  doc: Pick<Document, "title">,
  kind: PrintDocumentKind,
  date: Date = new Date(),
): string => {
  const fileName = getPdfPrintFileName(kind, date);
  doc.title = fileName;
  return fileName;
};

export const preparePdfPrintTitle = async (
  doc: Pick<Document, "title">,
  kind: PrintDocumentKind,
  delayMs = 120,
): Promise<string> => {
  const fileName = applyPdfPrintTitle(doc, kind);

  // Safari (especially on iOS) can ignore title changes if print starts immediately.
  await new Promise((resolve) => setTimeout(resolve, delayMs));

  return fileName;
};
