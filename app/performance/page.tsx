import Hero from "../components/hero";
import performanceUrl from "../../public/performance.jpeg";
export const metadata = {
  title: "Performance",
};
export default function Page() {
  return (
    <Hero
      imgUrl={performanceUrl}
      altText="Performance Image"
      content="Performance"
    />
  );
}
