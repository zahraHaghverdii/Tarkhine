import Link from "next/link";

function BranchFooter() {
  return (
    <div className="md:col-span-3 col-span-1">
      <span className="font-bold text-xl">شعبه های ترخینه</span>
      <div className="flex flex-col gap-y-5 w-full text-right mt-6">
        <Link href={"/faq"} className="text-sm w-full text-right">
          شعبه اکباتان
        </Link>
        <Link href={"/faq"} className="text-sm w-full text-right">
          شعبه چالوس
        </Link>
        <Link href={"/faq"} className="text-sm w-full text-right">
          شعبه اقدسیه
        </Link>
        <Link href={"/faq"} className="text-sm w-full text-right">
          شعبه ونک
        </Link>
      </div>
    </div>
  );
}

export default BranchFooter;
