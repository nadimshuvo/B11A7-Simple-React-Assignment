import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import Favorite_Items_Section from "../Favorite_Items_Section/Favorite_Items_Section";
import Spinner from "../Spinner/Spinner";

const Section_Auction = () => {
  const [items, setItems] = useState([]); // array from json
  const [favorites, setFavorites] = useState([]); // onClick - Love icon , adding items to a newArray
  const [showSection, setShowSection] = useState(false); // To control visibility of the auction section
  const [loading, setLoading] = useState(true); // To control the loading state
  const [totalBidsAmount, setTotalBidsAmount] = useState(0); // favorite section Total bids Amount

  // load data from Bid-items.json 
  useEffect(() => {
    fetch("Bid-items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  
  // love icon click functionality
  const handleFavoriteClick = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    } else {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    }
    setTotalBidsAmount(prev => prev + item.currentBidPrice);
  };

  // on favorite Section - x icon for deleting items
  const onFavoriteDeleteIconClick = (item) => {
    setFavorites(favorites.filter((fav) => fav.id !== item.id));
    setTotalBidsAmount(prev => prev - item.currentBidPrice);
  }

  // spinner / loading - custom Component
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 5 seconds, set loading to false
      setShowSection(true); // Show the auction section
    }, 5000);

    return () => clearTimeout(timer); // Cleanup component on unmounting
  }, []);

  return (
    <section id="auction" className="min-h-[1358px] bg-[#EBF0F5] px-2">
      <div className="container mx-auto pt-[132px] pb-[116px]">
        <h3 className="sora-medium text-[32px] text-[#0E2954]">
          Active Auctions
        </h3>
        <p className="sora-regular text-[20px] text-black opacity-80 mt-5">
          Discover and bid on extraordinary items
        </p>

        {loading ? (
          <Spinner />
        ) : (
          showSection && (
            <div className="flex justify-between items-start gap-2 2xl:gap-6">
              <Items
                items={items}
                onFavoriteClick={handleFavoriteClick}
                favorites={favorites}
              />
              <Favorite_Items_Section favorites={favorites} totalBidsAmount={totalBidsAmount} onFavoriteDeleteIconClick={onFavoriteDeleteIconClick}/>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Section_Auction;
