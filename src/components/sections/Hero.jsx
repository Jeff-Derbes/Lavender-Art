import {Image} from '@shopify/hydrogen';
import logo from '../../assets/hero-image.jpeg';

export function Hero() {
  return (
    <div className="mt-[-25px] md:mt-[-100px] lg:mt-[-200px]">
      <Image
        src={logo}
        width={1920}
        height={500}
        className="max-h-full"
        alt="image of a sign that says Lavender Art"
      />
    </div>
  );
}
