export default function Product({
  title,
  description,
  category,
  price,
  count,
  rating,
  image,
}) {
  return (
    <div className="w-50 ml-8 text-lg">
      <img src={image} alt={title} />
      <div className="flex justify-between">
        <div className="text-gray-400 ">{category}</div>
        <div>
          <span className="text-yellow-500 mr-1">★</span>
          {rating}
        </div>
      </div>
      <div className="font-semibold mt-2">{title}</div>
      <div>{description}</div>
      <div className="mt-2">
        <div className="text-gray-600">{count}</div>
        <div>{price}</div>
      </div>
    </div>
  );
}
