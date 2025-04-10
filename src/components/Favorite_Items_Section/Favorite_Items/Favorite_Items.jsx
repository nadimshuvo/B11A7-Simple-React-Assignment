import React from "react";

const Favorite_Items = ({item,onFavoriteDeleteIconClick, isLastItem}) => {
  console.log(isLastItem);
  
  const {image,title,description,currentBidPrice,bidsCount} = item;

  const handleFavoriteItems = ()=> {
    onFavoriteDeleteIconClick(item);
  }
  
  return (
    <section className="px-6 transition hover:bg-red-50">
      <div className={`flex justify-between gap-6 py-6 ${ isLastItem ? '' : 'border-b border-[#DCE5F3]'}`}>
        <img
          className="w-24 h-24 min-w-24 object-cover rounded-2xl"
          src={image}
          alt={description}
        />
        <div className="sora-regular text-[16px] leading-5 text-[#0E2954]">
          <p>{title}</p>
          <aside className="flex gap-6 mt-3.5">
            <p>${currentBidPrice}</p>
            <p>Bids: {bidsCount}</p>
          </aside>
        </div>
        <div className="ml-auto cursor-pointer " onClick={handleFavoriteItems}>
          <svg
          className="transition rounded-full hover:bg-red-300 hover:rounded-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0001 5.99994C17.8125 5.81247 17.5582 5.70715 17.2931 5.70715C17.0279 5.70715 16.7736 5.81247 16.5861 5.99994L12.0001 10.5859L7.41406 5.99994C7.22653 5.81247 6.97223 5.70715 6.70706 5.70715C6.4419 5.70715 6.18759 5.81247 6.00006 5.99994C5.81259 6.18747 5.70728 6.44178 5.70728 6.70694C5.70728 6.9721 5.81259 7.22641 6.00006 7.41394L10.5861 11.9999L6.00006 16.5859C5.81259 16.7735 5.70728 17.0278 5.70728 17.2929C5.70728 17.5581 5.81259 17.8124 6.00006 17.9999C6.18759 18.1874 6.4419 18.2927 6.70706 18.2927C6.97223 18.2927 7.22653 18.1874 7.41406 17.9999L12.0001 13.4139L16.5861 17.9999C16.7736 18.1874 17.0279 18.2927 17.2931 18.2927C17.5582 18.2927 17.8125 18.1874 18.0001 17.9999C18.1875 17.8124 18.2928 17.5581 18.2928 17.2929C18.2928 17.0278 18.1875 16.7735 18.0001 16.5859L13.4141 11.9999L18.0001 7.41394C18.1875 7.22641 18.2928 6.9721 18.2928 6.70694C18.2928 6.44178 18.1875 6.18747 18.0001 5.99994Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Favorite_Items;
