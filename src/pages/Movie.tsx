import SearchField from "../components/SearchField";
import { useVisibilityChange } from "@uidotdev/usehooks";
import { useFavicon } from 'react-haiku';

export default function Movie() {
  const visibile = useVisibilityChange();
  const {setFavicon} = useFavicon();
  if(visibile === false) {
    setFavicon("https://img.icons8.com/?size=256&id=O1gYPRQw2ouL&format=png")
  } else {
    setFavicon('https://img.icons8.com/?size=256&id=Avh9QzxquY7P&format=png')
  }
  return (
    <div className="flex min-h-screen pt-3 bg-[#3f3f3f] flex-col items-center  text-xl">
      <h1 className="py-3 font-lexendMd font-bold text-[35px] mb-5 ">FlickList</h1>
      <SearchField />
    </div>
  );
}