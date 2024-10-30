import classes from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={classes.loader__container}>
      <div className={classes.loader} />
    </div>
  );
}

export default Spinner;