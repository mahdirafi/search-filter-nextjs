"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
 

const FilterFood = ( ) => {
     
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const route = useRouter();

 const handleFilter = (category) =>{
    const params = new URLSearchParams(searchParams);
    
    if(category){
      params.set("category" , category);
    }else{
      params.delete("category")
    }
    route.push(`${pathname}?${params.toString()}`);


    console.log(params, "params");
    console.log(pathname, "paisi");
  };

  return (
    <select
      className="px-5 py-3 bg-zinc-800 rounded text-white cursor-pointer"
        
        onChange={(e) => handleFilter(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="burger">burger</option>
      <option value="dish">dish</option>
      <option value="biriyani">biriyani</option>
      <option value="beverage">beverage</option>
    </select>
  );
};

export default FilterFood;