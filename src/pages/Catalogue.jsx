import { Link, useLoaderData, useNavigation } from "react-router-dom";

import kitchen1 from "../assets/kitchen_bg_1.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import CatalogueItem from "../components/CatalogueItem";
import { getCategories } from "../services/apiProducts";
import Loader from "../components/Loader";

const Catalogue = () => {
  const categories = useLoaderData();
  console.log(categories);

  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <main>
      <section>
        <span className="h-100 relative flex">
          <img
            src={kitchen1}
            alt="Kitchen interior"
            className="h-screen w-full object-cover"
          />
          <div className="absolute left-[5%] right-0 top-[20%] text-white">
            <h2 className="text-6xl font-semibold">Kitchen Set</h2>
            <p className="mt-4 text-3xl font-semibold">
              Checkout our latest and trendy kitchen furniture set
            </p>
            <Link
              to="/app/catalogue/2"
              className="mt-4 flex w-[75%] gap-8 rounded-full border-2 border-white px-4 py-6 text-3xl md:w-[18%]"
            >
              View Kitchen sets
              <span>
                <BsArrowRightCircle size={25} />
              </span>
            </Link>
          </div>
        </span>
      </section>

      <section className="mx-[4rem] my-10">
        <h2 className="mb-6 text-4xl font-semibold">Furniture Categories</h2>

        {/* THE LOADING COMPONENT WILL DISPLAY WHEN navigation.state === "loading"(check RootLayout for loading state code) */}
        {isLoading && <Loader />}

        {/* Mapped out the CATEGORIES fetched from the API */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {categories.map((category) => (
            <Link to={`/app/catalogue/${category.categoryId}`} key={category._id}>
              <CatalogueItem category={category} />
            </Link>
          ))}
        </div>
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
