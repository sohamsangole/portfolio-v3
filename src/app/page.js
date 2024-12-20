"use client";
import { useEffect, useState } from "react";
import EducationExperience from "./components/eduexp";
import ContributionGraph from "./components/github/ContributionGraph";
import { NavBar } from "./components/navbar/navbar";
import TopSection from "./components/topsection";
import ThreeProjects from "./components/threeProjects";
import Footer from "./components/footer";

export default function Home() {
  const [githubToken, setGithubToken] = useState(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    setGithubToken(token);
  }, []);
  return (
    <div className="w-[80%] sm:w-[55%] mx-auto py-4">
      <NavBar />
      <TopSection />
      <ContributionGraph githubToken={githubToken} />
      <EducationExperience />
      <ThreeProjects />
      <Footer />
    </div>
  );
}
