import { ImageCard } from "./ImageCard";
export const ImageCardsHolder = function ({ products }) {
  return (
    <div className="menu">
      <p className="naglowek">Kategorie</p>
      {products.map((product) => (
        <ImageCard key={product.id} {...product} />
      ))}
    </div>
  );
};
