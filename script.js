const CATEGORY_LABELS = {
  fit: "Find a Good Career Fit",
  explore: "Explore Career Paths",
};

// Add or edit resources here.
const resources = [
  {
    category: "explore",
    title: "Glassdoor",
    url: "https://www.glassdoor.com/index.htm",
    description: "Already have a role or company of interest? See what those already there are saying about it.",
  },
  {
    category: "fit",
    title: "Career Guidance SubReddit",
    url: "https://www.reddit.com/r/careerguidance/",
    description: "Ask your career questions to a massive community, or browse others' questions!",
  },
  {
    category: "fit",
    title: "HIGH5 Strengths Test",
    url: "https://high5test.com/",
    description: "Figure out your strengths and motivators using this test.",
  },  
  {
    category: "fit",
    title: "Career Explorer",
    url: "https://www.careerexplorer.com/",
    description: "A comprehensive career advancement test to help you find your idea career.",
  },
  {
    category: "fit",
    title: "Alberta Preferred Knowledge Quiz",
    url: "https://alis.alberta.ca/careerinsite/know-yourself/find-your-fit/preferred-knowledge-quiz/",
    description: "A 15 minute quiz to help you narrow down your areas of interest",
  }, 
   {
    category: "fit",
    title: "80,000 Hours, How to make a difference with your career",
    url: "https://80000hours.org/",
    description: "This organization helps people choose a high impact career. Free one-on-one career advising is available!",
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
    description: "Search careers by industry, interests, or key words. Also contains an assessment to help you determine a suitable path.",
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
