import { useLoaderData, useParams } from "react-router-dom";
import { getProductsByCategoryID } from "../services/apiProducts";

function CategoryPage() {
  const products = useLoaderData();
  console.log(products);

  const category = useParams();
  console.log(category);

  return (
    <div>
      <h2>Available {category.categoryId} furnitures</h2>

      {/* Mapped out the PRODUCTS based on the selected CATEGORY fetched from the API */}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
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
