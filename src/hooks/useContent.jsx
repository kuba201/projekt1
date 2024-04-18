import { useFilters } from "./useFilters";
import { useProductsAndCategories } from "./useProductsAndCategories";

export const useContent = () => {
  const { products, categories } = useProductsAndCategories();
  const {
    vege,
    filtredCategories,
    filtredProducts,
    switchVege,
    currentCategory,
    setCurrentCategory,
  } = useFilters(categories, products, null, false);
  return {
    vege,
    filtredCategories,
    filtredProducts,
    switchVege,
    currentCategory,
    setCurrentCategory,
  };
};
