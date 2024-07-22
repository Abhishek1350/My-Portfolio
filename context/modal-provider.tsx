"use client";

import { Project } from "@/lib/types";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalData: Project | null;
  setModalData: (data: any) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  return (
    <ModalContext.Provider value={{ open, setOpen, modalData, setModalData }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};