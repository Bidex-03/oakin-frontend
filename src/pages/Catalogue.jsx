import kitchen1 from "../assets/kitchen_bg_1.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import Card from "../components/Card";

import { Link, useLoaderData } from "react-router-dom";
import CatalogueItem from "../components/CatalogueItem";
import { getCategories } from "../services/apiProducts";

const Catalogue = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <main>
      <section className="relative -z-10">
        <span className="h-100 relative flex">
          <img
            src={kitchen1}
            alt="Kitchen interior"
            // className="w-full md:h-[90vh]"
            className="h-screen w-full object-cover"
          />
          <div className="absolute left-[5%] right-0 top-[20%] text-white">
            <h2 className="text-6xl font-semibold">Kitchen Set</h2>
            <p className="mt-4 text-3xl font-semibold">
              Checkout our latest and trendy kitchen furniture set
            </p>
            <button className="mt-4 flex gap-8 rounded-full border-2 border-white px-4 py-6 text-3xl">
              View Kitchen sets
              <span>
                <BsArrowRightCircle size={25} />
              </span>
            </button>
          </div>
        </span>
      </section>

      <section className="mx-[4rem] my-10">
        <h2 className="mb-6 text-4xl font-semibold">Furniture Categories</h2>

        {/* GRID CONTAINER(CATALOGUE CARDS) */}
        <Card />

        {/* Mapped out the CATEGORIES fetched from the API */}
        {categories.map((category) => (
          <Link to={`/catalogue/${category.categoryId}`} key={category._id}>
            <CatalogueItem category={category} />
          </Link>
        ))}
      </section>
    </main>
  );
};

// This is a loader provided by react-router-dom to load data. It's responsible for fetching the categories
export async function loader() {
  const categories = await getCategories();
  return categories;
}

export default Catalogue;
