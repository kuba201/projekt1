export const ProductsApiUrl =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories";

export const getProducts = async () => {
  const res = await fetch(ProductsApiUrl);
  if (res.ok) return await res.json();
};
