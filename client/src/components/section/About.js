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
      <section id="about" className="lg:mt-20">
        <div
          id="language"
          className="w-full justify-between px-4 lg:flex lg:px-[65px]"
        >
          <div className="lg:w-[30%]">
            <p className="text-2xl font-semibold text-base-200 lg:text-xl">
              Ingin jadi seorang {""}
              <span className="text-base-300">Web Developer ?</span>
            </p>
            <p className="mt-4 w-3/4 text-sm leading-6 text-slate-800 lg:w-2/4">
              Ayo pelajari semua bahasa pemrograman di Syn Coder !
            </p>
          </div>
          <div className="mt-4 flex flex-wrap justify-evenly space-x-6 px-6 lg:mt-0 lg:w-[70%] lg:justify-center lg:px-0">
            {dataImage.map((index) => (
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full  shadow-md lg:h-[100px] lg:w-[100px]">
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
          className="mt-20 flex w-full flex-col-reverse justify-between px-4 lg:flex-row lg:space-x-12 lg:px-[65px]"
        >
          <div className="lg:w-2/4">
            <img src="/images/about/about.svg" alt="img" />
          </div>
          <div className="lg:w-2/4 lg:pt-10">
            <p className="font-semibold text-base-200">ABOUT US</p>
            <p className="mt-6 text-2xl lg:text-3xl font-semibold text-slate-800">
              Welcome to Syn Coder, Ayo belajar bareng bersama kami
            </p>
            <p className="mt-6 text-sm text-slate-800 lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              veritatis aliquam consequuntur velit, distinctio expedita
              temporibus accusamus. Omnis iusto provident, in reiciendis vero
              culpa maiores soluta, repellendus, aliquam possimus itaque?
            </p>
            <div className="mt-6">
              <p className="text-slate-800">
                <i class="fa-solid fa-check pr-4 text-green-500"></i> Materi
                Terstruktur
              </p>
              <p className="text-slate-800">
                <i class="fa-solid fa-check pr-4 text-green-500"></i> Akses
                Selamanya
              </p>
              <p className="text-slate-800">
                <i class="fa-solid fa-check pr-4 text-green-500"></i> Mentor
                Berpengalaman
              </p>
              <p className="text-slate-800">
                <i class="fa-solid fa-check pr-4 text-green-500"></i> Banyak
                Diskon
              </p>
            </div>
            <button className="mt-4 rounded-2xl bg-base-300 px-6 py-3 text-[12px] text-slate-50">
              lihat selanjutnya...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
