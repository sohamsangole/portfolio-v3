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

export default function ContributionGraph({ githubToken }) {
  const [contributionData, setContributionData] = useState(null);
  const username = "sohamsangole";
  useEffect(() => {
    async function loadData() {
      const data = await fetchContributionGraph(username, githubToken);
      setContributionData(data);
    }

    if (githubToken) {
      loadData();
    }
  }, [githubToken, username]);
  if (!contributionData) return <LoadingSpinner />;

  return (
    <div className="contribution-graph mb-4">
      {contributionData.weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          {week.contributionDays.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="day"
              style={{ backgroundColor: day.color }}
              title={`${day.date}: ${day.contributionCount} contributions`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}