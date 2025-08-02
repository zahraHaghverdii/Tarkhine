import Image from "next/image";
import Link from "next/link";

interface TLogo {
  logoSrc: string;
  width: string;
  height: string;
}

export default function Logo({ logoSrc }: TLogo) {
  // export default function Logo({ logoSrc, width, height }: TLogo) {
  return (
    <Link href={"/"} className={`w-[130px] h-[50px] relative`}>
      <Image src={logoSrc} alt="لوگو" fill priority />
    </Link>
  );
}
