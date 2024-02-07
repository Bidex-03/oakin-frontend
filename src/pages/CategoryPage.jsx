import { useLoaderData, useParams } from "react-router-dom";
import { getProductsByCategoryID } from "../services/apiProducts";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import image__1 from "../assets/image-2.jpg";

function CategoryPage() {
  const products = useLoaderData();
  console.log(products);

  const category = useParams();
  console.log(category);

  return (
    <div>
      {/* <img src={category.image} alt={`${category.categoryId} image`} /> */}
      <span className="relative -z-10">
        <img
          src={image__1}
          alt="Background image"
          className="h-screen w-full object-cover"
        />

        <h2 className="absolute left-[1%] top-[10%] text-6xl font-semibold text-[#333]">
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
          <ul className="my-8 grid grid-cols-1 gap-10 text-left text-[#333] md:grid-cols-3">
            {products.map((product) => (
              <li key={product._id}>
                <img src={product.image} />
                <h2 className="my-4 text-3xl font-medium">{product.name}</h2>
                <p className="font-mono text-2xl">{product.description}</p>
                <div className="mt-4 flex items-center justify-between font-serif text-3xl">
                  <p>${product.price}</p>
                  <button>
                    <CiHeart color="#ff0000" size={25} />
                    {/* <FaRegHeart color="#ff0000" size={25} /> */}
                  </button>
                </div>
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
