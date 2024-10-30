import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../../stores/UserStore';
import Button from '../Button/Button';
import classes from './Search.module.scss';

const Search = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const { hasError, getGitHubUser } = UserStore;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue) {
      getGitHubUser(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.search}>
        <label htmlFor="search" className={classes.label}>
          <img src="/icon-search.svg" alt="search icon" />
        </label>
        <input
          id="search"
          className={classes.textField}
          type="text"
          name="username"
          placeholder="Search GitHub username…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {hasError && <div className={classes.error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
});

export default Search;
