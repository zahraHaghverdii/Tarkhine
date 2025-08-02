import { ReactNode } from "react";

// نوع context
export interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

// props برای Modal
export interface ModalProps {
  children: ReactNode;
}

// child: Open
export interface OpenProps {
  children: ReactNode;
  opens: string;
}

// child: Window
export interface WindowProps {
  children: ReactNode;
  name: string;
  titleModal: string;
  textModal: string;
}
