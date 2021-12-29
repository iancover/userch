import { BiError } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className={'hero mt-20'}>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <div className='text-5xl mb-8'>
            <BiError size={'4rem'} className={'inline-block align-text-top text-yellow-600 mr-2'} />
            404 Page Not Found!
          </div>
          <Link to={'/'} className={'btn btn-lg bg-cyan-800'}>
            <FaHome className={'mr-2'} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
