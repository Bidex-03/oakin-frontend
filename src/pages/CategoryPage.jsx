import { useLoaderData, useParams } from "react-router-dom";
import { getProductsByCategoryID } from "../services/apiProducts";
import CategoryPageItem from "../components/CategoryPageItem";

function CategoryPage() {
  const products = useLoaderData();
  console.log(products);

  const category = useParams();
  console.log(category);

  // Determine the category name based on categoryId
  const getNameByCategoryId = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "Living Room";
      case "2":
        return "Kitchen";
      case "3":
        return "Bedroom";
      case "4":
        return "Dining";
      case "5":
        return "Balcony";
      case "6":
        return "Office";
      default:
        return "";
    }
  };

  // Determine the image URL based on categoryId
  const getImageByCategoryId = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      case "2":
        return "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      case "3":
        return "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      case "4":
        return "https://images.pexels.com/photos/4778354/pexels-photo-4778354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      case "5":
        return "https://images.pexels.com/photos/1662549/pexels-photo-1662549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      case "6":
        return "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      default:
        return "";
    }
  };

  const name = getNameByCategoryId(category.categoryId);
  const image = getImageByCategoryId(category.categoryId);

  return (
    <div>
      <span className="relative -z-10">
        <img
          src={image}
          alt="Background image"
          className="h-screen w-full object-cover "
        />

        <h2 className="absolute left-[1%] top-[10%] text-6xl font-semibold text-[#333]">
          {name}
        </h2>
      </span>

      <section className="px-10 py-8">
        <h2 className="text-4xl font-medium">Available {name} furnitures</h2>
        {/* Mapped out the PRODUCTS based on the selected CATEGORY fetched from the API */}
        <div>
          <ul className="my-8 grid grid-cols-1 gap-10 text-left text-[#333] md:grid-cols-3">
            {products.map((product) => (
              <CategoryPageItem product={product} key={product._id} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export async function loader({ params }) {
  const categoryId = params.categoryId;
  console.log(categoryId);
  const products = await getProductsByCategoryID(categoryId);
  return products;
}

export default CategoryPage;
