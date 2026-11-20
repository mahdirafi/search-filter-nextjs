"use client";

import React, { useEffect, useState } from "react";
import NoFood from "../Components/Shared/NoFood";
import FoodCard from "../Components/Shared/FoodCard";

const FoodsSS = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchingInp, setSearchingInp] = useState("");
  const [filterInp, setFilterInp] = useState("");

  // FETCH DATA
  const fetchFoods = async () => {
      setLoading(true);
      const res = await fetch(
        "https://phi-lab-server.vercel.app/api/v1/lab/foods"
      );
      const data = await res.json();
      setAllFoods(data.data);
      setFoods(data.data);
      setLoading(false);
  };
  useEffect(() => {
    fetchFoods();
  }, []);

  // SEARCH
  const handleSearch = () => {
     const expectedFoods = foods.filter((food) => 
          food.dish_name.toLowerCase().includes(searchingInp.toLowerCase()));
     setFoods(expectedFoods);
     console.log(expectedFoods, "expectedFoods");
  };
 // FILTER
  const handleFilter = (e) => {
     const value = e.target.value;
     setFilterInp(value);

  if (value === "") {
    setFoods(allFoods);
    return;
  }
     const expectedFoods = allFoods.filter((food) => food.category === value );
     setFoods(expectedFoods);
     console.log(expectedFoods, "expectedFoods");
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Delicious Foods 🍔
        </h1>

        {/* Search & Filter */}
        <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-4 bg-zinc-900 p-4 rounded-2xl shadow-lg">

          {/* Search Input */}
          <input
            type="text"
            value={searchingInp}
            onChange={(e) => setSearchingInp(e.target.value)}
            placeholder="Search foods..."
            className="flex-1 px-5 py-3 bg-zinc-800 text-white rounded-xl outline-none"
          />

          {/* Search Button */}
          <button
            className="px-5 py-3 bg-orange-500 text-white rounded-md"
            onClick={handleSearch} >
            Search
          </button>

          {/* Filter */}
          <select
            className="px-5 py-4 bg-zinc-800 rounded text-white"
            onChange={handleFilter}
            value={filterInp}
          >
            <option value="">All Categories</option>
            <option value="burger">Burger</option>
            <option value="dish">Dish</option>
            <option value="biriyani">Biriyani</option>
            <option value="beverage">Beverage</option>
          </select>
        </div>

        {/* Result */}
        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-xl text-zinc-500">
              Loading delicious foods..🍔
            </p>
          </div>
        ) : foods.length === 0 ? (
          <NoFood />
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodsSS;