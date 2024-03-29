import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../search";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full ${scrolled ? 'bg-black bg-opacity-100' : 'bg-transparent'} z-[50]`}>
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            APTLIFY
          </h1>
        </Link>

    
      
      <div class="flex items-center gap-4">
      <div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				{/* <input type="search" name="Search" placeholder="Search for Movies" className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" /> */}
        <Search />
			</div>

        {/* <div class="sm:flex sm:gap-4">
          <Link to="/signin">
          <button
            class="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
      
          >
            Signin
          </button>
          </Link>

          <div class="hidden sm:flex">
            <Link to="/signup">
            <button
              class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600"
            
            >
              Sign up
            </button>
            </Link>
          </div>
        </div> */}

        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    

    </header>
  );
};

export default Navbar;
