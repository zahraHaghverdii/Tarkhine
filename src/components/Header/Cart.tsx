import { ShoppingCart } from "iconsax-react";
import React from "react";

export default function Cart() {
  return (
    <div className="bg-[var(--Tint-1)] p-2 rounded-xl cursor-pointer">
      <ShoppingCart size={20} color="var(--Primary)" />
    </div>
  );
}
