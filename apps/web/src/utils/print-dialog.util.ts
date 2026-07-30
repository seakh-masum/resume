import {
  applyPdfPrintTitle,
  appendAutoPrintParams,
  preparePdfPrintTitle,
  type PrintDocumentKind,
} from "@/utils/print.util";

type OpenPrintableDialogOptions = {
  path: string;
  kind: PrintDocumentKind;
  frameId: string;
  mobileChromeRouteFallback?: boolean;
};

const isMobileChromePrintContext = () => {
  const ua = navigator.userAgent || "";
  const isMobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const isSmallViewport = window.matchMedia("(max-width: 900px)").matches;
  const isChromeFamily = /Chrome|CriOS/i.test(ua);
  return isMobileUA && isSmallViewport && isChromeFamily;
};

export const openPrintableDialog = ({
  path,
  kind,
  frameId,
  mobileChromeRouteFallback = false,
}: OpenPrintableDialogOptions) => {
  const targetUrl = new URL(path, window.location.origin);

  if (mobileChromeRouteFallback && isMobileChromePrintContext()) {
    appendAutoPrintParams(targetUrl);
    window.location.assign(`${targetUrl.pathname}${targetUrl.search}`);
    return;
  }

  const existingFrame = document.getElementById(frameId);
  if (existingFrame) {
    existingFrame.remove();
  }

  const frame = document.createElement("iframe");
  frame.id = frameId;
  frame.src = `${targetUrl.pathname}${targetUrl.search}`;
  frame.style.position = "fixed";
  frame.style.left = "-9999px";
  frame.style.top = "0";
  frame.style.width = "1200px";
  frame.style.height = "1600px";
  frame.style.border = "0";
  frame.style.opacity = "0";
  frame.style.pointerEvents = "none";

  frame.addEventListener("load", async () => {
    const printWindow = frame.contentWindow;
    if (!printWindow) {
      frame.remove();
      window.location.href = `${targetUrl.pathname}${targetUrl.search}`;
      return;
    }

    applyPdfPrintTitle(document, kind);
    applyPdfPrintTitle(printWindow.document, kind);
    await preparePdfPrintTitle(printWindow.document, kind);
    printWindow.focus();
    printWindow.print();

    // Fallback cleanup if afterprint does not fire for the iframe.
    setTimeout(() => {
      const currentFrame = document.getElementById(frameId);
      if (currentFrame) {
        currentFrame.remove();
      }
    }, 1500);
  });

  document.body.appendChild(frame);
};
