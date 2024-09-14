"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Your growth is our mission. Let&apos;s craft a unique roadmap to success, tailored just for you.
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}