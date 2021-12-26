import { IconContext } from 'react-icons';
import { FaRegFileCode } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className={'footer p-10 bg-gray-700 text-gray-400 footer-center'}>
      <div>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <div>
            <FaRegFileCode size={50} />
          </div>
        </IconContext.Provider>

        <p>Copyright &copy; {footerYear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
