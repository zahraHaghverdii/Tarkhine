"use client";

import Overlay from "@/app/ui/Overlay";
import {
  ModalContextType,
  ModalProps,
  OpenProps,
  WindowProps,
} from "@/types/ModalType";
import React, { createContext, useContext, useState } from "react";
import { CloseCircle } from "iconsax-react";

// مقدار پیش‌فرض
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// parent
function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const open = (name: string) => setOpenName(name);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// child: Open
function Open({ children, opens }: OpenProps) {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Open must be used within a Modal");
  const { open } = ctx;

  return <div onClick={() => open(opens)}>{children}</div>;
}

// child: Window
function Window({ children, name, titleModal, textModal }: WindowProps) {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Window must be used within a Modal");
  const { openName, close } = ctx;

  if (name !== openName) return null;

  return (
    <>
      <Overlay onClick={close} id={name}></Overlay>
      <div className="bg-[var(--Gray-1)] lg:w-[70%] md:w-1/2 w-[90%] h-[450px] fixed left-0 right-0 top-50 bottom-50 m-auto pb-4  rounded z-40 overflow-x-hidden overflow-y-auto shadow-md">
        <div className="flex justify-between items-center p-4 mb-7 md:bg-inherit bg-[var(--Gray-4)]">
          <div className="w-full text-center text-xl">
            <h4 className="text-[var(--Gray-9)]">{titleModal}</h4>
          </div>
          <button onClick={close}>
            <CloseCircle size={20} color="var(--Gray-9)" />
          </button>
        </div>

        <>
          <p className="w-full text-center text-[var(--Gray-9)] text-sm mb-6">
            {textModal}
          </p>
          <div className="p-4 lg:py-0">{children}</div>
        </>
      </div>
    </>
  );
}

// ترکیب
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
