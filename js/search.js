// Add language class for mobile language selector
(function setPageLanguageClass(){
  const path = window.location.pathname.toLowerCase();
  const root = document.documentElement;

  root.classList.remove("lang-nl", "lang-en", "lang-fr");

  if (path.includes("/fr/")) {
    root.classList.add("lang-fr");
  } else if (path.includes("/en/")) {
    root.classList.add("lang-en");
  } else {
    root.classList.add("lang-nl");
  }
})();

const searchInput = document.getElementById("site-search-input");
const searchForm = document.querySelector(".site-search");

if (searchInput && searchForm) {
  function getCurrentLanguage() {
    const path = window.location.pathname.toLowerCase();

    if (path.includes('/fr/')) return 'fr';
    if (path.includes('/en/')) return 'en';
    return 'nl';
  }

  const currentLanguage = getCurrentLanguage();

  const pages = {
    nl: [
      {
        title: "Home",
        keywords: ["home", "startpagina", "c-fire", "milieuvriendelijk", "brandbestrijding"],
        url: "../Pages/index.html"
      },
      {
        title: "Brandbestrijdingsmiddelen",
        keywords: [
          "brandbestrijdingsmiddelen",
          "producten",
          "assortiment",
          "brandbestrijding",
          "brandblussers",
          "control fire",
          "additieven",
          "detectoren",
          "brandslanghaspels",
          "signalisatie",
          "welk toestel heb ik nodig",
          "educatie"
        ],
        url: "../Pages/Brandbestrijdingsmiddelen.html"
      },
      {
        title: "Brandblussers",
        keywords: ["brandblussers", "blussers", "blusser"],
        url: "../Pages/brandblussers.html"
      },
      {
        title: "CO₂-blussers",
        keywords: [
          "co2",
          "co₂",
          "co2 blussers",
          "co2-blussers",
          "co₂-blussers",
          "koolzuurblusser",
          "co2 blusser 2kg",
          "co2 blusser 5kg",
          "co2 blusser 10kg",
          "co2 blusser 30kg",
          "co₂ blusser 2kg",
          "co₂ blusser 5kg",
          "co₂ blusser 10kg",
          "co₂ blusser 30kg"
        ],
        url: "../Pages/CO2 blussers.html"
      },
      {
        title: "Schuimblussers",
        keywords: [
          "schuim",
          "schuimblusser",
          "schuimblussers",
          "schuimblusser 6l",
          "schuimblusser 9l",
          "schuimblussers met patroon",
          "schuimblussers onder constante druk"
        ],
        url: "../Pages/schuimblussers.html"
      },
      {
        title: "Poederblussers",
        keywords: [
          "poeder",
          "poederblusser",
          "poederblussers",
          "poederblusser 6kg",
          "poederblusser 9kg",
          "poederblusser 12kg",
          "poederblussers met patroon",
          "poederblussers onder constante druk"
        ],
        url: "../Pages/poederblussers.html"
      },
      {
        title: "Control Fire",
        keywords: [
          "spray",
          "brandblusspray",
          "brandblussprays",
          "brandblus sprays",
          "control fire",
          "control fire 200ml",
          "control fire 500ml",
          "kleine branden",
          "biologisch afbreekbaar"
        ],
        url: "../Pages/brandblmussprays.html"
      },
      {
        title: "Additieven",
        keywords: [
          "additieven",
          "additief",
          "vloeistof",
          "biologisch afbreekbaar",
          "eco vulmengsel",
          "bio vulmengsel",
          "bio additief",
          "brandvertrager",
          "bosbrandblusmiddel",
          "universele blusvloeistof"
        ],
        url: "../Pages/additieven.html"
      },
      {
        title: "BIOLINE",
        keywords: [
          "bioline",
          "natuurvriendelijk",
          "biologisch",
          "ecologisch",
          "milieuvriendelijk",
          "pfas-vrij",
          "duurzaam"
        ],
        url: "../Pages/bioline.html"
      },
      {
        title: "BIOLINE brandblusser",
        keywords: [
          "bioline blusser",
          "bioline brandblusser",
          "bioline brandblusser 6l",
          "plantaardige extracten",
          "zonder schadelijke chemicaliën",
          "vorstbestendig"
        ],
        url: "../Pages/bioline-blusser.html"
      },
      {
        title: "Brand-, gas- en rookdetectoren",
        keywords: [
          "detectoren",
          "rookdetector",
          "rookdetectoren",
          "gasdetector",
          "gasdetectoren",
          "branddetectoren",
          "rookmelders",
          "ce gemarkeerd"
        ],
        url: "../Pages/detectoren.html"
      },
      {
        title: "Brandslanghaspels",
        keywords: [
          "brandslanghaspels",
          "haspel",
          "haspels",
          "slanghaspel",
          "vaste haspels",
          "zwenkbare haspels"
        ],
        url: "../Pages/haspels.html"
      },
      {
        title: "Signalisatie & pictogrammen",
        keywords: [
          "signalisatie",
          "pictogrammen",
          "bord",
          "borden",
          "nooduitgang",
          "signalisatieborden"
        ],
        url: "../Pages/signalisatie.html"
      },
      {
        title: "Onderhoud & herstelling",
        keywords: [
          "onderhoud",
          "herstelling",
          "keuring",
          "jaarlijks onderhoud",
          "service",
          "hydranten",
          "noodverlichting",
          "rookdetectoren controle",
          "evacuatieplannen",
          "opleiding brandbestrijding"
        ],
        url: "../Pages/Onderhoud & herstelling.html"
      },
      {
        title: "Over C-fire",
        keywords: [
          "over c-fire",
          "bedrijf",
          "missie",
          "visie",
          "waarden",
          "ecologische brandbestrijding",
          "c-fire info"
        ],
        url: "../Pages/Over C-fire.html"
      },
      {
        title: "Over Cordeel",
        keywords: [
          "cordeel",
          "cordeel group",
          "groep",
          "bouwgroep",
          "one-stop bouwpartner"
        ],
        url: "../Pages/Over Cordeel.html"
      },
      {
        title: "Contact",
        keywords: [
          "contact",
          "mail",
          "telefoon",
          "adres",
          "temse",
          "info",
          "c-fire nv",
          "frank van dyckelaan",
          "wateringen",
          "c-fire nederland"
        ],
        url: "../Pages/Contact.html"
      },
      {
        title: "Soorten branden en blussers uitgelegd",
        keywords: [
          "educatie",
          "brandklassen",
          "welke blusser",
          "welk toestel",
          "brandklasse a",
          "brandklasse b",
          "brandklasse c",
          "brandklasse d",
          "brandklasse e",
          "brandklasse f"
        ],
        url: "../Pages/educatie.html"
      }
    ],
    en: [
      {
        title: "Home",
        keywords: ["home", "start page", "c-fire", "eco-friendly", "fire safety"],
        url: "../EN/index EN.html"
      },
      {
        title: "Fire safety solutions",
        keywords: [
          "fire safety solutions",
          "products",
          "range",
          "fire safety",
          "fire extinguishers",
          "control fire",
          "additives",
          "detectors",
          "fire hose reels",
          "signalisation",
          "which device do i need",
          "education"
        ],
        url: "../EN/Fire safety solutions.html"
      },
      {
        title: "Fire extinguishers",
        keywords: ["fire extinguisher", "fire extinguishers", "extinguisher"],
        url: "../EN/fire extinguishers.html"
      },
      {
        title: "CO₂ extinguishers",
        keywords: [
          "co2",
          "co₂",
          "co2 extinguishers",
          "co₂ extinguishers",
          "co2 extinguisher 2kg",
          "co2 extinguisher 5kg",
          "co2 extinguisher 10kg",
          "co2 extinguisher 30kg"
        ],
        url: "../EN/CO2 extinguishers.html"
      },
      {
        title: "Foam extinguishers",
        keywords: [
          "foam",
          "foam extinguisher",
          "foam extinguishers",
          "foam extinguisher 6l",
          "foam extinguisher 9l",
          "cartridge foam extinguishers",
          "constant pressure foam extinguishers"
        ],
        url: "../EN/foam extinguishers.html"
      },
      {
        title: "Powder extinguishers",
        keywords: [
          "powder",
          "powder extinguisher",
          "powder extinguishers",
          "powder extinguisher 6kg",
          "powder extinguisher 9kg",
          "powder extinguisher 12kg",
          "cartridge powder extinguishers",
          "constant pressure powder extinguishers"
        ],
        url: "../EN/powder extinguishers.html"
      },
      {
        title: "Control Fire",
        keywords: [
          "spray",
          "fire extinguishing spray",
          "control fire",
          "control fire 200ml",
          "control fire 500ml",
          "small fires",
          "biodegradable"
        ],
        url: "../EN/fire extinguishing sprays.html"
      },
      {
        title: "Additives",
        keywords: [
          "additives",
          "additive",
          "liquid",
          "biodegradable",
          "eco extinguishing agent",
          "bio additive",
          "fire retardant",
          "forest fire extinguishing agent",
          "universal extinguishing liquid"
        ],
        url: "../EN/additives.html"
      },
      {
        title: "BIOLINE",
        keywords: [
          "bioline",
          "environmentally friendly",
          "biological",
          "ecological",
          "eco-friendly",
          "pfas-free",
          "sustainable"
        ],
        url: "../EN/bioline_EN.html"
      },
      {
        title: "BIOLINE fire extinguisher",
        keywords: [
          "bioline extinguisher",
          "bioline fire extinguisher",
          "bioline fire extinguisher 6l",
          "plant extracts",
          "harmful chemicals",
          "frost resistant"
        ],
        url: "../EN/bioline-extinguisher.html"
      },
      {
        title: "Fire, gas and smoke detectors",
        keywords: [
          "detectors",
          "smoke detector",
          "smoke detectors",
          "gas detector",
          "gas detectors",
          "fire detectors",
          "alarms",
          "ce marked"
        ],
        url: "../EN/detectors.html"
      },
      {
        title: "Fire hose reels",
        keywords: [
          "fire hose reels",
          "hose reel",
          "hose reels",
          "fixed hose reels",
          "swing hose reels"
        ],
        url: "../EN/fire hose reels.html"
      },
      {
        title: "Signalisation",
        keywords: [
          "signalisation",
          "signs",
          "pictograms",
          "emergency exit",
          "signage"
        ],
        url: "../EN/signalisation.html"
      },
      {
        title: "Maintenance & repair",
        keywords: [
          "maintenance",
          "repair",
          "inspection",
          "annual maintenance",
          "service",
          "hydrants",
          "emergency lighting",
          "smoke detector inspection",
          "evacuation plans",
          "fire training"
        ],
        url: "../EN/maintenance and repair.html"
      },
      {
        title: "About C-fire",
        keywords: [
          "about c-fire",
          "company",
          "mission",
          "vision",
          "values",
          "ecological fire safety",
          "c-fire info"
        ],
        url: "../EN/About C-fire.html"
      },
      {
        title: "About Cordeel",
        keywords: [
          "cordeel",
          "cordeel group",
          "group",
          "construction group",
          "one-stop construction partner"
        ],
        url: "../EN/About Cordeel.html"
      },
      {
        title: "Contact",
        keywords: [
          "contact",
          "mail",
          "phone",
          "address",
          "temse",
          "info",
          "c-fire nv",
          "frank van dyckelaan",
          "wateringen",
          "c-fire netherlands"
        ],
        url: "../EN/Contact EN.html"
      },
      {
        title: "Types of fires and extinguishers explained",
        keywords: [
          "education",
          "fire classes",
          "which extinguisher",
          "which device",
          "fire class a",
          "fire class b",
          "fire class c",
          "fire class d",
          "fire class e",
          "fire class f"
        ],
        url: "../EN/education_EN.html"
      }
    ],
    fr: [
      {
        title: "Accueil",
        keywords: ["accueil", "c-fire", "ecologique", "environnement", "lutte incendie"],
        url: "../FR/index FR.html"
      },
      {
        title: "Équipements de lutte contre l’incendie",
        keywords: [
          "equipements de lutte contre lincendie",
          "equipements de lutte contre l’incendie",
          "produits",
          "gamme",
          "extincteurs",
          "control fire",
          "additifs",
          "detecteurs",
          "devidoirs",
          "signalisation",
          "quel extincteur me faut il",
          "education"
        ],
        url: "../FR/Equipements de lutte contre l'incendie.html"
      },
      {
        title: "Extincteurs",
        keywords: ["extincteur", "extincteurs"],
        url: "../FR/extincteurs.html"
      },
      {
        title: "Extincteurs CO₂",
        keywords: [
          "co2",
          "co₂",
          "extincteurs co2",
          "extincteurs co₂",
          "extincteur co2 2kg",
          "extincteur co2 5kg",
          "extincteur co2 10kg",
          "extincteur co2 30kg"
        ],
        url: "../FR/extincteurs CO2.html"
      },
      {
        title: "Extincteurs à mousse",
        keywords: [
          "mousse",
          "extincteur a mousse",
          "extincteurs a mousse",
          "extincteur a mousse 6l",
          "extincteur a mousse 9l"
        ],
        url: "../FR/extincteurs a mousse.html"
      },
      {
        title: "Extincteurs à poudre",
        keywords: [
          "poudre",
          "extincteur a poudre",
          "extincteurs a poudre",
          "extincteur a poudre 6kg",
          "extincteur a poudre 9kg",
          "extincteur a poudre 12kg"
        ],
        url: "../FR/extincteurs a poudre.html"
      },
      {
        title: "Control Fire",
        keywords: [
          "spray",
          "spray extincteur",
          "sprays extincteurs",
          "control fire",
          "petits incendies",
          "biodegradable"
        ],
        url: "../FR/sprays extincteurs.html"
      },
      {
        title: "Additifs",
        keywords: [
          "additifs",
          "additif",
          "liquide",
          "biodegradable",
          "agent extincteur",
          "retardateur de feu",
          "liquide extincteur universel"
        ],
        url: "../FR/additifs.html"
      },
      {
        title: "BIOLINE",
        keywords: [
          "bioline",
          "respectueux de lenvironnement",
          "respectueux de l’environnement",
          "ecologique",
          "sans pfas",
          "durable"
        ],
        url: "../FR/bioline_FR.html"
      },
      {
        title: "Extincteur BIOLINE",
        keywords: [
          "extincteur bioline",
          "bioline 6l",
          "extraits vegetaux",
          "sans substances chimiques nocives",
          "resistant au gel"
        ],
        url: "../FR/extincteur bioline.html"
      },
      {
        title: "Détecteurs incendie, gaz et fumée",
        keywords: [
          "detecteurs",
          "detecteur de fumee",
          "detecteurs de fumee",
          "detecteur de gaz",
          "detecteurs de gaz",
          "detecteurs incendie"
        ],
        url: "../FR/detecteurs.html"
      },
      {
        title: "Dévidoirs incendie",
        keywords: [
          "devidoirs",
          "devidoir",
          "devidoirs incendie"
        ],
        url: "../FR/devidoirs.html"
      },
      {
        title: "Signalisation",
        keywords: [
          "signalisation",
          "pictogrammes",
          "panneaux",
          "sortie de secours"
        ],
        url: "../FR/signalisation FR.html"
      },
      {
        title: "Entretien & réparation",
        keywords: [
          "entretien",
          "reparation",
          "inspection",
          "maintenance annuelle",
          "service",
          "hydrants",
          "eclairage de secours",
          "plans devacuation",
          "plans d'evacuation",
          "formation incendie"
        ],
        url: "../FR/Entretien & reparation.html"
      },
      {
        title: "À propos de C-Fire",
        keywords: [
          "a propos de c-fire",
          "a propos",
          "entreprise",
          "mission",
          "vision",
          "valeurs"
        ],
        url: "../FR/A propos de C-fire.html"
      },
      {
        title: "À propos de Cordeel",
        keywords: [
          "a propos de cordeel",
          "cordeel",
          "cordeel group",
          "groupe"
        ],
        url: "../FR/A propos de Cordeel.html"
      },
      {
        title: "Contact",
        keywords: [
          "contact",
          "mail",
          "telephone",
          "adresse",
          "temse",
          "info"
        ],
        url: "../FR/Contact FR.html"
      },
      {
        title: "Types d’incendies et extincteurs expliqués",
        keywords: [
          "education",
          "classes de feu",
          "quel extincteur",
          "classe de feu a",
          "classe de feu b",
          "classe de feu c",
          "classe de feu d",
          "classe de feu e",
          "classe de feu f"
        ],
        url: "../FR/education_FR.html"
      }
    ]
  };

  const currentPages = pages[currentLanguage];

  const noResultsMessages = {
    nl: "Geen resultaten gevonden",
    en: "No results found",
    fr: "Aucun résultat trouvé"
  };

  const resultsBox = document.createElement("div");
  resultsBox.className = "search-results-box";
  searchForm.appendChild(resultsBox);

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function scoreMatch(page, query) {
    const normalizedQuery = normalize(query);
    const title = normalize(page.title);
    const keywords = page.keywords.map(normalize);

    let score = 0;

    if (title === normalizedQuery) score += 100;
    if (title.startsWith(normalizedQuery)) score += 50;
    if (title.includes(normalizedQuery)) score += 30;

    keywords.forEach((keyword) => {
      if (keyword === normalizedQuery) score += 80;
      else if (keyword.startsWith(normalizedQuery)) score += 40;
      else if (keyword.includes(normalizedQuery)) score += 20;
    });

    return score;
  }

  function getMatches(query) {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) return [];

    return currentPages
      .map((page) => ({
        ...page,
        score: scoreMatch(page, normalizedQuery)
      }))
      .filter((page) => page.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }

  function renderResults(matches) {
    resultsBox.innerHTML = "";
  
    const query = searchInput.value.trim();
  
    if (!query) {
      resultsBox.style.display = "none";
      return;
    }
  
    if (matches.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "search-no-results";
      emptyState.textContent = noResultsMessages[currentLanguage];
      resultsBox.appendChild(emptyState);
      resultsBox.style.display = "flex";
      return;
    }

    matches.forEach((match) => {
      const link = document.createElement("a");
      link.href = match.url;
      link.textContent = match.title;
      link.className = "search-result-link";
      resultsBox.appendChild(link);
    });

    resultsBox.style.display = "flex";
  }

  searchInput.addEventListener("input", (event) => {
    const matches = getMatches(event.target.value);
    renderResults(matches);
  });

  searchInput.addEventListener("focus", () => {
    const matches = getMatches(searchInput.value);
    renderResults(matches);
  });

  document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
      resultsBox.style.display = "none";
    }
  });

  searchForm.addEventListener("submit", (event) => {
    const matches = getMatches(searchInput.value);

    if (matches.length > 0) {
      event.preventDefault();
      window.location.href = matches[0].url;
    }
  });
}

