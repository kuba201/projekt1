import { useMemo } from "react";
import { vegeList } from "../consts";

export function useFilteredCategories(categories, vege) {
  return useMemo(
    () =>
      vege
        ? categories.filter((category) => !vegeList.includes(category.id))
        : categories,
    [vege, categories]
  );
}
