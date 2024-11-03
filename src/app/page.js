import Education from "./components/education";
import EducationExperience from "./components/eduexp";
import Experience from "./components/experience";
import { NavBar } from "./components/navbar";
import TopSection from "./components/topsection";

export default function Home() {
  return (
    <div className="w-[50%] mx-auto py-4">
      <NavBar />
      <TopSection />
      <EducationExperience />
    </div>
  );
}
