export default function Product({
  title,
  description,
  category,
  price,
  count,
  rate,
  image,
}) {
  return (
    <div className="text-lg bg-gray-200 p-16 flex flex-col rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-50 h-50 object-contain self-center"
      />
      <div className="flex justify-between mt-8">
        <div className="text-gray-400 ">{category}</div>
        <div>
          <span className="text-yellow-500 mr-1">★</span>
          {rate}
        </div>
      </div>
      <div className="font-semibold mt-2">{title}</div>
      <div className="mt-4">
        <details>{description}</details>
      </div>
      <div className="mt-2">
        <div className="text-gray-600">{count} pcs</div>
        <div>${price}</div>
      </div>
    </div>
  );
}
