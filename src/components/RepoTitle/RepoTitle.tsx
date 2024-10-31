import { observer } from 'mobx-react-lite';
import { Repository } from '../../types';

const RepoTitle = observer(({ repository }: { repository: Repository }) => (
    <div>
      <h2>{repository.name}</h2>
      <h3>{repository.owner.login}</h3>
    </div>
  ));

export default RepoTitle;
