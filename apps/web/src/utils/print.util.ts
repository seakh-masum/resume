import type {
  PrintDocumentKind,
  RunAutoPrintIfRequestedOptions,
} from "@/types/features";
import {
  AUTO_PRINT_SEARCH_PARAM,
  AUTO_PRINT_TOKEN_PARAM,
  PRINT_OWNER,
} from "@/const";

export type { PrintDocumentKind, RunAutoPrintIfRequestedOptions };
export { AUTO_PRINT_SEARCH_PARAM, AUTO_PRINT_TOKEN_PARAM };

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

export const appendAutoPrintParams = (url: URL) => {
  url.searchParams.set(AUTO_PRINT_SEARCH_PARAM, "1");
  // Unique token makes each print request idempotent and repeatable.
  url.searchParams.set(
    AUTO_PRINT_TOKEN_PARAM,
    `${Date.now()}-${Math.random()}`,
  );
};

export const runAutoPrintIfRequested = async ({
  kind,
  lastTokenStorageKey,
  fallbackStorageKey,
  params = new URLSearchParams(window.location.search),
  doc = document,
}: RunAutoPrintIfRequestedOptions): Promise<boolean> => {
  const shouldAutoPrint = params.get(AUTO_PRINT_SEARCH_PARAM) === "1";
  if (!shouldAutoPrint) {
    return false;
  }

  const token = params.get(AUTO_PRINT_TOKEN_PARAM)?.trim();
  if (token) {
    if (sessionStorage.getItem(lastTokenStorageKey) === token) {
      return false;
    }
    sessionStorage.setItem(lastTokenStorageKey, token);
  } else {
    if (sessionStorage.getItem(fallbackStorageKey) === "1") {
      return false;
    }
    sessionStorage.setItem(fallbackStorageKey, "1");
  }

  await preparePdfPrintTitle(doc, kind);
  window.print();
  return true;
};
