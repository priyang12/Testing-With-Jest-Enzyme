import LogoImg from '../image/cloud.png';

const Header = () => {
  return (
    <div>
      <nav>
        <img src={LogoImg} alt='cloud' className='logo' data-test='logo' />
        <h1>Register</h1>
      </nav>
    </div>
  );
};

export default Header;
