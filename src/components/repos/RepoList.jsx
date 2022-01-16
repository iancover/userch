import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  return (
    <div className={'card bg-base-100 rounded-lg shadow-lg'}>
      <div className='card-body'>
        <h2 className='card-title my-4 text-3xl font-bold'>Latest Repositories</h2>
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
