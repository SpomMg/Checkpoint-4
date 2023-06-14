import Myheader from "../components/header/Myheader";
import Filters from "../components/objectmain/filters/Filters";

export default function Home() {
  return (
    <header className="App-header">
      <Myheader />
      <Filters />
    </header>
  );
}
