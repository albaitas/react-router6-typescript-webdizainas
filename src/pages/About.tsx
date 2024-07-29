import { FaCertificate, FaConnectdevelop, FaHandshake, FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Apie mus</h1>
      <div className='flex_container'>
        <div className='flex_left'>
          <div className='item'>
            <div className='icon'>
              <FaMedal className='faIcon' />
            </div>
            <div>
              <h2>Patirtis</h2>
              <div className='description'>Internetines svetaines kuriame nuo 2003 metų</div>
            </div>
          </div>
          <div className='item'>
            <div className='icon'>
              <FaHandshake className='faIcon' />
            </div>
            <div>
              <h2>Patikimumas</h2>
              <div className='description'>Nepriekaištinga įmonės reputacija ir savalaikis įsipareigojimų vykdymas</div>
            </div>
          </div>
          <div className='item'>
            <div className='icon'>
              <FaConnectdevelop className='faIcon' />
            </div>
            <div>
              <h2>Modernumas</h2>
              <div className='description'> Šiuolaikinių technologijų ir inovatyvių sprendimų naudojimas</div>
            </div>
          </div>
          <div className='item'>
            <div className='icon'>
              <FaCertificate className='faIcon' />
            </div>
            <div>
              <h2>Garantija</h2>
              <div className='description'>Kokybės garantija bei pinigų grąžinimas nepatenkintiems klientams</div>
            </div>
          </div>
        </div>
        <div className='flex_right'>
          <img src='./images/mantranos.jpg' alt='Klientas' />
        </div>
      </div>
    </div>
  );
};

export default About;
