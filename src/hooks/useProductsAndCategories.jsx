import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../data";

export const useProductsAndCategories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then((res) => {
        setProducts(res[0]);
        setCategories(res[1]);
      })
      .catch((err) => console.log(err));
    return () => {
      console.log("Clean up");
    };
  }, []);
  return { products, categories };
};
