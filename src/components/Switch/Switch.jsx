import "./assets/icon.png";
import classes from "./Switch.module.css";

export const Switch = ({ label = "vege only", checked, onVegeChange }) => {
  return (
    <div className={classes["switch-box"]}>
      <label className={classes["switch"]}>
        <input
          checked={checked}
          type="checkbox"
          onChange={(e) => onVegeChange(e.target.checked)}
        />
        <span className={classes.slider}></span>
      </label>
      <p>{label}</p>
    </div>
  );
};
