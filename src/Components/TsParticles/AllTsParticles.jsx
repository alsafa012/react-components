import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all";
import { loadFull } from "tsparticles";
// if you are going to use `loadFull`,
import { loadSlim } from "@tsparticles/slim";
import Demo from "./ParticlesConfig/Demo";
import DemoParticlesConfig from "./ParticlesConfig/DemoParticlesConfig";
// import { loadBasic } from "@tsparticles/basic";

const AllTsParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    // <div className="h-[70vh] w-[600px] bg-green-600 relative overflow-hidden">
    <div>
      {/* <div style={{position:"absolute" , width:"100%",height:"80%",top:"0",left:"0",border:"5px solid red"}} className=""> */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={Demo}
        />
      )}
    </div>
    // </div>
  );
};
export default AllTsParticles;
