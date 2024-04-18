export const categoriesDataApiUrl =
  "https://api-eko-bazarek.azurewebsites.net/api/products/types";

export const getCategories = async () => {
  const res = await fetch(categoriesDataApiUrl);
  if (res.ok) return await res.json();
};
