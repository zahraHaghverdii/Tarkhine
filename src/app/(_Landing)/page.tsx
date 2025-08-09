import Search from "@/components/Search/SearchResponsive";
import SliderLanding from "./SliderLanding";
import RestaurantMenu from "./RestaurantMenu";
import AboutLanding from "./AboutLanding";
import TarkhinehTour from "./TarkhinehTour";

export default function LandingPage() {
  return (
    <>
      <SliderLanding />
      <Search />
      <RestaurantMenu />
      <AboutLanding />
      <TarkhinehTour />
    </>
  );
}
