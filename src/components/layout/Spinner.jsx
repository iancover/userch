import spinner from './assets/pacman-spinner.gif';

function Spinner() {
  return (
    <div className={'w-100 mt-20'}>
      <img
        className={'text-center mx-auto'}
        src={spinner}
        alt={'Loading...'}
        width={180}
      />
    </div>
  );
}

export default Spinner;
