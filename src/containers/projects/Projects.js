import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/sejal710/repos?per_page=10&sort=updated"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error(
          `${err} (because of this error, nothing is shown in the Projects section. Please check the GitHub username or API limits.)`
        );
        setError(true);
      }
    };
    fetchAllRepos();
  }, []);

  if (!error && repos.length > 0) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repos.map((repo) => (
              <GithubRepoCard
                repo={repo}
                key={repo.id}
                isDark={false} // Remove or modify as needed
              />
            ))}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">No Repositories Found</h1>
      </div>
    );
  }
}
