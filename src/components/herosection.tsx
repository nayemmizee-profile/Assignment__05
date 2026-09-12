import HeroImage from "../assets/banner-stack.png";

const hero = () => {
  return (
    <>
      <section className=" mx-auto w-full  px-45 py-16">
        <div className="flex justify-around items-center ">
          <div className="w-1/2">
            {/* for left side */}
            <h1 className=" text-3xl font-extrabold leading-[0.95] tracking-tight sm:text-3xl lg:text-5xl">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-[#fb4b36] via-[#df2b87] to-[#7446e8] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-[40px] text-gray-500 ">
              Explore frontend, backend, database, and tooling options,
              <br /> compare them side by side, and put together the stack that
              fits your <br /> next project.
            </p>
            <div className="flex  gap-2 mt-[50px]">
              {/* button div  */}
              <button className="font-bold  hover:transition-all duration-[1.5s] hover:hover:from-[#ce6559] hover:to-[#ec64aa] bg-gradient-to-r from-[#fb4b36] to-[#df2b87] px-3 py-1.5 rounded-[10px] text-amber-100">
                Explore Technologies
              </button>
              <button className="font-bold hover:transition-all duration-[1.5s] hover:bg-gray-400 text-gray-500 px-8 py-2 rounded-[10px] border-1  border-amber-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md w-1/2">
            {/* for right side */}
            <img
              src={HeroImage}
              className="h-auto w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className=" mx-auto px-45">
        <h1 className="text-4xl font-extrabold">
          Explore the
          <span className="bg-gradient-to-r from-[#df2b87] to-[#7446e8] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-500 mt-3 text-1xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </>
  );
};

export default hero;
