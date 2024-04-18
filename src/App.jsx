import { useState, useMemo } from "react";
import { ImageCardsHolder, Nav } from "./components";
import { vegeList } from "./consts";
import { useProductsAndCategories } from "./hooks";

export default function App() {
  const { products, categories } = useProductsAndCategories();
  const [currentCategory, setCurrentCategory] = useState(null);
  //Custom hook*
  const [vege, setVege] = useState(false);
  const filtredProducts = useMemo(() => {
    if (currentCategory)
      return products.filter((product) => product.type === currentCategory.id);
    else
      return vege
        ? products.filter((product) => !vegeList.includes(product.type))
        : products;
  }, [currentCategory, products, vege]);

  const filteredCategories = useMemo(
    () =>
      vege
        ? categories.filter((category) => !vegeList.includes(category.id))
        : categories,
    [vege, categories]
  );

  const handleSwitchVege = () => {
    setVege(!vege);
    setCurrentCategory(null);
  };

  return (
    <div className="main">
      <ImageCardsHolder products={filtredProducts} />
      <Nav
        categories={filteredCategories}
        currentCategory={currentCategory}
        onSelect={(selected) =>
          setCurrentCategory(selected === currentCategory ? null : selected)
        }
        vegeSwitchChange={handleSwitchVege}
      />
    </div>
  );
}
