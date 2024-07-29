export interface Slide {
  src: string;
  alt: string;
}
export interface Images {
  slides: Slide[];
}
export interface SliderShowProps {
  images: Images;
}
export interface FormData {
  name: string;
  email: string;
  telefonas: string;
  message: string;
}
export interface Module {
  src: string;
  alt: string;
}
