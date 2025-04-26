import React from "react";
import badge from "../../assets/AuctionGallery.svg";

import { GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged  } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";
import { useEffect } from "react";

const providerGoogle = new GoogleAuthProvider();

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleProvider = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
      // Don't need to manually setUser here anymore
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };
  

  console.log(user);

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
              
              <div className="dropdown dropdown-end">
                {user ? (
                  <>
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      {user.photoURL && (
                        <img
                          className="border border-black rounded-full"
                          alt="user"
                          src={user.photoURL}
                        />
                      )}
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <a className="justify-between">{user?.displayName}</a>
                      </li>
                      <li>
                        <a>Email: {user?.email}</a>
                      </li>
                      <li onClick={handleLogout}>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </>
                ) : (
                  <button
                    onClick={handleGoogleProvider}
                    className="btn btn-dash bg-amber-200 hover:bg-blue-200 text-xl text-black mr-2"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
