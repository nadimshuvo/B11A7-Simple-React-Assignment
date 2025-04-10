import React from "react";
import bannarImage from "/Banner-min.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[730px] place-items-start"
        style={{
          backgroundImage: `url(${bannarImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container mx-auto mt-[239px] px-2">
          <h1 className="mb-5 text-5xl sora-semibold leading-[60px] text-white max-w-[631px] animate-pulse">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-8 text-2xl sora-light leading-[30px] text-white max-w-[642px] opacity-80">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <a href="#auction">
            <button className="animate-bounce btn-ghost bg-white sora-medium text-xl text-[#010000] px-8 py-4 rounded-[35px] transition hover:bg-amber-300 cursor-pointer">
              Explore Auctions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
