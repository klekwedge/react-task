import { useEffect, useState } from 'react';
import { Repository } from '../../types';

function List() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchList = async () => {
    const res = await fetch('https://api.github.com/search/repositories?q=javascript&sort=starts&order&page=2');
    const data = await res.json();

    setRepositories(data.items);
  };

  useEffect(() => {
    fetchList();
  }, []);

  console.log(repositories)

  return (
    <ul>
      {repositories.map((repository) => (
        <li key={repository.id}>
            cc
            <img src={repository.archive_url} alt={repository.archive_url}/>
        </li>
      ))}
    </ul>
  );
}

export default List;
