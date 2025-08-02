"use client";
import {
  ArrowDown2,
  CallCalling,
  CloseCircle,
  Home3,
  HomeHashtag,
  MenuBoard,
  UserMinus,
} from "iconsax-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownHeader from "./DropdowneHeader";
import { DropdownProps } from "@/types/Dropdown";

type NavbarDesktopProps = DropdownProps & {
  Menu: { label: string; link: string }[];
} & { handelShowNavbar: () => void };

export default function NavbarResponsive({
  activeDropdown,
  setActiveDropdown,
  Menu,
  handelShowNavbar,
}: NavbarDesktopProps) {
  const pathName = usePathname();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="md:hidden flex flex-col max-sm:w-[80%] min-sm:w-1/2 w-full bg-[var(--Gray-2)] absolute right-0 top-0 h-screen z-60">
        {/* header */}
        <div className="w-full h-[100px] relative">
          <div className="w-full h-full relative px-5">
            <Image src={"/images/topFrame.png"} alt="" fill />
          </div>
          <div className="absolute top-[30%] right-0 left-0 w-[90%] mx-auto flex justify-between">
            <Link href={"/"} className={`w-[100px] h-[40px] relative`}>
              <Image src={"/images/Logo-2.png"} alt="لوگو" fill priority />
            </Link>
            <CloseCircle
              size={20}
              color="#fff"
              onClick={handelShowNavbar}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* main */}
        <div className="flex flex-col p-3 w-full">
          <Link
            href={"/"}
            className={`flex gap-x-2 w-full text-right ${
              pathName === "/"
                ? "text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            } text-sm pb-3 border-b border-[var(--Gray-4)] last:border-b-none`}
          >
            <Home3
              size={20}
              color={pathName === "/" ? "var(--Primary)" : "var(--Gray-8)"}
            />
            صفحه اصلی
          </Link>

          <DropdownHeader
            id="menuResponsive"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            className=" w-full  py-3 border-b border-[var(--Gray-4)]"
            classNameLabel="w-full"
            label={
              <div className="flex justify-between w-full">
                <div
                  className={`flex gap-x-2 text-right text-sm last:border-b-none`}
                >
                  <MenuBoard
                    size={20}
                    color={
                      pathName === "/menuResponsive"
                        ? "var(--Primary)"
                        : "var(--Gray-8)"
                    }
                  />
                  منو
                </div>

                <ArrowDown2
                  size={20}
                  color={
                    pathName === "/menu" ? "var(--Primary)" : "var(--Gray-8)"
                  }
                />
              </div>
            }
          >
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="scrollbar-style h-[500px] mt-8 mr-5 overflow-y-auto"
            >
              <div className="flex flex-col gap-y-3">
                {Menu.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="border-b border-[var(--Gray-4)] last:border-none w-full text-right text-sm text-[var(--Gray-8)] pb-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </DropdownHeader>

          <DropdownHeader
            id="branchResponsive"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            className=" w-full  py-3 border-b border-[var(--Gray-4)]"
            classNameLabel="w-full"
            label={
              <div className="flex justify-between w-full">
                <div
                  className={`flex gap-x-2 text-right text-sm last:border-b-none`}
                >
                  <HomeHashtag
                    size={20}
                    color={
                      pathName === "/branchResponsive"
                        ? "var(--Primary)"
                        : "var(--Gray-8)"
                    }
                  />
                  شعبه
                </div>

                <ArrowDown2
                  size={20}
                  color={
                    pathName === "/menu" ? "var(--Primary)" : "var(--Gray-8)"
                  }
                />
              </div>
            }
          >
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="scrollbar-style h-[500px] mt-8 mr-5 overflow-y-auto"
            >
              <div className="flex flex-col gap-y-3">
                {Menu.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="border-b border-[var(--Gray-4)] last:border-none w-full text-right text-sm text-[var(--Gray-8)] pb-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </DropdownHeader>

          <Link
            href={"/abouteUs"}
            className={`flex gap-x-2 w-full text-right ${
              pathName === "/abouteUs"
                ? "text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            } text-sm py-3 border-b border-[var(--Gray-4)] last:border-b-none`}
          >
            <UserMinus
              size={18}
              color={
                pathName === "/abouteUs" ? "var(--Primary)" : "var(--Gray-8)"
              }
            />
            درباره ما
          </Link>

          <Link
            href={"/contactUs"}
            className={`flex gap-x-2 w-full text-right ${
              pathName === "/contactUs"
                ? "text-[var(--Primary)]"
                : "text-[var(--Gray-8)]"
            } text-sm py-3 border-b border-[var(--Gray-4)] last:border-b-none`}
          >
            <CallCalling
              size={18}
              color={
                pathName === "/contactUs" ? "var(--Primary)" : "var(--Gray-8)"
              }
            />
            تماس با ما
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
