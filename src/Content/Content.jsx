import Hero from "./Hero";
import OurTeam from "./OurTeam";
import ContactForm from "./ContactForm";
import About from "./About";
import GetInTouch from "./GetInTouch";
import WhatWeOffer from "./WhatWeOffer";
import Blank from "../Overlay/Blank";

function Content() {
  return (
    <div>
      <Blank />
      {/* <Hero /> */}
      <About />
      <WhatWeOffer />
      <OurTeam />
      <GetInTouch />
      <ContactForm />
    </div>
  );
}

export default Content;
