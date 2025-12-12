import Image from "next/image";
import homeSrc from "../public/home.png";
import Hero from "./components/hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Performance",
};
export default function Home() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home Image"
      content="Welcome to our website"
    />
  );
}
