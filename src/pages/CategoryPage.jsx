import { useLoaderData, useParams } from "react-router-dom";
import { getProductsByCategoryID } from "../services/apiProducts";

import image__1 from "../assets/image-2.jpg";

function CategoryPage() {
  const products = useLoaderData();
  console.log(products);

  const category = useParams();
  console.log(category);

  return (
    <div>
      {/* <img src={category.image} alt={`${category.categoryId} image`} /> */}
      <span className="relative">
        <img
          src={image__1}
          alt="Background image"
          className="h-screen w-full object-cover"
        />

        <h2 className="absolute top-[10%] left-[1%] text-[#333] font-semibold text-6xl">
          Living Room
        </h2>
      </span>

      <section className="px-10 py-8">
        <h2 className="text-4xl font-medium">
          Available {category.categoryId} furnitures
        </h2>
        {/* Mapped out the PRODUCTS based on the selected CATEGORY fetched from the API */}
        {/* Might remove this div later */}
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-[#333]">
            {products.map((product) => (
              <li key={product._id}>
                <img src={product.image} />
                <h2 className="text-3xl font-medium my-4">{product.name}</h2>
                <p className="text-2xl font-mono">{product.description}</p>
              </li>
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
