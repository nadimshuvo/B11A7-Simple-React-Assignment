import React from "react";
import badge from "../../assets/AuctionGallery.svg";
import avatar from "../../assets/avatar.png";
import "./Navbar.css";

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
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#EBF0F5" />
                      <g clip-path="url(#clip0_2_1033)">
                        <path
                          d="M30.0519 21.7517L28.2785 15.3714C27.7587 13.5022 26.6291 11.8605 25.0691 10.707C23.5091 9.55361 21.6084 8.95472 19.669 9.00557C17.7295 9.05642 15.8628 9.75408 14.3654 10.9877C12.868 12.2213 11.8259 13.92 11.4048 15.8138L10.0319 21.9878C9.8802 22.67 9.88371 23.3776 10.0421 24.0582C10.2005 24.7389 10.5098 25.3753 10.9471 25.9204C11.3843 26.4656 11.9385 26.9056 12.5686 27.2079C13.1987 27.5102 13.8886 27.6672 14.5875 27.6671H15.6272C15.8414 28.7221 16.4137 29.6705 17.2472 30.3518C18.0807 31.033 19.1241 31.4051 20.2005 31.4051C21.277 31.4051 22.3204 31.033 23.1538 30.3518C23.9873 29.6705 24.5596 28.7221 24.7739 27.6671H25.556C26.2754 27.6672 26.9851 27.5009 27.6296 27.1813C28.2742 26.8616 28.836 26.3973 29.2714 25.8246C29.7068 25.2519 30.0039 24.5862 30.1394 23.8797C30.275 23.1732 30.2453 22.4449 30.0528 21.7517H30.0519ZM20.2005 29.5338C19.6235 29.5314 19.0613 29.3508 18.5908 29.0167C18.1203 28.6825 17.7646 28.2112 17.5723 27.6671H22.8288C22.6364 28.2112 22.2807 28.6825 21.8102 29.0167C21.3398 29.3508 20.7776 29.5314 20.2005 29.5338V29.5338ZM27.7848 24.6945C27.5247 25.0395 27.1878 25.3191 26.8007 25.5111C26.4136 25.7031 25.9871 25.8022 25.5551 25.8005H14.5875C14.1682 25.8004 13.7543 25.7062 13.3763 25.5247C12.9983 25.3433 12.6659 25.0793 12.4036 24.7522C12.1413 24.4252 11.9558 24.0433 11.8608 23.635C11.7658 23.2266 11.7637 22.8021 11.8547 22.3929L13.2267 16.2179C13.5574 14.7304 14.3759 13.3961 15.552 12.4272C16.7282 11.4582 18.1944 10.9102 19.7178 10.8703C21.2411 10.8304 22.7341 11.3009 23.9593 12.2069C25.1846 13.1129 26.0718 14.4026 26.48 15.8707L28.2533 22.251C28.3705 22.6667 28.3892 23.104 28.3078 23.5281C28.2265 23.9523 28.0474 24.3516 27.7848 24.6945V24.6945Z"
                          fill="#0E2954"
                        />
                      </g>
                      <circle cx="25.5" cy="9.50001" r="6.5" fill="#0E2954" />
                      <path
                        d="M24.1263 11.9367C24.201 12.31 24.3615 12.5937 24.6079 12.7879C24.8543 12.982 25.1866 13.0791 25.6047 13.0791C26.1348 13.0791 26.5231 12.87 26.7695 12.4519C27.0159 12.0337 27.1391 11.3207 27.1391 10.3127C26.9599 10.5665 26.706 10.7644 26.3775 10.9063C26.0564 11.0407 25.7055 11.1079 25.3247 11.1079C24.8394 11.1079 24.3988 11.0108 24.0031 10.8167C23.6074 10.6151 23.2938 10.3201 23.0623 9.93187C22.8383 9.53614 22.7263 9.05827 22.7263 8.49827C22.7263 7.67694 22.9652 7.02361 23.4431 6.53827C23.9284 6.04547 24.593 5.79907 25.4367 5.79907C26.4522 5.79907 27.1727 6.13881 27.5983 6.81827C28.0314 7.49027 28.2479 8.52441 28.2479 9.92067C28.2479 10.8839 28.1658 11.6716 28.0015 12.2839C27.8447 12.8961 27.5684 13.3591 27.1727 13.6727C26.777 13.9863 26.2282 14.1431 25.5263 14.1431C24.7274 14.1431 24.1114 13.934 23.6783 13.5159C23.2452 13.0977 23.0026 12.5713 22.9503 11.9367H24.1263ZM25.5487 10.0327C25.9967 10.0327 26.3476 9.89454 26.6015 9.61827C26.8628 9.33454 26.9935 8.96121 26.9935 8.49827C26.9935 7.98307 26.8554 7.58361 26.5791 7.29987C26.3103 7.00867 25.9407 6.86307 25.4703 6.86307C24.9999 6.86307 24.6266 7.01241 24.3503 7.31107C24.0815 7.60227 23.9471 7.98681 23.9471 8.46467C23.9471 8.92014 24.0778 9.29721 24.3391 9.59587C24.6079 9.88707 25.0111 10.0327 25.5487 10.0327Z"
                        fill="white"
                      />
                      <defs>
                        <clipPath id="clip0_2_1033">
                          <rect
                            width="22.4"
                            height="22.4"
                            fill="white"
                            transform="translate(9 9)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
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