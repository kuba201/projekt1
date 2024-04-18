import { ImageCardsHolder, Nav } from "./components";
import { useContent } from "./hooks";

export default function App() {
  const {
    vege,
    filtredCategories,
    filtredProducts,
    switchVege,
    currentCategory,
    setCurrentCategory,
  } = useContent();

  return (
    <div className="main">
      <ImageCardsHolder products={filtredProducts} />
      <Nav
        isVege={vege}
        categories={filtredCategories}
        currentCategory={currentCategory}
        onSelect={(selected) =>
          setCurrentCategory(selected === currentCategory ? null : selected)
        }
        vegeSwitchChange={switchVege}
      />
    </div>
  );
}
