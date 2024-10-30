/* eslint-disable react/require-default-props */
import classes from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button type='submit' className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
