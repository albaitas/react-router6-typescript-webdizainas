import { Module } from '../types';

const modules: Module[] = [
  { src: '/images/1.png', alt: 'Pakeisti šabloną' },
  { src: '/images/2.png', alt: 'Pagrindiniai nustatymai' },
  { src: '/images/3.png', alt: 'Pasiūlymų parametrai' },
  { src: '/images/4.png', alt: 'Svetainės stilius' },
  { src: '/images/5.png', alt: 'Svetainės maketavimas' },
  { src: '/images/6.png', alt: 'SEO' },
  { src: '/images/7.png', alt: 'Failų talpykla' },
  { src: '/images/8.png', alt: 'Teisės' },
  { src: '/images/9.png', alt: 'Svetainės peržiūra' },
  { src: '/images/10.png', alt: 'Pop-up konfigūravimas' },
  { src: '/images/11.png', alt: 'Nuotraukų galerija' }
];

const ModuleItem = ({ src, alt }: Module) => (
  <div className='img_module'>
    <img src={src} alt={alt} />
  </div>
);

const Moduliai = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Moduliai</h1>
      <div className='flex_container_module'>
        {modules.map((module, index) => (
          <ModuleItem key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Moduliai;
