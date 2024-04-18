import { useState, useMemo } from "react";
import { vegeList } from "../consts";

export const useFilters = (
  categories = [],
  products = [],
  currentCategoryProp = null,
  vegeProp
) => {
  const [currentCategory, setCurrentCategory] = useState(currentCategoryProp);
  const [vege, setVege] = useState(vegeProp);
  const filtredCategories = useMemo(
    () =>
      vege
        ? categories.filter((category) => !vegeList.includes(category.id))
        : categories,
    [vege, categories]
  );
  const filtredProducts = useMemo(() => {
    if (currentCategory)
      return products.filter((product) => product.type === currentCategory.id);
    else
      return vege
        ? products.filter((product) => !vegeList.includes(product.type))
        : products;
  }, [currentCategory, products, vege]);
  const switchVege = (vegeProp) => {
    setVege(vegeProp);
    setCurrentCategory(null);
  };
  console.log(vege);
  return {
    filtredCategories,
    filtredProducts,
    vege,
    setVege,
    currentCategory,
    setCurrentCategory,
    switchVege,
  };
};
