import { useLoaderData } from "react-router-dom";
import { getProductsByCategoryID, getCategoryByID } from "../services/apiProducts";
import CategoryPageItem from "../components/CategoryPageItem";

function CategoryPage() {
  const categoryDetails = useLoaderData();
  const products = categoryDetails.products;
  const category = categoryDetails.category;

  return (
    <div>
      <span className="relative -z-10">
        <img
          src={category ? category.image : ""}
          alt="Background image"
          className="h-screen w-full object-cover"
        />

        <h2 className="absolute left-[1%] top-[10%] text-6xl font-semibold text-[#333]">
          {category ? category.name : "Loading..."}
        </h2>
      </span>

      <section className="px-10 py-8">
        <h2 className="text-4xl font-medium">
          Available {category ? category.name : "Loading..."} furnitures
        </h2>
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
  console.log("categoryId:", categoryId);

  // Fetch category details and products together
  const [category, products] = await Promise.all([
    getCategoryByID(categoryId),
    getProductsByCategoryID(categoryId)
  ]);

  // Return an object containing both category and products
  return { category, products };
}

export default CategoryPage;
