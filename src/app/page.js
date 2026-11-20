"use client";

import React, { useEffect, useState } from "react";
 
 
import NoFood from "./Components/Shared/NoFood";
import FoodCard2 from "./Components/Shared/FoodCard2";
 

export default function Home() {
 const [allFoods, setAllFoods] = useState([]);
   const [foods, setFoods] = useState([]);
   const [loading, setLoading] = useState(false);
 
   const [searchingInp, setSearchingInp] = useState("");
   const [filterInp, setFilterInp] = useState("");
 
   const fetchFoods = () => {
     setLoading(true);
 
     const data = [
       {
         id: 2,
         title: "Mozzarella Stuffed Meatballs",
         price: 450,
         rating: 4.9,
         category: "Burger",
         image:
           "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop",
       },
       {
         id: 3,
         title: "Crispy Breaded Chicken",
         price: 350,
         rating: 4.7,
         category: "Burger",
         image:
           "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
       },
       {
         id: 4,
         title: "Grilled Beef Steak",
         price: 650,
         rating: 4.8,
         category: "Burger",
         image:
           "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
       },
       {
         id: 5,
         title: "Cheesy Pepperoni Pizza",
         price: 500,
         rating: 4.9,
         category: "Pizza",
         image:
           "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop",
       },
       {
         id: 6,
         title: "Chicken Biryani",
         price: 300,
         rating: 4.7,
         category: "Rice",
         image:
           "https://images.unsplash.com/photo-1630851840633-f96999247032?w=400&h=300&fit=crop",
       },
       {
         id: 7,
         title: "Veggie Burger",
         price: 250,
         rating: 4.5,
         category: "Burger",
         image:
           "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
       },
       {
         id: 8,
         title: "Pasta Alfredo",
         price: 400,
         rating: 4.6,
         category: "Dessert",
         image:
           "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
       },
       {
         id: 9,
         title: "Fried Chicken Wings",
         price: 320,
         rating: 4.8,
         category: "Rice",
         image:
           "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop",
       },
     ];
 
     setAllFoods(data);
     setFoods(data);
     setLoading(false);
   };
 
   useEffect(() => {
     fetchFoods();
   }, []);
 
   // SEARCH (always from allFoods)
   const handleSearch = () => {
     const result = allFoods.filter((food) =>
       food.title.toLowerCase().includes(searchingInp.toLowerCase())
     );
 
     setFoods(result);
   };
 
   // FILTER (always from allFoods)
   const handleFilter = (e) => {
     const value = e.target.value;
     setFilterInp(value);
 
     if (!value) {
       setFoods(allFoods);
       return;
     }
 
     const result = allFoods.filter((food) => food.category === value);
     setFoods(result);
   };
 
   return (
     <div className="min-h-screen py-10 px-4">
       <div className="max-w-6xl mx-auto">
         <h1 className="text-4xl font-bold mb-8 text-center">
           Discover Delicious Foods 🍔
         </h1>
 
         {/* Search & Filter Bar */}
         <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-4 bg-zinc-900 p-4 rounded-2xl shadow-lg">
           
           {/* Search */}
           <div className="flex-1">
             <input
               type="text"
               value={searchingInp}
               onChange={(e) => setSearchingInp(e.target.value)}
               placeholder="Search foods..."
               className="w-full px-5 py-3 bg-zinc-800 text-white rounded-xl outline-none"
             />
           </div>
 
           {/* Button */}
           <button
             className="px-5 py-3 bg-orange-500 text-white rounded-md cursor-pointer"
             onClick={handleSearch}
           >
             Search
           </button>
 
           {/* Filter */}
           <select
             className="px-5 py-4 bg-zinc-800 rounded cursor-pointer"
             onChange={handleFilter}
             value={filterInp}
           >
             <option value="">All Categories</option>
             <option value="Burger">Burger</option>
             <option value="Pizza">Pizza</option>
             <option value="Dessert">Dessert</option>
             <option value="Rice">Rice</option>
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
               <FoodCard2 key={food.id} food={food} />
             ))}
           </div>
         )}
       </div>
     </div>
   );
 };
