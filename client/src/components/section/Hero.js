import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="relative">
          <div className="absolute h-[700px]  w-full rounded-b-[30%] bg-base-700"></div>
          <div className="relative z-10 lg:flex-row h-screen lg:items-center lg:justify-between px-4 lg:px-[65px] flex-col flex justify-center pt-24">
            <div className="lg:w-2/4">
              <p className="lg:text-5xl font-bold lg:leading-[61px] text-base-300 text-3xl lg:w-full w-[90%]">
                Learning programming <span className="text-base-200">is now easier</span>
              </p>
              <p className="w-[85%] py-4 text-slate-800">Syn Coder adalah platform menarik yang akan mengajarkan Anda dengan cara yang lebih interaktif</p>
              <div className="flex justify-evenly lg:justify-start lg:space-x-4 pt-4">
                <button className="rounded-full bg-base-200 px-6 py-3 text-slate-50">Bergabung</button>
                <button className="flex items-center space-x-2 rounded-full bg-white px-4 py-3">
                  <i className="fa-solid fa-play text-base-500"></i>
                  <span>Tonton Video</span>
                </button>
              </div>
            </div>
            <div className="lg:w-2/4 flex justify-center pt-10 lg:pt-0">
               <img src="images/hero/hero.svg" alt="hero" className="w-3/4"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
