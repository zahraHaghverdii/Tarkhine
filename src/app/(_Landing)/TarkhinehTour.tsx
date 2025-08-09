import CartBranch from "@/components/CartBranch";
import Container from "@/components/Container";
import Title from "@/components/Title";

export default function TarkhinehTour() {
  return (
    <Container>
      <Title title="ترخینه گردی" />
      <div className="my-[28px] md:mx-5 mx-0 overflow-x-hidden md:overflow-x-auto ">
        <div className="flex md:flex-row flex-col md:gap-x-5 gap-y-5 justify-around min-w-full md:min-w-max py-5">
          <CartBranch
            titleBranch={"شعبه ونک"}
            addres={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            linkImg={"/images/branch/breanch-ecbatan.png"}
            linkBranch="/branch"
            className="md:w-[260px] w-full"
            btnBranch="true"
          />
          <CartBranch
            titleBranch={"شعبه ونک"}
            addres={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            linkImg={"/images/branch/breanch-ecbatan.png"}
            linkBranch="/branch"
            className="md:w-[260px] w-full"
            btnBranch="true"
          />
          <CartBranch
            titleBranch={"شعبه ونک"}
            addres={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            linkImg={"/images/branch/breanch-ecbatan.png"}
            linkBranch="/branch"
            className="md:w-[260px] w-full"
            btnBranch="true"
          />
          <CartBranch
            titleBranch={"شعبه ونک"}
            addres={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}
            linkImg={"/images/branch/breanch-ecbatan.png"}
            linkBranch="/branch"
            className="md:w-[260px] w-full"
            btnBranch="true"
          />
        </div>
      </div>
    </Container>
  );
}
