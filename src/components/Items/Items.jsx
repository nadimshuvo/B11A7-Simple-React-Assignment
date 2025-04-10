import React from "react";
import Item from "./Item";

const Items = ({ items, favorites, onFavoriteClick }) => {
  return (
    <section>
      <div className="max-w-[1000px] 2xl:min-w-[1010px] text-black rounded-3xl mt-8 border border-[#DCE5F3] shadow-2xl">
        <div className="overflow-x-auto">
          {/* Table Formate for showing items */}
          <table className="min-w-full border border-[#DCE5F3] bg-white rounded-3xl overflow-hidden">
            <thead>
              <tr className="sora-regular text-[20px] leading-6 bg-white border-b border-[#DCE5F3]">
                <th className="py-8 px-8 text-left font-semibold">Items</th>
                <th className="py-8 px-8 text-left font-semibold">
                  Current Bid
                </th>
                <th className="py-8 px-8 text-left font-semibold">Time Left</th>
                <th className="py-8 px-8 text-left font-semibold">Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onFavoriteClick={onFavoriteClick}
                  isFavorited={favorites.some((fav) => fav.id === item.id)}
                />
              ))}
            </tbody>
          </table>
          {/* Table Formate for showing items */}
        </div>
      </div>
    </section>
  );
};

export default Items;
