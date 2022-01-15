import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import { GoMarkGithub, GoRepo, GoFileCode } from 'react-icons/go';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to={'/'} className={'btn btn-ghost'}>
            Back to Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8 mb-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='card image-full rounded-lg shadow-xl'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0 text-sky-300'>{name}</h2>
                <p className={'text-success'}>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3-xl card-title'>
                {name}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && <div className='mx-1 badge badge-info'>Hireable</div>}
              </h1>
              <p>{bio}</p>
              <div className='my-4 card-actions'>
                <a
                  href={html_url}
                  target={'_blank'}
                  rel={'noreferrer'}
                  className={'btn btn-outline'}>
                  <GoMarkGithub className={'mr-2'} />
                  GitHub Profile
                </a>
              </div>

              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Location</div>
                    <div className='stat-value text-lg'>{location}</div>
                  </div>
                )}
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Website</div>
                    <div className='stat-value text-lg'>
                      <a href={`https://${blog}`} target={'_blank'} rel={'noreferrer'}>
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <div className='stat-value text-lg'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target={'_blank'}
                        rel={'noreferrer'}>
                        @{twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='stats w-full py-5 mb-6 bg-base-100 rounded-lg shadow-md'>
          <div className='stat'>
            <div className='stat-figure text-lime-500'>
              <FaUsers className={'text-lg md:text-5xl'} />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-2xl md:text-4xl'>{followers}</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-info'>
              <FaUserFriends className={'text-lg md:text-5xl'} />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-2xl md:text-4xl'>{following}</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-orange-500'>
              <GoRepo className={'text-lg md:text-5xl'} />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-2xl md:text-4xl'>{public_repos}</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-yellow-500'>
              <GoFileCode className={'text-lg md:text-5xl'} />
            </div>
            <div className='stat-title pr-5'>Public Gists</div>
            <div className='stat-value pr-5 text-2xl md:text-4xl'>{public_gists}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
