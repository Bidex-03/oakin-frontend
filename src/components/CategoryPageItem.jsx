import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";

const CategoryPageItem = ({ product }) => {
  const dispatch = useDispatch();

  const { _id, image, name, description, price } = product;

  function handleAddToCart() {
    // console.log(_id);

    const newItem = {
      id: _id,
      name,
      image,
      description,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li key={_id}>
      <img src={image} />
      <h2 className="my-4 text-3xl font-medium">{name}</h2>
      <p className="font-mono text-2xl">{description}</p>
      <div className="mt-4 flex items-center justify-between font-serif text-3xl">
        <p>${price}</p>
        {/* <button onClick={() => handleAddToCart(_id)}> */}
        <button onClick={handleAddToCart}>
          <CiHeart color="#ff0000" size={25} />
        </button>
      </div>
    </li>
  );
};

export default CategoryPageItem;
