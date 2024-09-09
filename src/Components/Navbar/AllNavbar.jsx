import NavbarComponents01 from "./NavbarComponents/NavbarComponents01";
import NavbarComponents02 from "./NavbarComponents/NavbarComponents02";
// import PhoneInputs from "../PhoneInput/PhoneInput";

const AllNavbar = () => {
  return (
    <div className="mt-10 container mx-auto space-y-5 overflow-hidden h-screen">
      <NavbarComponents01 />
      <NavbarComponents02 />
      {/* <PhoneInputs></PhoneInputs> */}
    </div>
  );
};

export default AllNavbar;
