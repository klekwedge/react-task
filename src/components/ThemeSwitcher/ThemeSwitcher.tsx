import { useEffect, useState } from 'react';
import classes from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button type="button" className={classes.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <img src={`${isDark ? '/icon-sun.svg' : '/icon-moon.svg'}`} alt="theme icon" className={classes.icon} />
    </button>
  );
}

export default ThemeSwitcher;
