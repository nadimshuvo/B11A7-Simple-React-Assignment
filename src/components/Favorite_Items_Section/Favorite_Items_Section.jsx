import React from "react";
import Favorite_Items from "./Favorite_Items/Favorite_Items";
import No_favorites from "./No_favorites/No_favorites";

const Favorite_Items_Section = () => {
  return (
    <div className="min-w-[496px] bg-white text-black rounded-3xl mt-8 border border-[#DCE5F3] shadow-2xl">
      <div className="flex justify-center items-center gap-3 pt-8 pb-4 border-b border-[#DCE5F3]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5_708)">
            <path
              d="M20.4167 2.23596C19.103 2.2564 17.8179 2.62312 16.6913 3.29911C15.5646 3.9751 14.6363 4.93641 14 6.08596C13.3638 4.93641 12.4355 3.9751 11.3088 3.29911C10.1822 2.62312 8.89709 2.2564 7.58337 2.23596C5.48913 2.32695 3.51602 3.24309 2.09511 4.78423C0.674202 6.32537 -0.0790096 8.36624 3.27192e-05 10.461C3.27192e-05 15.7658 5.5837 21.5595 10.2667 25.4876C11.3123 26.3663 12.6343 26.848 14 26.848C15.3658 26.848 16.6878 26.3663 17.7334 25.4876C22.4164 21.5595 28 15.7658 28 10.461C28.0791 8.36624 27.3259 6.32537 25.905 4.78423C24.484 3.24309 22.5109 2.32695 20.4167 2.23596ZM16.2342 23.7026C15.6088 24.2292 14.8176 24.518 14 24.518C13.1825 24.518 12.3912 24.2292 11.7659 23.7026C5.77153 18.6731 2.33337 13.8478 2.33337 10.461C2.25361 8.9848 2.76079 7.53698 3.74429 6.43328C4.72779 5.32958 6.10781 4.65954 7.58337 4.5693C9.05893 4.65954 10.4389 5.32958 11.4224 6.43328C12.4059 7.53698 12.9131 8.9848 12.8334 10.461C12.8334 10.7704 12.9563 11.0671 13.1751 11.2859C13.3939 11.5047 13.6906 11.6276 14 11.6276C14.3095 11.6276 14.6062 11.5047 14.825 11.2859C15.0438 11.0671 15.1667 10.7704 15.1667 10.461C15.0869 8.9848 15.5941 7.53698 16.5776 6.43328C17.5611 5.32958 18.9411 4.65954 20.4167 4.5693C21.8923 4.65954 23.2723 5.32958 24.2558 6.43328C25.2393 7.53698 25.7465 8.9848 25.6667 10.461C25.6667 13.8478 22.2285 18.6731 16.2342 23.698V23.7026Z"
              fill="#0E2954"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_708">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h2 className="sora-medium text-[32px] text-[#0E2954]">
          Favorite Items
        </h2>
      </div>
      <Favorite_Items />
      <Favorite_Items />
      <Favorite_Items />
      {/* <No_favorites /> */}
      <div className="text-[26px] leading-8 text-black flex justify-center gap-[76px] pb-8 pt-6 border-t border-[#DCE5F3]">
        <h2 className="sora-regular">Total bids Amount</h2>
        <p className="sora-medium">$78,000</p>
      </div>
    </div>
  );
};

export default Favorite_Items_Section;
