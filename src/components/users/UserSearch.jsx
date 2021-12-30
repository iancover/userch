import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers } = useContext(GithubContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alert('');  
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-8'}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='input input-lg bg-gray-200 w-full pr-40 text-black'
                value={text}
                onChange={handleChange}
                placeholder={'Search'}
                autoFocus={true}
              />
              <button className='btn btn-lg w-36 absolute top-0 right-0 rounded-l-none'>GO</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg'>Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
