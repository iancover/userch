import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <Link to={`/user/${login}`}>
      <div
        className={
          'card compact card-side bg-base-200 shadow-md hover:bg-base-300 hover:shadow-lg hover:shadow-white/10'
        }>
        <div className='card-body flex-row items-center space-x-4'>
          <div className='avatar'>
            <figure className='shadow w-14 h-14'>
              <img src={avatar_url} className={'mask mask-squircle'} alt='Profile' />
            </figure>
          </div>
          <div>
            <h2 className='card-title text-base-content hover:text-sky-500 hover:underline'>
              {login}
            </h2>
            <button
              className={'text-base-content text-opacity-40 hover:text-teal-500 hover:underline'}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                window.open(html_url);
              }}>
              <FaGithub className={'inline text-md align-middle mr-2'} />
              <span className={'align-text-top'}>GitHub Profile</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// USER CARD OPTION 2
/* 
<div className={'card text-center shadow-md bg-neutral'}>
  <figure className={'px-10 pt-10'}>
    <img src={avatar_url} className={'mask mask-squircle'} alt={login} />
  </figure>
  <div className='card-body'>
    <h2 className={'card-title text-info'}>
      <span className={'text-base-content italic'}>User: </span>
      {login}
    </h2>
    <div className={'card-actions justify-center'}>
      <button className={'btn btn-info btn-outline btn-wide'}>
        <Link to={html_url} />
        Profile
      </button>
    </div>
  </div>
</div> 
*/
