"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface DropdownProps {
  id: string;
  activeDropdown: string;
  setActiveDropdown: (id: string) => void;
  children: ReactNode;
  label?: string | ReactNode;
  icon?: ReactNode;
  className?: string;
  classNameLabel?: string;
}

export default function DropdownHeader({
  id,
  activeDropdown,
  setActiveDropdown,
  children,
  label = "Dropdown",
  icon,
  className = "",
  classNameLabel = "",
}: DropdownProps) {
  const isActive = activeDropdown === id;
  const pathname = usePathname();

  const toggleDropdown = () => {
    setActiveDropdown(isActive ? "" : id);
  };

  // بستن زیرمنو هنگام تغییر مسیر
  useEffect(() => {
    setActiveDropdown("");
  }, [pathname, setActiveDropdown]);

  return (
    <div className={`relative ${className}`}>
      {/* Dropdown Trigger */}
      <div className="flex cursor-pointer gap-1" onClick={toggleDropdown}>
        <span
          className={` ${classNameLabel}
            ${isActive ? "text-[var(--Primary)]" : "text-[var(--Gray-8)]"}`}
        >
          {label}
        </span>
        {icon}
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isActive && <div className="">{children}</div>}
      </AnimatePresence>
    </div>
  );
}
