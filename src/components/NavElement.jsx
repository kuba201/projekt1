import clsx from "clsx";

export const NavElement = ({ label, ClickCategoryChange, selected }) => {
  return (
    <button
      type="button"
      onClick={ClickCategoryChange}
      className={clsx({ buttons: true, selected })}
    >
      {label}
    </button>
  );
};