// Highlight current page in header navigation (NL / EN / FR)
const navLinks = document.querySelectorAll('.nav-links a');

function normalizePath(value) {
  return decodeURIComponent(value || '')
    .split('/')
    .pop()
    .split('#')[0]
    .split('?')[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .trim();
}

function normalizeText(value) {
  return decodeURIComponent(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .trim();
}

const currentPath = normalizePath(window.location.pathname);

const menuKeywords = {
  brand: [
    'brandbestrijdingsmiddelen', 'brandblussers', 'co2', 'schuim', 'poeder', 'spray', 'control fire',
    'additieven', 'detectoren', 'haspels', 'signalisatie', 'educatie',
    'fire safety', 'fire extinguisher', 'fire extinguishers', 'foam', 'powder', 'additives',
    'detectors', 'hose reels', 'signalisation', 'education',
    'equipements de lutte contre lincendie', 'extincteurs', 'mousse', 'poudre', 'additifs',
    'detecteurs', 'devidoirs', 'signalisation fr'
  ],
  maintenance: [
    'onderhoud', 'herstelling', 'maintenance', 'repair', 'entretien', 'reparation'
  ],
  about: [
    'over c-fire', 'over cordeel', 'about c-fire', 'about cordeel', 'a propos de c-fire', 'a propos de cordeel'
  ],
  contact: [
    'contact'
  ]
};

function getGroupFromValue(value) {
  const normalizedValue = normalizeText(value);

  return Object.keys(menuKeywords).find((group) => {
    return menuKeywords[group].some((keyword) => normalizedValue.includes(keyword));
  });
}

const currentGroup = getGroupFromValue(currentPath);

navLinks.forEach((link) => {
  const href = link.getAttribute('href');

  if (!href || href.startsWith('http') || href.startsWith('#')) {
    return;
  }

  const linkPath = normalizePath(href);
  const linkText = normalizeText(link.textContent);
  const linkGroup = getGroupFromValue(`${linkPath} ${linkText}`);

  if (linkPath && linkPath === currentPath) {
    link.classList.add('active');

    const parentItem = link.closest('.nav-item');
    if (parentItem) {
      parentItem.classList.add('active');
    }

    const parentDropdownMenu = link.closest('.dropdown-menu');
    if (parentDropdownMenu) {
      const parentDropdown = parentDropdownMenu.closest('.nav-item.dropdown');
      if (parentDropdown) {
        parentDropdown.classList.add('active');

        const parentTopLink = parentDropdown.querySelector(':scope > a');
        if (parentTopLink) {
          parentTopLink.classList.add('active');
        }
      }
    }
  }

  if (currentGroup && linkGroup && currentGroup === linkGroup) {
    const parentItem = link.closest('.nav-item');
    if (parentItem) {
      parentItem.classList.add('active');
    }

    if (!link.closest('.dropdown-menu')) {
      link.classList.add('active');
    }
  }
});

// Scroll reveal / fade-in animation
const revealTargets = document.querySelectorAll(
  '.hero, .intro, .about-banner, .why-intro, .why-card, .product-card, .promo-card, .guide-intro, .guide-card, .guide-footer, .education-intro, .education-card, .education-tips, .education-cta, .video-wrapper, .page-buttons'
);

if (revealTargets.length) {
  revealTargets.forEach((item, index) => {
    item.classList.add('reveal-item');
    item.classList.add(`reveal-delay-${(index % 4) + 1}`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealTargets.forEach((item) => revealObserver.observe(item));
}



