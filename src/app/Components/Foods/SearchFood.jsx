"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchFood = () => {
  const [ searchingInp, setSearchingInp ] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();
  console.log(searchParams , "params");

  const handleSearch = () =>{
    const params = new URLSearchParams(searchParams);
    
    if(searchingInp){
      params.set("search" , searchingInp);
    }else{
      params.delete("search")
    }
    route.push(`${pathname}?${params.toString()}`);


    console.log(params, "params");
    console.log(searchingInp, "paisi");
  };

  return (
    <div className="flex gap-2 w-full ">
      <input
        type="text"
        value={searchingInp}
        onChange={(e) => setSearchingInp(e.target.value)}
        placeholder="Search foods..."
        className="flex-1 px-5 py-3 bg-zinc-800 text-white rounded-xl outline-none "
      />

      <button
        onClick={handleSearch}
        className="px-5 py-3 bg-orange-500 text-white rounded-md cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFood;