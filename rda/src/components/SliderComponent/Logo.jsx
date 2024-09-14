"use client";
// import Slider from "react-infinite-logo-slider";
import One from "../../../public/Assets/Logo/dbuggers.png";
import Two from "../../../public/Assets/Logo/Gadgeterz.png";
import Three from "../../../public/Assets/Logo/Benefits.png";
import Four from "../../../public/Assets/Logo/goinbazar.png";
import Five from "../../../public/Assets/Logo/americashines.png";
import Six from "../../../public/Assets/Logo/LandA.png";  
import Seven from "../../../public/Assets/Logo/uandu.png";
import Eight from "../../../public/Assets/Logo/mobiledoc.png";
import Nine from "../../../public/Assets/Logo/logo-uzfan-health-care.png";
import Image from "next/image";
import Marquee from "../Marquee/Marquee";
import { cn } from "@/lib/utils";

const slideImages = [
  {
    name: One,
    caption: "Slide 1",
  },
  {
    name: Two,
    caption: "Slide 2",
  },
  {
    name: Three,
    caption: "Slide 3",
  },
  {
    name: Four,
    caption: "Slide 3",
  },
  {
    name: Five,
    caption: "Slide 3",
  },
  {
    name: Six,
    caption: "Slide 3",
  },
  {
    name: Seven,
    caption: "Slide 3",
  },
  {
    name: Eight,
    caption: "Slide 3",
  },
  {
    name: Nine,
    caption: "Slide 3",
  },
];
const secondRow = slideImages.slice(slideImages.length / 2);
const ImageCard = ({ img, caption }) => {
  return (
    <figure>
      <Image className="ml-14" src={img} height={75} width={75} alt={caption} />
    </figure>
  );
};
const Logo = () => {
  return (
    <div className="w-[75%] flex justify-center flex-col items-center">
      <Marquee pauseOnHover className="[--duration:30s] mt-10 ">
        {slideImages.map((image) => (
          <ImageCard
            key={image.name}
            img={image.name}
            caption={image.caption}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Logo;
