import Hero from "../components/hero";
import scaleUrl from "../../public/scale.jpg";
export const metadata = {
  title: "Scale",
};
export default function Page() {
  return <Hero imgUrl={scaleUrl} altText="scaleUrl Image" content="scaleUrl" />;
}
