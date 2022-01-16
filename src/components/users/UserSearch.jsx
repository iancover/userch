import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter text to search users.', 'error');
    } else if (text.length <= 2) {
      clearUsers();
      setText('');
      setAlert('User not found, please enter a valid username.', 'warning');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div
      className={
        'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 mb-8'
      }>
      {users.length > 0 ? (
        <>
          <div className={'col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3'}>
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <div className='relative'>
                  <input
                    type='text'
                    className={'input input-lg w-full pr-30 text-black bg-gray-200 rounded-xl'}
                    value={text}
                    onChange={handleChange}
                    placeholder={'Search'}
                    autoFocus={true}
                  />
                  <button
                    className={
                      'btn btn-lg absolute top-0 right-0 w-24 md:w-36 lg:w-44 rounded-l-none'
                    }>
                    GO
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={'col-span-1'}>
            <button className='btn btn-ghost btn-lg min-w-full' onClick={clearUsers}>
              Clear
            </button>
          </div>
        </>
      ) : (
        <div className={'col-span-3 md:col-span-4 lg:col-span-4 xl:col-span-4'}>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <div className='relative'>
                <input
                  type='text'
                  className={'input input-lg w-full text-black bg-gray-200 rounded-xl'}
                  value={text}
                  onChange={handleChange}
                  placeholder={'Search'}
                  autoFocus={true}
                />
                <button
                  className={
                    'btn btn-lg absolute top-0 right-0 w-24 sm:w-36 lg:w-48 rounded-l-none'
                  }>
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
