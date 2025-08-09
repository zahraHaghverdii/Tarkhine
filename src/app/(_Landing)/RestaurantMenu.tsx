"use client";

import CartBranch from "@/components/CartBranch";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
import Title from "@/components/Title";
import Image from "next/image";

export default function RestaurantMenu() {
  const menuItems = [
    {
      id: "main_Course",
      label: "غذای اصلی",
      image: "/images/menu/mainCourse.png",
    },
    {
      id: "appetizer",
      label: "پیش غذا",
      image: "/images/menu/appetizer.png",
    },
    {
      id: "dessert",
      label: "دسر",
      image: "/images/menu/dessert.png",
    },
    {
      id: "drink",
      label: "نوشیدنی",
      image: "/images/menu/drink.png",
    },
  ];

  return (
    <Container>
      <div className="my-10">
        <Title title="منو رستوران" />

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-y-20 gap-x-6 mt-20">
          <Modal>
            {menuItems.map((menu) => (
              <div key={menu.id}>
                <Modal.Open opens={menu.id}>
                  <div className="relative bg-[var(--Primary)] rounded-lg pt-20 md:pb-15 pb-2 px-4 text-[var(--Gray-9)] shadow hover:shadow-lg transition text-center cursor-pointer">
                    {/* عکس بالا - وسط - بیرون زده */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-36 sm:h-36 md:w-38 md:h-38">
                      <Image
                        src={menu.image}
                        alt={menu.label}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* نوشته پایین */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[var(--Gray-3)] rounded shadow px-4 py-2 text-center text-sm w-2/3">
                      {menu.label}
                    </div>
                  </div>
                </Modal.Open>

                <Modal.Window
                  name={menu.id}
                  titleModal={"انتخاب شعبه"}
                  textModal={
                    "برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:"
                  }
                >
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 gap-4">
                    <CartBranch
                      titleBranch={"شعبه ونک"}
                      addres={
                        "  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"
                      }
                      linkBranch="/branch"
                      linkImg={"/images/branch/breanch-ecbatan.png"}
                    />
                    <CartBranch
                      titleBranch={"شعبه ونک"}
                      addres={
                        "  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"
                      }
                      linkBranch="/branch"
                      linkImg={"/images/branch/breanch-ecbatan.png"}
                    />
                    <CartBranch
                      titleBranch={"شعبه ونک"}
                      addres={
                        "  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"
                      }
                      linkBranch="/branch"
                      linkImg={"/images/branch/breanch-ecbatan.png"}
                    />
                  </div>
                </Modal.Window>
              </div>
            ))}
          </Modal>
        </div>
      </div>
    </Container>
  );
}
