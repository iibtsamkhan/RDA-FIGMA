import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-[80%] mx-auto px-8 mt-[10rem]">
        <h1 className="text-[60px] font-bold w-[646px] h-[90px] leading-[auto]">We Believe In Results</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "1",
    description:
      "Results that grow your reach, expand your audience and rule the digital world.",
    link: "",
  },
  {
    title: "2",
    description:
      "Results that drive customer acquisition, fuel brand awareness, and propel your business forward.",
    link: "",
  },
  {
    title: "3",
    description:
      "Measurable results that turn clicks into customers and Throne-worthy ROI.",
    link: "",
  },
  
];
