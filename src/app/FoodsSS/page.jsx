import FilterFood from "../Components/Foods/filterFood";
import SearchFood from "../Components/Foods/SearchFood";
import FoodCard2 from "../Components/Shared/FoodCard2";
import NoFood from "../Components/Shared/NoFood";


  // const foods = []

  // FETCH DATA
  const getFoods = async (category="" , search="") => {
       
      const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`
      );
      const data = await res.json();
      return data.data;
  };
  const FoodsSS = async ({searchParams}) =>{
    const sp = await searchParams ;
    console.log(sp, "sp");


    const foods = await getFoods(sp.category, sp.search );
    console.log(foods, "foods");

  
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Delicious Foods 🍔
        </h1>
        <div className="flex gap-2 bg-[#525252] p-2 rounded">
            <SearchFood/>
            <FilterFood/>
        </div>


        {/* Result */}
        {foods.length === 0 ? (
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
 

export default FoodsSS;