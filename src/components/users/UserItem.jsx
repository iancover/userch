import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className='card compact side shadow-md bg-base-200'>
      <div className='card-body flex-row items-center space-x-4'>
        {/* <div> */}
        <div className='avatar'>
          <figure className='shadow w-14 h-14'>
            <img src={avatar_url} className={'mask mask-squircle'} alt='Profile' />
          </figure>
        </div>
        {/* </div> */}
        <div>
          <h2 className='card-title'>
            <Link
              to={`/users/${login}`}
              className={'text-base-content hover:text-sky-500 hover:underline'}>
              {login}
            </Link>
          </h2>
          <a
            href={html_url}
            className={'text-base-content text-opacity-40 hover:text-teal-500 hover:underline'}>
            <FaGithub className={'inline text-md align-middle mr-2'} />
            <span className={'align-text-top'}>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
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
