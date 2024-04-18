import { NavElement } from "./NavElement";
import { Switch } from "./Switch";

export const Nav = ({
  isVege,
  categories,
  onSelect,
  vegeSwitchChange,
  currentCategory,
}) => {
  console.log(isVege);
  return (
    <div className="categories">
      <p className="naglowek">Typy</p>

      {categories.map((category) => (
        <NavElement
          label={category.name}
          key={category.id}
          ClickCategoryChange={() => onSelect(category)}
          selected={category.id === currentCategory?.id}
        />
      ))}
      <Switch checked={isVege} onVegeChange={vegeSwitchChange} />
    </div>
  );
};
