import Lottie from "lottie-react";
import SpinnerLottie from "./Error.json";
import SpinnerLottie1 from "./One.json";
import SpinnerLottie2 from "./Two.json";
import SpinnerLottie4 from "./Four.json";
import SpinnerLottie5 from "./five.json";
import Loading from "./three.json";
import DotLoading from "./three.json";
const ReactLottie = () => {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
      <Lottie className="h-[200px] border" animationData={SpinnerLottie} loop={true} />
      <Lottie className="h-[200px] border" animationData={SpinnerLottie1} loop={true} />
      <Lottie className="h-[200px] border" animationData={SpinnerLottie5} loop={true} />
      <Lottie className="h-[200px] border" animationData={Loading} loop={true} />
      <Lottie className="h-[200px] border" animationData={DotLoading} loop={true} />
      <Lottie className="h-[200px] border" animationData={SpinnerLottie2} loop={true} />
      <Lottie className="h-[200px] border" animationData={SpinnerLottie4} loop={true} />

    </div>
  );
};

export default ReactLottie;
