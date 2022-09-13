import {Image} from '@shopify/hydrogen';
import logo from '../../assets/hero-image.jpeg';

export function Hero() {
  return (
    <div className="mt-[-25px] md:mt-[-125px]">
      <Image src={logo} width={1920} height={500} className="max-h-full" />
    </div>
  );
}
