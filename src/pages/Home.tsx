import Moduliai from './Moduliai';
import Privalumai from './Privalumai';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='container color'>
          <div className='title'>Turizmo svetainių kūrimas su Vacations CMS sistema</div>
          <div className='center'>
            <img src='./images/kompai.png' alt='Kompiuteriai' />
          </div>
        </div>
      </div>
      <Privalumai />
      <Moduliai />
    </>
  );
};
export default Home;
