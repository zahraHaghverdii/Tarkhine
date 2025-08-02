"use client";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarLeft from "./NavbarLeft";
import { useState } from "react";
import NavbarResponsive from "./NavbarResponsive";
import { HambergerMenu } from "iconsax-react";
import Overlay from "@/app/ui/Overlay";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState(false);
  const Menu = [
    { link: "/", label: "غذای اصلی" },
    { link: "/", label: "پیش غذا" },
    { link: "/", label: "دسر" },
    { link: "/", label: "نوشیدنی" },
  ];

  //handelShowNavbar
  function handelShowNavbar() {
    setShowNavbar((show) => !show);
  }

  return (
    <div className="bg-[var(--Gray-1)] py-2 shadow">
      <Container>
        <div className="flex justify-between items-center">
          {/* hamberger menu */}
          <HambergerMenu
            size={32}
            color="var(--Primary)"
            className="block md:hidden cursor-pointer"
            onClick={handelShowNavbar}
          />

          {/* logo */}
          <Logo logoSrc={"/images/Logo.png"} width="130px" height="50px" />

          {/* navbar */}
          <NavbarDesktop
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            Menu={Menu}
          />
          {showNavbar && (
            <>
              <NavbarResponsive
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                Menu={Menu}
                handelShowNavbar={handelShowNavbar}
              />
              <Overlay id="navbarResponsive" onClick={handelShowNavbar} />
            </>
          )}

          {/* nav-left */}
          <NavbarLeft
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </Container>
    </div>
  );
}
