import { SearchNormal } from "iconsax-react";
import React from "react";
import Container from "../Container";

function SearchResponsive() {
  return (
    <div className="block md:hidden">
      <Container>
        <div className="flex rounded-[4px] border border-[var(--Gray-5)] justify-between items-center px-5 gap-5 my-5">
          <input
            type="text"
            placeholder="جستوجو"
            className="focus:outline-0 w-full h-10"
          />
          <SearchNormal size={20} color="var(--Gray-9)" />
        </div>
      </Container>
    </div>
  );
}

export default SearchResponsive;
