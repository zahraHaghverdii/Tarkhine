export interface DropdownProps {
  activeDropdown: string;
  setActiveDropdown: (id: string) => void;
}

export interface Menu {
  link: string;
  lable: string;
}
