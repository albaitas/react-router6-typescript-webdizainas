import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { SliderShowProps } from './types';

const SliderShow = ({ images }: SliderShowProps) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.slides.length - 1 : slide - 1);
  };

  return (
    <div className='carousel'>
      {slide !== 0 && <BsArrowLeftCircleFill onClick={prevSlide} className='arrow arrow_left' />}
      {images.slides.map((item, idx) => (
        <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide_hidden'} />
      ))}
      {slide !== images.slides.length - 1 && <BsArrowRightCircleFill onClick={nextSlide} className='arrow arrow_right' />}
      <span className='indicators'>
        {images.slides.map((_, idx) => (
          <button key={idx} className={slide === idx ? 'indicator' : 'indicator indicator_inactive'} onClick={() => setSlide(idx)}></button>
        ))}
      </span>
    </div>
  );
};

export default SliderShow;
