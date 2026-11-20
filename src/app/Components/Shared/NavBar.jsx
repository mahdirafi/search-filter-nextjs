"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import MyLink from "./MyLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItem = [
    { path: "/", text: "Home" },
    { path: "/FoodsCC", text: "FoodsCC" },
    { path: "/FoodsSS", text: "FoodsSS" },
    { path: "/FoodsAPI", text: "FoodsCC-API" },
    { path: "/Contact", text: "Contact" },
  ];

  return (
    <nav className="bg-[#1d232a] shadow">
      <div className="flex justify-between items-center py-3 container mx-auto px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-purple-500">
            HERP IO
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[16px] font-semibold">
          {navItem.map((item, index) => (
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
          <FaGithub size={20} />
          Contribute
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">

          {/* 🔍 Search + Filter */}
          <div className="flex flex-col gap-3 w-full">
            
            {/* Search */}
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Search food..."
                className="flex-1 min-w-0 px-3 py-2 rounded bg-zinc-800 text-white outline-none"
              />
              <button className="shrink-0 px-3 py-2 bg-purple-600 rounded text-white">
                Search
              </button>
            </div>

            {/* Filter */}
            <select className="w-full px-3 py-2 bg-zinc-800 text-white rounded">
              <option value="">All Categories</option>
              <option value="burger">burger</option>
              <option value="dish">dish</option>
              <option value="biriyani">biriyani</option>
              <option value="beverage">beverage</option>
            </select>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-4 text-base font-semibold">
            {navItem.map((item, index) => (
              <MyLink key={index} href={item.path}>
                {item.text}
              </MyLink>
            ))}
          </ul>

          {/* Button */}
          <button className="w-full flex justify-center items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
            <FaGithub size={20} />
            Contribute
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;