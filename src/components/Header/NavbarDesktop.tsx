"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DropdownHeader from "./DropdowneHeader";
import { usePathname } from "next/navigation";

import { ArrowDown2 } from "iconsax-react";
import { DropdownProps } from "@/types/Dropdown";

type NavbarDesktopProps = DropdownProps & {
  Menu: { label: string; link: string }[];
};

export default function NavbarDesktop({
  setActiveDropdown,
  activeDropdown,
  Menu,
}: NavbarDesktopProps) {
  const pathName = usePathname();

  return (
    <div className="md:flex hidden justify-between gap-x-8">
      <Link href={"/"}>
        <span
          className={`
            pb-2
            ${
              pathName === "/"
                ? "border-b border-[var(--Primary)] text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            }`}
        >
          صفحه اصلی
        </span>
      </Link>

      {/* شعبه */}
      <DropdownHeader
        id="branch"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        label="شعبه"
        icon={<ArrowDown2 size="10" color="var(--Gray-8)" />}
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[200px] absolute top-[calc(100%+30px)] md:left-[calc(100%-80px)]  left-0 transform translate-x-0 
              flex flex-col gap-y-5 overflow-y-auto rounded-2xl p-4 z-50 scrollbar-style  bg-[var(--Gray-2)] border border-[var(--Gray-3)] shadow-lg gap-3"
        >
          <div className="flex flex-col w-full gap-y-3">
            <Link
              href={"/"}
              className="border-b border-[var(--Gray-4)] w-full text-right  text-sm text-[var(--Gray-8)]  pb-3"
            >
              غذای اصلی
            </Link>
            <Link
              href={"/"}
              className="border-b border-[var(--Gray-4)] w-full text-right  text-sm text-[var(--Gray-8)]  pb-3"
            >
              پیش غذا
            </Link>
            <Link
              href={"/"}
              className="border-b border-[var(--Gray-4)] w-full text-right  text-sm text-[var(--Gray-8)]  pb-3"
            >
              دسر
            </Link>
            <Link
              href={"/"}
              className=" w-full text-right  text-sm text-[var(--Gray-8)]  pb-3"
            >
              نوشیدنی
            </Link>
          </div>
        </motion.div>
      </DropdownHeader>

      {/* منو */}
      <DropdownHeader
        id="menu"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        label="منو"
        icon={<ArrowDown2 size="10" color="var(--Gray-8)" />}
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[200px] absolute top-[calc(100%+30px)] md:left-[calc(100%-80px)]  left-0 transform translate-x-0
              flex flex-col gap-y-5 overflow-y-auto rounded-2xl p-4 z-50 scrollbar-style  bg-[var(--Gray-2)] border border-[var(--Gray-3)] shadow-lg gap-3"
        >
          <div className="flex flex-col w-full gap-y-3">
            {Menu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="border-b border-[var(--Gray-4)] last:border-none w-full text-right text-sm text-[var(--Gray-8)] pb-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </DropdownHeader>

      <Link href={"/aboutUs"}>
        <span
          className={`
            pb-2
            ${
              pathName === "/aboutUs"
                ? "border-b border-[var(--Primary)] text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            }`}
        >
          درباره ما
        </span>
      </Link>
      <Link href={"/contactUs"}>
        <span
          className={`
            pb-2
            ${
              pathName === "/contactUs"
                ? "border-b border-[var(--Primary)] text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            }`}
        >
          تماس با ما
        </span>
      </Link>
    </div>
  );
}
