import { DirectLeft, Instagram, Whatsapp } from "iconsax-react";
import Link from "next/link";

export default function EasyAccess() {
  return (
    <div className="md:col-span-3 col-span-1">
      <span className="font-bold text-xl">دسترسی آسان</span>
      <div className="flex flex-col gap-y-5 w-full text-right mt-6">
        <Link href={"/faq"} className="text-sm w-full text-right">
          پرسش های متداول
        </Link>
        <Link href={"/rules"} className="text-sm w-full text-right">
          قوانین ترخینه
        </Link>
        <Link href={"/"} className="text-sm w-full text-right">
          حریم خصوصی
        </Link>
        <div className="flex items-start gap-4 w-full ">
          <Link href={"/"}>
            <Instagram size="26" color="var(--Gray-4)" />
          </Link>
          <Link href={"/"}>
            <Whatsapp size="26" color="var(--Gray-4)" />
          </Link>
          <Link href={"/"}>
            <DirectLeft size="26" color="var(--Gray-4)" className="rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
}
