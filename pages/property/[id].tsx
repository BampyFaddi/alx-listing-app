import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  // Convert id to string for matching
  const idStr = Array.isArray(id) ? id[0] : id.toString();

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) =>
      item.id.toString() === idStr || // match numeric id
      item.name.toLowerCase().replace(/\s+/g, "-") === idStr // match slug
  );

  if (!property) {
    return (
      <p className="text-center mt-10 text-red-500">
        Property not found 😢
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyDetail property={property} />
    </div>
  );
}
