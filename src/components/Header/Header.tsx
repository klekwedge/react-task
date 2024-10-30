import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        React task
      </div>
      <ThemeSwitcher />
    </header>
  )
}

export default Header;