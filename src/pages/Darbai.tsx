import SliderShow from '../SliderShow';
import { Images } from '../types';

const Darbai = () => {
  const images: Images = {
    slides: [
      {
        src: '/images/slide_v1.png',
        alt: 'Image 1 for carousel'
      },
      {
        src: '/images/slide_v2.png',
        alt: 'Image 2 for carousel'
      },
      {
        src: '/images/slide_v3.png',
        alt: 'Image 3 for carousel'
      },
      {
        src: '/images/slide_v4.png',
        alt: 'Image 4 for carousel'
      },
      {
        src: '/images/slide_v5.png',
        alt: 'Image 5 for carousel'
      },
      {
        src: '/images/slide_v6.png',
        alt: 'Image 6 for carousel'
      }
    ]
  };
  return (
    <div className='container'>
      <h1 className='heading'>Mūsų darbų pavyzdžiai</h1>
      <SliderShow images={images} />
    </div>
  );
};

export default Darbai;
