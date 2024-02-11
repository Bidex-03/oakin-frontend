import { useLoaderData, useParams } from "react-router-dom";
import {
  getCategoryByID,
  getProductsByCategoryID,
} from "../services/apiProducts";
// import image__1 from "../assets/image-2.jpg";
import CategoryPageItem from "../components/CategoryPageItem";
import { useEffect, useState } from "react";

function CategoryPage() {
  const [category, setCategory] = useState(null);

  const products = useLoaderData();
  console.log(products);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await getCategoryByID(categoryId);
        setCategory(categoryData);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  // if (!category) {
  //   return <div>Loading...</div>;
  // }

  // const category = useParams();
  // console.log(category);

  return (
    <div>
      {/* <img src={category.image} alt={`${category.categoryId} image`} /> */}
      <span className="relative -z-10">
        <img
          // src={image__1}
          src={category ? category.image : ""}
          alt="Background image"
          className="h-screen w-full object-cover"
        />

        <h2 className="absolute left-[1%] top-[10%] text-6xl font-semibold text-[#333]">
          {/* {category.categoryId} */}
          {category ? category.name : "Loading"}
        </h2>
      </span>

      <section className="px-10 py-8">
        <h2 className="text-4xl font-medium">
          Available {category ? category.name : "Loading..."} furnitures
        </h2>
        {/* Mapped out the PRODUCTS based on the selected CATEGORY fetched from the API */}
        {/* Might remove this div later */}
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
