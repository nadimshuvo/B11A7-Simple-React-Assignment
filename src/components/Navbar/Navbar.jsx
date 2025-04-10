import React from "react";
import badge from "../../assets/AuctionGallery.svg";
import avatar from "../../assets/avatar.png";
import notificationIcon from "../../assets/notifications.svg";

const Navbar = () => {
  return (
    <section className="bg-[#EBF0F5]">
      <div className="container mx-auto py-0.5">
        <div className="navbar">
          <div className="navbar-start">
            <a className="text-xl">
              <img src={badge} />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex gap-20">
            <ul className="menu menu-horizontal px-1 poppins-regular text-black text-[22px] leading-8 gap-20">
              <li className="hover:text-blue-500 hover:underline">
                <a>Home</a>
              </li>
              <li className="hover:text-blue-500 hover:underline">
                <a>Auctions</a>
              </li>
              <li className="hover:text-blue-500 hover:underline">
                <a>Categories</a>
              </li>
              <li className="hover:text-blue-500 hover:underline">
                <a>How to works</a>
              </li>
            </ul>
          </div>
          {/* Right Section Notifications and Avater */}
          <div className="navbar-end">
            <div className="flex-none">
              <div className="dropdown dropdown-end mr-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:border-blue-500"
                >
                  <div className="indicator">
                    <img src={notificationIcon}/>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={avatar} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;