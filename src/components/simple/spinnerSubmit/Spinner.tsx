import classes from "./style.module.scss";

const Spinner = () => {
  return (
    <div className={classes.loader__wrap}>
      <div className={classes.loader__opacity}></div>
      <div className={classes.loader__center}>
        <div className={classes.loader}></div>
      </div>
    </div>
  );
};

export { Spinner };
