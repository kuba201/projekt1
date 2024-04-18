import { NavElement } from "./NavElement";

export const Nav = ({
  categories,
  onSelect,
  vegeSwitchChange,
  currentCategory,
}) => {
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

      <div className="switch-box">
        <label className="switch">
          <input type="checkbox" onChange={vegeSwitchChange} />
          <span className="slider"></span>
        </label>
        <p>vege only</p>
      </div>
    </div>
  );
};
