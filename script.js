const CATEGORY_LABELS = {
  fit: "Find a Good Career Fit",
  explore: "Explore Career Paths",
};

// Add or edit resources here.
const resources = [
   {
    category: "fit",
    title: "80,000 Hours, How to make a difference with your career",
    url: "https://80000hours.org/",
    description: "You will spend about 80,000 hours of your life on your career, this resource will help you choose a good one!.",
  },
  {
    category: "fit",
    title: "CareerOneStop Interest Assessment",
    url: "https://www.careeronestop.org/Toolkit/Careers/interest-assessment.aspx",
    description: "A short assessment to identify careers aligned with your interests.",
  },
  {
    category: "fit",
    title: "O*NET Interest Profiler",
    url: "https://www.mynextmove.org/explore/ip",
    description: "Explore work interests and see matching career clusters.",
  },
  {
    category: "explore",
    title: "Occupational Outlook Handbook",
    url: "https://www.bls.gov/ooh/",
    description: "Browse hundreds of jobs with salary, education, and growth info.",
  },
  {
    category: "explore",
    title: "My Next Move",
    url: "https://www.mynextmove.org/",
    description: "Search careers by industry, interests, or key words.",
  },
];

const tabs = document.querySelectorAll(".tab");
const listEl = document.getElementById("resource-list");
const countEl = document.getElementById("resource-count");
const titleEl = document.getElementById("resource-list-title");

let activeCategory = "fit";

function renderResources() {
  const filtered = resources.filter((resource) => resource.category === activeCategory);

  titleEl.textContent = CATEGORY_LABELS[activeCategory];
  countEl.textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <article class="resource-card">
        <h3>No resources yet</h3>
        <p>Add a new item in the <code>resources</code> array in <code>script.js</code>.</p>
      </article>
    `;
    return;
  }

  listEl.innerHTML = filtered
    .map(
      (resource) => `
        <article class="resource-card">
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Resource</a>
        </article>
      `
    )
    .join("");
}

function updateActiveTab(nextCategory) {
  activeCategory = nextCategory;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.category === activeCategory;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  renderResources();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    updateActiveTab(tab.dataset.category);
  });
});

renderResources();
