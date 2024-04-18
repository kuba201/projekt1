import { useMemo } from "react";
import { vegeList } from "../consts";

export function useFilteredProducts(currentCategory, products, vege) {
  return useMemo(() => {
    if (currentCategory)
      return products.filter((product) => product.type === currentCategory.id);
    else
      return vege
        ? products.filter((product) => !vegeList.includes(product.type))
        : products;
  }, [currentCategory, products, vege]);
}
