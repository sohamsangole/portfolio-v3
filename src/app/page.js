"use client";
import EducationExperience from "./components/eduexp";
import ContributionGraph from "./components/github/ContributionGraph";
import { NavBar } from "./components/navbar/navbar";
import Cursor from "./components/sticky-cursor";
import TopSection from "./components/topsection";

export default function Home() {
  return (
    <div className="w-[50%] mx-auto py-4">
      {/* <Cursor /> */}
      <NavBar />
      <TopSection />
      <ContributionGraph />
      <EducationExperience />
      <div className="h-[500px]"></div>
    </div>
  );
}
