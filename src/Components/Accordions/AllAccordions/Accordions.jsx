import Accordion1 from "../AccordionComponents/Accordion1";
import Accordion2 from "../AccordionComponents/Accordion2";
import Accordion4 from "../AccordionComponents/Accordion4";
import Accordion5 from "../AccordionComponents/Accordion5";
import Accordions3 from "../AccordionComponents/Accordions3";

const Accordions = () => {
  return (
    <div className="mt-10 border container mx-auto space-y-5">
      <Accordion1 />
      <Accordion2 />
      <Accordion4 />
      <Accordion5 />
      <Accordions3 />
    </div>
  );
};

export default Accordions;
