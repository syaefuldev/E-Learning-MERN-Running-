import React from "react";

const About = () => {
  const dataImage = [
    {
      images: "html.svg",
    },
    {
      images: "css.svg",
    },
    {
      images: "js.svg",
    },
    {
      images: "nodejs.svg",
    },
    {
      images: "mongodb.svg",
    },
    {
      images: "php.svg",
    },
  ];
  return (
    <>
      <section id="about" className="mt-10">
        <div id="language" className="flex w-full justify-between px-[65px]">
          <div className="w-[30%]">
            <p className="text-xl font-semibold text-base-200">
              Ingin jadi seorang Web Developer ?
            </p>
            <p className="mt-4 w-2/4 text-sm leading-6 text-slate-800">
              Ayo pelajari semua bahasa pemrograman di Syn Coder !
            </p>
          </div>
          <div className="flex w-[70%] justify-center space-x-6">
            {dataImage.map((index) => (
              <div className="flex h-[100px] w-[100px] items-center  justify-center rounded-full shadow-md">
                <img
                  src={`images/about/${index.images}`}
                  className="h-[30px] w-[30px]"
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          id="about"
          className="mt-12 flex w-full items-center justify-between space-x-12 px-[65px]"
        >
          <div className="w-2/4">
            <img src="/images/about/about.svg" alt="img" />
          </div>
          <div className="w-2/4">
            <p className="text-base-200">About Us</p>
            <p className="mt-6 text-3xl font-semibold text-slate-800">
              Welcome to Syn Coder, Ayo belajar bareng bersama kami
            </p>
            <p className="text-sm text-slate-800 mt-6 w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              veritatis aliquam consequuntur velit, distinctio expedita
              temporibus accusamus. Omnis iusto provident, in reiciendis vero
              culpa maiores soluta, repellendus, aliquam possimus itaque?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
