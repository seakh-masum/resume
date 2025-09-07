import { useCallback, useState } from "react";

export interface DialogOptions<T = unknown> {
  data?: T;
}

export function useDialog<T = unknown>() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogData, setDialogData] = useState<T | null>(null);

  const openDialog = useCallback((options?: DialogOptions<T>) => {
    setIsOpen(true);
    setDialogData(options?.data ?? null);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setDialogData(null);
  }, []);

  return {
    isOpen,
    openDialog,
    closeDialog,
    dialogData,
  };
}
