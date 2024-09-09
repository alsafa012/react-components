import { useEffect } from "react";
import BorderAnimatedForm from "../FormComponents/BorderAnimatedForm/BorderAnimatedForm";
import RadioInputForm from "../FormComponents/RadioInputForm";
import CustomizeRadio from "../FormComponents/RadioInputForm/CustomizeRadio";
import AllTsParticles from "../../TsParticles/AllTsParticles";

const AllForms = () => {
  useEffect(() => {
    const colorPicker = document.getElementById("colorPicker");
    const colorValue = document.getElementById("colorValue");

    colorPicker.addEventListener("input", function () {
      const selectedColor = colorPicker.value;
      colorValue.textContent = `Selected Color: ${selectedColor}`;
    });
  }, []);
  return (
    <div className="mt-10 border container mx-auto space-y-5">
      <BorderAnimatedForm></BorderAnimatedForm>
      <RadioInputForm></RadioInputForm>
      <CustomizeRadio></CustomizeRadio>
      <input type="color" name="" id="colorPicker" />
      <p id="colorValue"></p>
      <div className="contain relative border-2 border-red-600">
        <p id="hello" className="text-7xl text-center">hello</p>
        <div className="border h-full w-full absolute top-0 left-0"><AllTsParticles></AllTsParticles></div>
      </div>
    </div>
  );
};

export default AllForms;
