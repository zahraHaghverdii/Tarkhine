import { DropdownProps } from "@/types/Dropdown";
import Cart from "./Cart";
import Login from "./Login";
import Search from "../Search/Search";

export default function NavbarLeft({
  setActiveDropdown,
  activeDropdown,
}: DropdownProps) {
  return (
    <div className="flex gap-x-3">
      {/* search */}
      <Search />
      {/* cart */}
      <Cart />
      {/* login */}
      <Login
        setActiveDropdown={setActiveDropdown}
        activeDropdown={activeDropdown}
      />
    </div>
  );
}
