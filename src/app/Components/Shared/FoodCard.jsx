import Image from "next/image";

const FoodCard = ({ food }) => {
  return (
    <div className="card bg-base-200 shadow-xl">

      <figure className="relative w-full h-48">
        <Image
          src={food.image_link}
          alt={food.alternative_names}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
          loading="eager"
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

export default FoodCard;