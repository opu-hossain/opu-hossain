document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");

  // Temporary mock data
  const featuredRepos = [
    {
      name: "Ergon",
      language: "C",
      description: "Ergon - an energetic language",
      topics: ["interpreter"],
      stargazers_count: 1,
      html_url: "https://github.com/opu-hossain/ergon",
    },
    {
      name: "TruthByte",
      language: "C",
      description:
        "CLI file integrity verification tool. Supports SHA256, SHA512, SHA1 & MD5.",
      topics: ["cli", "linux", "security"],
      stargazers_count: 2,
      html_url: "https://github.com/opu-hossain/truthbyte",
    },
    {
      name: "LogBook",
      language: "Python",
      description: "A docs renderer",
      topics: ["github"],
      stargazers_count: 3,
      html_url: "https://github.com/opu-hossain/logbook",
    },
  ];

  // Clear the "Loading..." text
  grid.innerHTML = "";

  featuredRepos.forEach((repo, index) => {
    // Default to 'Code' if GitHub doesn't detect a language
    const lang = repo.language || "Code";

    // Format GitHub topics as your CSS tags (limit to first 4 topics)
    const tagsHtml = (repo.topics || [])
      .slice(0, 4)
      .map((topic) => `<span class="tag">${topic}</span>`)
      .join("");

    // Build the HTML card structure
    const cardHtml = `
        <div class="project-card" style="transition-delay: ${index * 0.1}s;">
            <div class="project-lang">${lang}</div>
            <div class="project-name">${repo.name}</div>
            <p class="project-desc">
                ${repo.description || "No description provided."}
            </p>
            <div class="project-tags">
                ${tagsHtml}
            </div>
            <div class="project-meta">
                <span class="project-stars">★ ${repo.stargazers_count}</span>
                <a href="${repo.html_url}" target="_blank" class="project-link">View on GitHub →</a>
            </div>
        </div>
    `;

    // Inject the card into the grid
    grid.innerHTML += cardHtml;
  });
});
