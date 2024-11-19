"use client";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

async function fetchContributionGraph(username, token) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  const { data } = await response.json();
  return data.user.contributionsCollection.contributionCalendar;
}

function filterLast60Days(data) {
  const today = new Date();
  const last60Days = [];
  data.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      const contributionDate = new Date(day.date);
      const diffDays = Math.floor((today - contributionDate) / (1000 * 60 * 60 * 24));
      if (diffDays <= 60) {
        last60Days.push(day);
      }
    });
  });

  return last60Days;
}

export default function ContributionGraph({ githubToken }) {
  const [contributionData, setContributionData] = useState(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const username = "sohamsangole";

  useEffect(() => {
    async function loadData() {
      const data = await fetchContributionGraph(username, githubToken);
      const filteredData = filterLast60Days(data);
      setContributionData(filteredData);

      const total = filteredData.reduce((acc, day) => acc + day.contributionCount, 0);
      setTotalContributions(total);
    }

    if (githubToken) {
      loadData();
    }
  }, [githubToken, username]);

  if (!contributionData) return <LoadingSpinner />;

  return (
    <div className="flex justify-center items-center mb-4 p-4">
      <div className="w-full max-w-screen-sm bg-white shadow-lg rounded-lg p-4">
        <div className="text-center mb-4">
          {/* <h2 className="text-xl font-semibold">GitHub Contribution Graph</h2> */}
          <p className="text-sm text-gray-600">Showing my contributions over the past 60 days</p>
          <p className="mt-2 text-lg">
            Total Contributions: <span className="font-bold text-blue-600">{totalContributions}</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {contributionData.map((day, index) => (
            <div
              key={index}
              className="day w-6 h-6 m-1 rounded-full transition-all ease-in-out transform hover:scale-125 hover:shadow-lg"
              style={{
                backgroundColor: day.color,
                boxShadow: `0 0 3px 0px ${day.color}`,
              }}
              title={`${day.date}: ${day.contributionCount} contributions`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}