import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} ⭐</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
        <ul className="flex flex-wrap gap-2">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-md text-sm"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Price</h2>
        <p className="text-lg font-bold text-green-600">
          ${property.price} / night
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {property.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {property.reviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-yellow-500">{review.rating} ⭐</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
