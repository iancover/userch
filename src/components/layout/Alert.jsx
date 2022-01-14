import { useContext } from 'react';
import { BiError } from 'react-icons/bi';
import { BiBlock } from 'react-icons/bi';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <>
        {alert.type === 'error' ? (
          <div className={'alert alert-error mb-4'}>
            <div className='flex-1'>
              <BiBlock size={'1.5rem'} className={'text-red-500 mr-2'} />
              <label>{alert.msg}</label>
            </div>
          </div>
        ) : (
          <div className={'alert alert-warning mb-4'}>
            <div className='flex-1'>
              <BiError size={'1.5rem'} className={'text-yellow-500 mr-2'} />
              <label>{alert.msg}</label>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default Alert;
