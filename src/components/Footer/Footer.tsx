import Image from "next/image";
import React from "react";
import Container from "../Container";
import EasyAccess from "./EasyAccess";
import MessageFooter from "./MessageFooter";
import BranchFooter from "./BranchFooter";

export default function Footer() {
  return (
    <div className="relative">
      <div className="relative w-full md:h-[340px] h-[250px]">
        <Image
          src="/images/Footer.png"
          alt="Footer background"
          fill
          className="object-cover"
          priority={false} // فقط در صورت نیاز به اولویت true کن
        />

        <div className="absolute inset-0 text-[var(--Gray-1)] py-5">
          <Container>
            <div className="grid md:grid-cols-12 grid-cols-2 md:gap-x-3 gap-y-8">
              <EasyAccess />
              <BranchFooter />
              <MessageFooter />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
