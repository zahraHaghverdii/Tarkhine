import Container from "@/components/Container";
import { ArrowLeft, Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutLanding() {
  return (
    <div className="relative mt-[60px] mb-[30px]">
      <div className="relative w-full md:h-[340px] h-[530px]">
        <Image
          src="/images/about.png"
          alt="درباره ترخینه"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute w-full inset-0 z-30 py-5">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start text-[var(--Gray-1)]  gap-5">
            {/* right */}
            <div className="grid grid-cols-1 gap-y-5 text-right lg:w-2/5 md:w-3/5 w-full md:m-0 mb-3">
              <span className="md:text-[22px] text-[18px] font-semibold">
                رستوران‌های زنجیره‌ای ترخینه
              </span>
              <span className="md:text-[16px] text-[14px] leading-relaxed">
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
                بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
                درخور شان شما عزیزان ارائه دهیم.
              </span>
              <Link href="/aboutUs" className="w-fit">
                <div className="flex items-center gap-x-3 border border-[var(--Gray-1)] rounded px-3 py-1 h-10 hover:text-white transition-colors">
                  <span className="text-sm">اطلاعات بیشتر</span>
                  <ArrowLeft size={20} color="var(--Gray-1)" />
                </div>
              </Link>
            </div>

            {/* left */}
            <div className="md:w-2/5 w-full grid grid-cols-2 md:gap-y-12 gap-y-10">
              <div className="flex flex-col gap-y-3">
                <User size={36} color="var(--Gray-1)" />
                <span className="text-[var(--Gray-1)] text-[13px]">
                  پرسنلی محبوب و حرفه ای
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <Diagram size={36} color="var(--Gray-1)" />
                <span className="text-[var(--Gray-1)] text-[13px]">
                  کیفیت بالای غذا
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <HomeWifi size={36} color="var(--Gray-1)" />
                <span className="text-[var(--Gray-1)] text-[13px]">
                  محیطی دلنشین و آرام
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <MenuBoard size={36} color="var(--Gray-1)" />
                <span className="text-[var(--Gray-1)] text-[13px]">
                  منوی متنوع
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
