const QUANTITY = 5;
const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export const fetchRepos = async (username, githubToken) => {
    const query = `
query {
  user (login: "${username}") {
    repositoriesContributedTo(last: ${QUANTITY}, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
      nodes {
        id
        name
        url
        description
        owner {
          login
        }
      }
    }
    starredRepositories(last: ${QUANTITY}) {
      nodes {
        id
        name
        description
        url
        owner {
          login
        }
      }
    }
  }
}`;

    const res = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${githubToken}`,
        },
        body: JSON.stringify({ query }),
    });
  
  const { data } = await res.json();

  console.log(data);

    return {
        starredRepos: data.user.starredRepositories.nodes.reverse(),
        contributedRepos: data.user.repositoriesContributedTo.nodes.reverse(),
    };
};