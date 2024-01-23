function CatalogueItem({ category }) {
  const { image, name } = category;

  return (
    <>
      <button className="group relative flex">
        <img src={image} alt={name} />
        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">{name}</p>
        </span>
      </button>
    </>
  );
}

export default CatalogueItem;
