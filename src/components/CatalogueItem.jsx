function CatalogueItem({ category }) {
  const { image, name } = category;

  return (
    <>
      <button className="group relative flex">
        <img src={image} alt={name} />
        <span className="absolute bottom-0 flex h-full w-full items-center justify-center bg-black/60 opacity-100 transition-all duration-300">
          <p className="text-4xl font-semibold uppercase text-white">{name}</p>
        </span>
      </button>
    </>
  );
}

export default CatalogueItem;
