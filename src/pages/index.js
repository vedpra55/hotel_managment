import Hero from "../pageComponents/home/hero";
import CategoriesList from "../pageComponents/home/categories";
import TopActivites from "../pageComponents/home/topActivites";
import TopRooms from "../pageComponents/home/topRooms";
import Words4You from "../pageComponents/home/words4You";
import WelcomeOffer from "../pageComponents/home/welcomeOffer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CategoriesList />
      <TopActivites />
      <TopRooms />
      <Words4You />
      <WelcomeOffer />
    </div>
  );
}
