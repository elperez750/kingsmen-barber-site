import About from "./app/sections/about";
import Intro from "./app/sections/intro";
import Services from "./app/sections/services";
import Gallery from "./app/sections/gallery";
import AdditionalInfo from "./app/sections/additionalInfo";

export const Root = () => {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <Gallery />
      <AdditionalInfo />
    </>
  );
};
