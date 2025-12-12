import Hero from "../components/hero";
import reliablity from "../../public/reliablity.jpeg";
export const metadata = {
  title: "Reliablity",
};
export default function Page() {
  return (
    <Hero imgUrl={reliablity} altText="reliablity Image" content="reliablity" />
  );
}
