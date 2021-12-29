import { Link } from 'react-router-dom';

function About() {
  const reactLink = 'https://reactjs.org/docs/getting-started.html#try-react';
  const githubLink = 'https://docs.github.com/en/rest';
  const craLink = 'https://create-react-app.dev/docs/getting-started/';
  const tailwindLink = 'https://tailwindcss.com/';
  const daisyuiLink = 'https://daisyui.com/';

  return (
    <div className={'mt-20'}>
      <h1 className='text-6xl mb-4'>Userch: GitHub</h1>
      <p className='font-light text-2xl mb-4'>
        A{' '}
        <Link to={reactLink} className={'text-sky-400'}>
          React
        </Link>{' '}
        app bootstrapped with{' '}
        <Link to={craLink} className={'text-sky-400'}>
          Create React App
        </Link>{' '}
        and styled using the{' '}
        <Link to={tailwindLink} className={'text-sky-400'}>
          TailwindCSS
        </Link>{' '}
        library and one of its plugins,{' '}
        <Link to={daisyuiLink} className={'text-sky-400'}>
          daisyUI
        </Link>
        . This project currently uses the{' '}
        <Link to={githubLink} className={'text-sky-400'}>
          GitHub REST API
        </Link>{' '}
        to search user profiles and repo information.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>2.0.0</span>
      </p>
    </div>
  );
}

export default About;
