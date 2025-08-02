"use client";

import { motion } from "framer-motion";
import { Heart, Location, Logout, User, Wallet } from "iconsax-react";
import DropdownHeader from "./DropdowneHeader";
import { DropdownProps } from "@/types/Dropdown";
import Link from "next/link";

const Items = [
  { label: "پروفایل", link: "/", icon: User },
  { label: "پیگیری سفارش", link: "/", icon: Wallet },
  { label: "علاقه‌مندی‌ها", link: "/", icon: Heart },
  { label: "آدرس‌های من", link: "/", icon: Location },
];

export default function Login({
  setActiveDropdown,
  activeDropdown,
}: DropdownProps) {
  return (
    <>
      {/* اگر لاگین بود */}
      <DropdownHeader
        id="logon"
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        label={
          <div className="bg-[var(--Tint-1)] p-2 rounded-xl cursor-pointer">
            <User size={20} color="var(--Primary)" />
          </div>
        }
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[200px] absolute top-[calc(100%+30px)] md:left-[calc(100%-80px)]  left-0 transform translate-x-0 
              flex flex-col gap-y-5 overflow-y-auto rounded-2xl p-4 z-50 scrollbar-style  bg-[var(--Gray-2)] border border-[var(--Gray-3)] shadow-lg gap-3"
        >
          {Items.map((item, index) => (
            <div className="flex flex-col w-full gap-y-3" key={index}>
              <Link
                href={item.link}
                className="border-b border-[var(--Gray-4)] w-full text-right text-sm text-[var(--Gray-8)] pb-3 flex items-center gap-x-2"
              >
                <item.icon size={20} color="var(--Gray-8)" />
                {item.label}
              </Link>
            </div>
          ))}

          {/* logOut */}
          <div className="w-full text-right text-sm text-[var(--Gray-8)] pb-3 flex items-center gap-x-2 cursor-pointer">
            <Logout size={20} color="var(--Gray-8)" />
            <span>خروج از حساب</span>
          </div>
        </motion.div>
      </DropdownHeader>

      {/* اگر لاگین نبود */}
      {/* <Link href={"/login"}>
        <div className="bg-[var(--Tint-1)] p-2 rounded-xl cursor-pointer">
          <User size={20} color="var(--Primary)" />
        </div>
      </Link> */}
    </>
  );
}
