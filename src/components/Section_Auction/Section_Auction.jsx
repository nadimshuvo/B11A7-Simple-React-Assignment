import React from "react";
import Items from "../Items/Items";
import Favorite_Items_Section from "../Favorite_Items_Section/Favorite_Items_Section";

const Section_Auction = () => {
  return (
    <section className="min-h-[1358px] bg-[#EBF0F5]">
      <div className="container mx-auto pt-[132px] pb-[116px]">
        <h3 className="sora-medium text-[32px] text-[#0E2954]">
          Active Auctions
        </h3>
        <p className="sora-regular text-[20px] text-black opacity-80 mt-5">
          Discover and bid on extraordinary items
        </p>
        {/* Auction Section / Items */}
        <div className="flex justify-between gap-[22px]">
          <Items />
          <Favorite_Items_Section />
        </div>
      </div>
    </section>
  );
};

export default Section_Auction;
