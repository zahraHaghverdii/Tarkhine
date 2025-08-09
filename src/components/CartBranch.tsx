import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

interface TCartBranch {
  titleBranch: string;
  addres: string;
  linkImg: string;
  linkBranch: string;
  btnBranch?: string;
  className?: string;
}

export default function CartBranch({
  titleBranch,
  addres,
  linkImg,
  linkBranch,
  className = "",
  btnBranch = "false",
}: TCartBranch) {
  return (
    <Link href={linkBranch}>
      <div
        className={`relative group ${className} md:pb-10 pb-0 md:h-70 h-25 overflow-hidden grid md:grid-cols-1 grid-cols-5 border border-[var(--Gray-5)] rounded-lg transition-shadow hover:shadow-[2px_5px_2px_var(--Gray-5)]`}
      >
        <div
          className={`w-full relative col-span-2 overflow-hidden transition-[height] duration-500 ease-in-out
          ${
            btnBranch === "true"
              ? "md:h-[150px] h-auto md:group-hover:h-[120px]"
              : "md:h-[150px] h-auto"
          }
        `}
        >
          <Image
            src={linkImg}
            alt={titleBranch}
            fill
            className="rounded-tr rounded-br md:rounded-tl md:rounded-br-none object-cover"
          />
        </div>

        <div className="text-center p-3 col-span-3">
          <span className="text-[var(--Gray-9)] text-sm md:mb-5 pb-1 md:font-bold">
            {titleBranch}
          </span>
          <div className="w-full md:h-18 md:line-clamp-3 h-auto line-clamp-2">
            <span className="text-[var(--Gray-8)] text-[12px]">{addres}</span>
          </div>
        </div>

        {/* btn branch */}
        {btnBranch === "true" && (
          <div
            className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-full
            opacity-0
            group-hover:-translate-y-2
            group-hover:opacity-100
            transition-all
            duration-500
            md:flex gap-x-3 justify-center w-3/5 px-4 py-2 rounded border border-[var(--Gray-5)]
            bg-white
            z-10
            hidden
          "
          >
            <span className="text-sm">صفحه شعبه</span>
            <ArrowLeft size={20} color="var(--Gray-5)" />
          </div>
        )}
      </div>
    </Link>
  );
}
