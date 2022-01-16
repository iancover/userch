import {
  GoLink,
  GoBook,
  GoEye,
  GoStar,
  GoIssueOpened,
  GoRepoForked,
} from 'react-icons/go';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className={'card mb-2 bg-gray-800 rounded-md hover:bg-gray-900'}>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <GoLink className={'inline mr-1'} /> {name}
          </a>
        </h3>
        <div className='mb-3'>
          <GoBook className={'inline mr-3 mb-1'} /> {description}
        </div>
        <div>
          <div className='badge badge-warning badge-lg mr-2'>
            <GoStar className={'mr-2'} /> {stargazers_count}
          </div>
          <div className='badge badge-info badge-lg mr-2'>
            <GoEye className={'mr-2'} /> {watchers_count}
          </div>
          <div className='badge badge-success badge-lg mr-2'>
            <GoRepoForked className={'mr-2'} /> {forks}
          </div>
          <div className='badge badge-error badge-lg mr-2'>
            <GoIssueOpened className={'mr-2'} /> {open_issues}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
