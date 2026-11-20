import Image from "next/image";

const FoodCard2 = ({ food }) => {
  return (
    <div className="card bg-base-200 shadow-xl">

      <figure className="relative w-full h-48">
        <Image
          src={food.image_link}
          alt={food.alternative_names}
          width={300}
          height={250}
          className="w-full h-auto object-cover m-8"
           
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{food.dish_name}</h2>

        <p>💰 ${food.price}</p>

        <div className="flex justify-between items-center">
          <button className="btn btn-sm btn-outline">
            Details
          </button>

          <div className="text-yellow-400">
            ⭐ {food.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard2;