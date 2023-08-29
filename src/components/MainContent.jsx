import { Navbar } from "./Navbar";
import {HistorySection} from "./HistorySection";
import {TeamSection } from "./TeamSection";
export const MainContent = () => {
  return (
    <main className="overflow-hidden">
      <Navbar bgColor="white" linkColor="black" header />
      <HistorySection/>
      <TeamSection/>
    </main>
  );
};
