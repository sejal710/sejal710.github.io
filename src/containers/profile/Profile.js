import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const fetchGitHubProfile = async () => {
        try {
          const response = await fetch(
            "https://api.github.com/users/sejal710" // Replace <your-username> with your GitHub username
          );

          console.log("response", response)
          if (!response.ok) {
            throw new Error("Failed to fetch GitHub profile");
          }

          const data = await response.json();
          setProfile(data);
        } catch (err) {
          console.error(
            `${err} (because of this error, GitHub contact section could not be displayed. Contact section has reverted to default)`
          );
          setError(true);
          openSource.showGithubProfile = "false";
        }
      };

      fetchGitHubProfile();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    profile &&
    !error
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={profile} key={profile.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
