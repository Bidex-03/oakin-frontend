function CatalogueItem({ category }) {
  const { image, name } = category;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <button className="group relative flex">
        <img src={image} alt={name} />
        <span className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <p className="text-4xl font-semibold uppercase text-white">{name}</p>
        </span>
      </button>
    </div>
  );
}

export default CatalogueItem;
