/* TN inc. — interactions, i18n, portfolio */
(function () {
  "use strict";

  const PROPERTIES = [
    // Houses — 500k–800k
    { id: "h1", type: "house", img: "images/h01.webp", neigh: "Sillery", beds: 4, baths: 2.5, sqft: 2400, year: 1998, price: 675000,
      title: { fr: "Maison familiale spacieuse", en: "Spacious family home" },
      desc: { fr: "Résidence accueillante avec garage et cour aménagée, à proximité des écoles et du fleuve.", en: "Welcoming residence with garage and landscaped yard, near schools and the river." } },
    { id: "h2", type: "house", img: "images/h02.webp", neigh: "Sainte-Foy", beds: 3, baths: 2, sqft: 1850, year: 2005, price: 589000,
      title: { fr: "Contemporaine bien située", en: "Well-located contemporary" },
      desc: { fr: "Maison récente près des axes et commerces, idéale pour une famille ou un investisseur-locateur.", en: "Recent home near major roads and shopping — ideal for a family or investor-landlord." } },
    { id: "h3", type: "house", img: "images/h03.webp", neigh: "Charlesbourg", beds: 4, baths: 3, sqft: 2650, year: 2012, price: 729000,
      title: { fr: "Maison de prestige", en: "Premium residence" },
      desc: { fr: "Finitions soignées, grande cuisine et espaces de vie ouverts dans un secteur recherché.", en: "Quality finishes, large kitchen and open living areas in a sought-after sector." } },
    { id: "h4", type: "house", img: "images/h04.webp", neigh: "Lac-Beauport", beds: 4, baths: 3, sqft: 2800, year: 2016, price: 795000,
      title: { fr: "Chalet-moderne lacustre", en: "Modern lakeside-style home" },
      desc: { fr: "Architecture chaleureuse, grandes fenêtres et environnement boisé près des activités outdoor.", en: "Warm architecture, large windows and wooded setting near outdoor activities." } },
    { id: "h5", type: "house", img: "images/h05.webp", neigh: "Beauport", beds: 3, baths: 2, sqft: 1720, year: 1992, price: 525000,
      title: { fr: "Classique rénovée", en: "Renovated classic" },
      desc: { fr: "Charme d'origine mis à jour, terrain généreux et accès rapide vers le centre-ville.", en: "Updated original charm, generous lot and quick access downtown." } },
    { id: "h6", type: "house", img: "images/h06.webp", neigh: "L'Ancienne-Lorette", beds: 3, baths: 2.5, sqft: 2100, year: 2018, price: 649000,
      title: { fr: "Design contemporain", en: "Contemporary design" },
      desc: { fr: "Lignes épurées, garage double et efficacité énergétique — proche de l'aéroport.", en: "Clean lines, double garage and energy efficiency — near the airport." } },
    { id: "h7", type: "house", img: "images/h07.webp", neigh: "Val-Bélair", beds: 4, baths: 2.5, sqft: 2300, year: 2008, price: 612000,
      title: { fr: "Familiale avec garage", en: "Family home with garage" },
      desc: { fr: "Quartier paisible, espaces intérieurs généreux et cour arrière privée.", en: "Quiet neighbourhood, generous interiors and a private backyard." } },
    { id: "h8", type: "house", img: "images/h08.webp", neigh: "Saint-Augustin-de-Desmaures", beds: 4, baths: 3, sqft: 2550, year: 2014, price: 758000,
      title: { fr: "Grande propriété verdoyante", en: "Large green-lot property" },
      desc: { fr: "Terrain spacieux, pièces lumineuses et proximité des services et axes autoroutiers.", en: "Spacious lot, bright rooms and proximity to services and highways." } },
    { id: "h9", type: "house", img: "images/h09.webp", neigh: "Lévis", beds: 3, baths: 2, sqft: 1950, year: 2001, price: 559000,
      title: { fr: "Maison rive-sud", en: "South-shore home" },
      desc: { fr: "Vue dégagée, patio et accès rapide à Québec via les ponts — excellent rendement locatif potentiel.", en: "Open outlook, patio and quick access to Québec via the bridges — strong rental potential." } },
    { id: "h10", type: "house", img: "images/h10.webp", neigh: "Limoilou", beds: 3, baths: 1.5, sqft: 1580, year: 1948, price: 515000,
      title: { fr: "Charme urbain rénové", en: "Renovated urban charm" },
      desc: { fr: "Maison de quartier avec rénovations récentes, à marche des cafés et parcs.", en: "Neighbourhood home with recent renovations, walkable to cafés and parks." } },

    // Quadruplexes — ~1.0M–1.6M
    { id: "q1", type: "quad", img: "images/q01.webp", neigh: "Limoilou", beds: "4×2", baths: "4×1", sqft: 4200, year: 1985, price: 1185000,
      units: "4 × 4½",
      title: { fr: "Quadruplex brique", en: "Brick quadruplex" },
      desc: { fr: "Quatre logements bien entretenus, revenus stables, stationnement et balcons.", en: "Four well-kept units, stable income, parking and balconies." } },
    { id: "q2", type: "quad", img: "images/q02.webp", neigh: "Sainte-Foy", beds: "2×2 + 2×3", baths: "4×1", sqft: 4800, year: 1999, price: 1420000,
      units: "2× 4½ + 2× 5½",
      title: { fr: "Plex moderne", en: "Modern plex" },
      desc: { fr: "Mixte de logements 2 et 3 chambres, forte demande étudiante et professionnelle.", en: "Mix of 2- and 3-bedroom units; strong student and professional demand." } },
    { id: "q3", type: "quad", img: "images/q03.webp", neigh: "Charlesbourg", beds: "4×2", baths: "4×1", sqft: 4000, year: 1978, price: 1095000,
      units: "4 × 4½",
      title: { fr: "Quad balcons", en: "Balcony quadruplex" },
      desc: { fr: "Façade avec balcons, toiture remplacée, locataires de longue date.", en: "Balcony facade, replaced roof, long-term tenants." } },
    { id: "q4", type: "quad", img: "images/q04.webp", neigh: "Beauport", beds: "4×2", baths: "4×1.5", sqft: 4500, year: 2006, price: 1299000,
      units: "4 × 4½",
      title: { fr: "Quad contemporain", en: "Contemporary quad" },
      desc: { fr: "Construction récente, entrées séparées et bons ratios financiers.", en: "Recent build, separate entrances and solid financials." } },
    { id: "q5", type: "quad", img: "images/q05.webp", neigh: "Vanier", beds: "4×1–2", baths: "4×1", sqft: 3800, year: 1972, price: 1025000,
      units: "2× 3½ + 2× 4½",
      title: { fr: "Quad investissements", en: "Investment quad" },
      desc: { fr: "Emplacement central, cash-flow attractif et potentiel de plus-value.", en: "Central location, attractive cash flow and upside potential." } },
    { id: "q6", type: "quad", img: "images/q06.webp", neigh: "Lebourgneuf", beds: "4×2", baths: "4×1", sqft: 4600, year: 2010, price: 1385000,
      units: "4 × 4½",
      title: { fr: "Quad secteur croissant", en: "Growth-area quad" },
      desc: { fr: "Près des commerces et bureaux, immeuble bien entretenu avec garage.", en: "Near retail and offices; well-maintained building with garage." } },
    { id: "q7", type: "quad", img: "images/q07.webp", neigh: "Sillery", beds: "4×2", baths: "4×1.5", sqft: 5000, year: 2003, price: 1550000,
      units: "4 × 5½",
      title: { fr: "Quad secteur premium", en: "Premium-sector quad" },
      desc: { fr: "Secteur recherché, grands logements et locataires stables.", en: "Sought-after area, large units and stable tenants." } },
    { id: "q8", type: "quad", img: "images/q08.webp", neigh: "L'Ancienne-Lorette", beds: "4×2", baths: "4×1", sqft: 4100, year: 1995, price: 1149000,
      units: "4 × 4½",
      title: { fr: "Quad familial", en: "Family-oriented quad" },
      desc: { fr: "Quartier résidentiel calme, unités spacieuses et stationnement.", en: "Quiet residential area, spacious units and parking." } },
    { id: "q9", type: "quad", img: "images/q09.webp", neigh: "Lévis", beds: "4×2", baths: "4×1", sqft: 4300, year: 1989, price: 1210000,
      units: "4 × 4½",
      title: { fr: "Quad rive-sud", en: "South-shore quad" },
      desc: { fr: "Bonne occupation historique, entretien courant à jour, accès ponts.", en: "Strong historical occupancy, maintenance up to date, bridge access." } },
    { id: "q10", type: "quad", img: "images/q10.webp", neigh: "Saint-Roch", beds: "4×1–2", baths: "4×1", sqft: 3900, year: 1925, price: 1345000,
      units: "1× 2½ + 3× 4½",
      title: { fr: "Quad patrimonial urbain", en: "Urban heritage quad" },
      desc: { fr: "Cœur du quartier branché, mixte de logements et forte demande locative.", en: "Heart of a vibrant district; unit mix with strong rental demand." } },
  ];

  const I18N = {
    fr: {
      skip: "Aller au contenu",
      "nav.about": "À propos", "nav.services": "Services", "nav.portfolio": "Portefeuille",
      "nav.investors": "Investisseurs", "nav.tenants": "Locataires", "nav.owners": "Propriétaires", "nav.contact": "Contact",
      "hero.eyebrow": "Québec · QC",
      "hero.title1": "On bâtit,", "hero.title2": "on possède,", "hero.title3": "on gère.",
      "hero.lead": "Votre immobilier entre les mêmes mains, du premier coup de pelle à la gestion au quotidien, à Québec.",
      "hero.badge1": "Construction", "hero.badge2": "Propriété", "hero.badge3": "Gestion",
      "hero.cta1": "Voir le portefeuille", "hero.cta2": "Nous joindre", "hero.scroll": "Défiler",
      "about.eyebrow": "Qui nous sommes", "about.title": "Une vision intégrée de l'immobilier résidentiel",
      "about.p1": "Basée à Québec, TN inc. accompagne locataires, investisseurs et propriétaires avec une approche complète : de l'acquisition à la construction, de la détention à la location et à la gestion.",
      "about.badge": "Piliers d'expertise",
      "about.buy": "Acheter", "about.buyDesc": "Sélection rigoureuse de maisons et plexes à fort potentiel.",
      "about.build": "Construire", "about.buildDesc": "Projets de construction et rénovation de qualité.",
      "about.own": "Posséder", "about.ownDesc": "Portefeuille détenu pour la valeur à long terme.",
      "about.manage": "Gérer", "about.manageDesc": "Location et gestion attentive pour locataires et propriétaires.",
      "services.eyebrow": "Ce que nous faisons", "services.title": "Services sur mesure",
      "services.lead": "Quatre expertises complémentaires pour maximiser la valeur de chaque immeuble.",
      "services.const": "Construction", "services.constDesc": "Conception et réalisation de maisons et plexes adaptés au marché québécois.",
      "services.mgmt": "Gestion immobilière", "services.mgmtDesc": "Administration complète : locataires, entretien, finances et conformité.",
      "services.rent": "Locations", "services.rentDesc": "Maisons et logements soigneusement entretenus dans les meilleurs secteurs.",
      "services.inv": "Investissement", "services.invDesc": "Opportunités pour co-investir dans des actifs résidentiels performants.",
      "portfolio.eyebrow": "Nos immeubles", "portfolio.title": "Portefeuille sélectionné",
      "portfolio.lead": "Maisons unifamiliales et quadruplexes dans les quartiers recherchés de la région de Québec.",
      "portfolio.all": "Tous", "portfolio.houses": "Maisons", "portfolio.quads": "Quadruplexes",
      "portfolio.inquire": "Demander des infos",
      "portfolio.house": "Maison", "portfolio.quad": "Quadruplex",
      "portfolio.beds": "chambres", "portfolio.baths": "salles de bain", "portfolio.sqft": "pi²", "portfolio.built": "Construit",
      "portfolio.units": "Unités",
      "stats.props": "Unités gérées", "stats.years": "Années d'expérience", "stats.occ": "Taux d'occupation", "stats.areas": "Secteurs couverts",
      "why.eyebrow": "Notre différence", "why.title": "Pourquoi TN inc.",
      "why.1t": "Ancrage local", "why.1d": "Connaissance fine des quartiers de Québec, Lévis et environs.",
      "why.2t": "Approche intégrée", "why.2d": "Achat, construction, location et gestion sous un même toit.",
      "why.3t": "Transparence", "why.3d": "Communication claire avec locataires, investisseurs et propriétaires.",
      "why.4t": "Qualité durable", "why.4d": "Immeubles entretenus pour la performance et le confort à long terme.",
      "inv.eyebrow": "Investisseurs", "inv.title": "Investissez avec nous",
      "inv.p1": "Participez à des projets résidentiels sélectionnés — maisons et plexes — avec une équipe qui détient et gère ses propres actifs.",
      "inv.li1": "Accès à des opportunités hors marché", "inv.li2": "Diligence et souscription rigoureuses", "inv.li3": "Rapports périodiques et gouvernance claire",
      "inv.cta": "Discuter d'un projet",
      "ten.eyebrow": "Locataires", "ten.title": "Louez en toute confiance",
      "ten.p1": "Maisons et logements soigneusement entretenus, processus de candidature simple et gestion réactive.",
      "ten.li1": "Propriétés inspectées et bien tenues", "ten.li2": "Demande en ligne rapide", "ten.li3": "Support locatif disponible",
      "ten.cta": "Faire une demande",
      "own.eyebrow": "Propriétaires", "own.title": "Confiez-nous votre immeuble",
      "own.p1": "Gestion professionnelle pour propriétaires de maisons et plexes qui veulent tranquillité d'esprit et rendement.",
      "own.li1": "Location, renouvellements et recouvrement", "own.li2": "Entretien préventif et urgences", "own.li3": "Comptabilité et rapports mensuels",
      "own.cta": "Obtenir une soumission",
      "contact.eyebrow": "Contact", "contact.title": "Parlons de votre projet",
      "contact.lead": "Québec — nous répondons rapidement par téléphone ou par courriel.",
      "contact.city": "Québec (QC)",
      "contact.name": "Nom", "contact.email": "Courriel", "contact.interest": "Intérêt", "contact.message": "Message",
      "contact.opt1": "Location / candidature", "contact.opt2": "Investissement", "contact.opt3": "Gestion immobilière", "contact.opt4": "Autre",
      "contact.submit": "Envoyer", "contact.note": "Ouvre votre client courriel — aucun envoi serveur.",
      "contact.success": "Merci — votre client courriel devrait s'ouvrir.",
      "footer.tag": "Immobilier résidentiel à Québec — maisons et plexes.",
      "footer.explore": "Explorer", "footer.audiences": "Publics", "footer.reach": "Nous joindre",
      "footer.rights": "Tous droits réservés.", "footer.photos": "Photos à titre illustratif.",
      "footer.credits": "Crédits photographiques",
      "aria.home": "TN inc., accueil", "aria.nav": "Principal", "aria.lang": "Langue", "aria.menu": "Menu", "aria.close": "Fermer",
      "meta.desc": "TN inc. bâtit, possède et gère l'immobilier résidentiel à Québec : construction, propriété et gestion de maisons et de plexes.",
      "meta.imageAlt": "Maison au crépuscule — TN inc., immobilier à Québec",
      "alt.about": "Maison contemporaine, photo illustrative",
      "alt.construction": "Chantier résidentiel, photo illustrative",
      "alt.management": "Immeuble résidentiel, photo illustrative",
      "alt.rentals": "Intérieur d'un logement, photo illustrative",
      "alt.investment": "Immeuble de rapport, photo illustrative",
      "alt.invest": "Clés sur des plans, photo illustrative",
      "alt.tenant": "Intérieur lumineux, photo illustrative",
      "alt.owners": "Maison de ville, photo illustrative",
      "credits.eyebrow": "Sources", "credits.title": "Crédits photographiques",
      "credits.lead": "Photos à titre illustratif. Ce ne sont pas nécessairement les immeubles de TN inc. Les images Creative Commons ci-dessous exigent une attribution.",
      "credits.cc": "Attribution exigée", "credits.other": "Autres sources illustratives",
      "credits.note": "Unsplash (licence Unsplash) et Pexels (licence Pexels). L'attribution n'est pas exigée. CC0 : Wilfredor, « 178 Rue Aberdeen », Québec.",
      "portfolio.noscript": "Activez JavaScript pour afficher le portefeuille.",
    },
    en: {
      skip: "Skip to content",
      "nav.about": "About", "nav.services": "Services", "nav.portfolio": "Portfolio",
      "nav.investors": "Investors", "nav.tenants": "Tenants", "nav.owners": "Owners", "nav.contact": "Contact",
      "hero.eyebrow": "Québec City · QC",
      "hero.title1": "We build.", "hero.title2": "We own.", "hero.title3": "We manage.",
      "hero.lead": "Your real estate in the same hands, from the first shovel in the ground to day-to-day management, in Québec City.",
      "hero.badge1": "Construction", "hero.badge2": "Ownership", "hero.badge3": "Management",
      "hero.cta1": "View portfolio", "hero.cta2": "Get in touch", "hero.scroll": "Scroll",
      "about.eyebrow": "Who we are", "about.title": "An integrated approach to residential real estate",
      "about.p1": "Based in Québec City, TN inc. supports tenants, investors and owners with a full-stack approach — from acquisition and construction to ownership, leasing and management.",
      "about.badge": "Pillars of expertise",
      "about.buy": "Buy", "about.buyDesc": "Disciplined selection of high-potential homes and plexes.",
      "about.build": "Build", "about.buildDesc": "Quality construction and renovation projects.",
      "about.own": "Own", "about.ownDesc": "Assets held for long-term value creation.",
      "about.manage": "Manage", "about.manageDesc": "Attentive leasing and management for tenants and owners.",
      "services.eyebrow": "What we do", "services.title": "Tailored services",
      "services.lead": "Four complementary capabilities to maximize every property's value.",
      "services.const": "Construction", "services.constDesc": "Design and delivery of homes and plexes suited to the Québec market.",
      "services.mgmt": "Property management", "services.mgmtDesc": "Full administration: tenants, maintenance, finances and compliance.",
      "services.rent": "Rentals", "services.rentDesc": "Carefully maintained homes and units in desirable neighbourhoods.",
      "services.inv": "Investment", "services.invDesc": "Opportunities to co-invest in performing residential assets.",
      "portfolio.eyebrow": "Our properties", "portfolio.title": "Selected portfolio",
      "portfolio.lead": "Single-family homes and quadruplexes in sought-after Québec City area neighbourhoods.",
      "portfolio.all": "All", "portfolio.houses": "Houses", "portfolio.quads": "Quadruplexes",
      "portfolio.inquire": "Request information",
      "portfolio.house": "House", "portfolio.quad": "Quadruplex",
      "portfolio.beds": "beds", "portfolio.baths": "baths", "portfolio.sqft": "sq ft", "portfolio.built": "Built",
      "portfolio.units": "Units",
      "stats.props": "Units managed", "stats.years": "Years of experience", "stats.occ": "Occupancy rate", "stats.areas": "Areas covered",
      "why.eyebrow": "Our difference", "why.title": "Why TN inc.",
      "why.1t": "Local roots", "why.1d": "Deep knowledge of Québec City, Lévis and surrounding neighbourhoods.",
      "why.2t": "Integrated approach", "why.2d": "Buy, build, lease and manage under one roof.",
      "why.3t": "Transparency", "why.3d": "Clear communication with tenants, investors and owners.",
      "why.4t": "Lasting quality", "why.4d": "Properties maintained for performance and long-term comfort.",
      "inv.eyebrow": "Investors", "inv.title": "Invest with us",
      "inv.p1": "Join selected residential projects — homes and plexes — with a team that owns and manages its own assets.",
      "inv.li1": "Access to off-market opportunities", "inv.li2": "Rigorous diligence and underwriting", "inv.li3": "Periodic reporting and clear governance",
      "inv.cta": "Discuss a project",
      "ten.eyebrow": "Tenants", "ten.title": "Rent with confidence",
      "ten.p1": "Carefully maintained homes and units, a simple application process and responsive management.",
      "ten.li1": "Inspected, well-kept properties", "ten.li2": "Fast online application", "ten.li3": "Responsive tenant support",
      "ten.cta": "Apply now",
      "own.eyebrow": "Owners", "own.title": "Entrust us with your property",
      "own.p1": "Professional management for home and plex owners who want peace of mind and performance.",
      "own.li1": "Leasing, renewals and collections", "own.li2": "Preventive maintenance and emergencies", "own.li3": "Accounting and monthly reports",
      "own.cta": "Get a quote",
      "contact.eyebrow": "Contact", "contact.title": "Let's talk about your project",
      "contact.lead": "Québec City, QC — we reply quickly by phone or email.",
      "contact.city": "Québec City, QC",
      "contact.name": "Name", "contact.email": "Email", "contact.interest": "Interest", "contact.message": "Message",
      "contact.opt1": "Rental / apply", "contact.opt2": "Investment", "contact.opt3": "Property management", "contact.opt4": "Other",
      "contact.submit": "Send", "contact.note": "Opens your email client — no server submission.",
      "contact.success": "Thanks — your email client should open.",
      "footer.tag": "Residential real estate in Québec City — homes and plexes.",
      "footer.explore": "Explore", "footer.audiences": "Audiences", "footer.reach": "Reach us",
      "footer.rights": "All rights reserved.", "footer.photos": "Photos for illustration purposes.",
      "footer.credits": "Photo credits",
      "aria.home": "TN inc., home", "aria.nav": "Primary", "aria.lang": "Language", "aria.menu": "Menu", "aria.close": "Close",
      "meta.desc": "TN inc. builds, owns and manages residential real estate in Québec City — from construction to ownership and day-to-day management.",
      "meta.imageAlt": "House at dusk — TN inc., Québec City real estate",
      "alt.about": "Contemporary house, illustrative photo",
      "alt.construction": "Residential construction, illustrative photo",
      "alt.management": "Residential building, illustrative photo",
      "alt.rentals": "Home interior, illustrative photo",
      "alt.investment": "Income property, illustrative photo",
      "alt.invest": "Keys on plans, illustrative photo",
      "alt.tenant": "Bright interior, illustrative photo",
      "alt.owners": "Townhouse, illustrative photo",
      "credits.eyebrow": "Sources", "credits.title": "Photo credits",
      "credits.lead": "Photos are illustrative. They are not necessarily properties owned by TN inc. The Creative Commons images below require attribution.",
      "credits.cc": "Attribution required", "credits.other": "Other illustrative sources",
      "credits.note": "Unsplash (Unsplash License) and Pexels (Pexels License). Attribution is not required. CC0: Wilfredor, “178 Rue Aberdeen”, Québec City.",
      "portfolio.noscript": "Enable JavaScript to view the portfolio.",
    },
  };

  let lang = "fr";
  let currentFilter = "all";
  let lastFocus = null;
  let openId = null;
  const PHOTO_SIZE = {
    h01: [1200, 800], h02: [1200, 800], h03: [1200, 800], h04: [1200, 800], h05: [1200, 780],
    h06: [1200, 800], h07: [1200, 800], h08: [1200, 798], h09: [1200, 900], h10: [1200, 800],
    q01: [1200, 888], q02: [1200, 900], q03: [1200, 800], q04: [1200, 774], q05: [1200, 900],
    q06: [1200, 900], q07: [1200, 902], q08: [1200, 800], q09: [1200, 716], q10: [1200, 1600],
  };

  try {
    const saved = localStorage.getItem("tn-lang");
    if (saved === "en" || saved === "fr") lang = saved;
  } catch (e) { /* private mode */ }

  function frTypo(str) {
    return str
      .replace(/[ \u00a0\u202f]+([:;!?])/g, (_, p) => (p === ":" ? "\u00a0:" : "\u202f" + p))
      .replace(/«[ \u00a0\u202f]*/g, "«\u00a0")
      .replace(/[ \u00a0\u202f]*»/g, "\u00a0»");
  }

  function lookup(key) {
    const current = I18N[lang] && I18N[lang][key];
    if (typeof current === "string" && current !== "") return lang === "fr" ? frTypo(current) : current;
    const fallback = I18N.fr && I18N.fr[key];
    if (typeof fallback === "string" && fallback !== "") return lang === "fr" ? frTypo(fallback) : fallback;
    return null;
  }

  function t(key) {
    const val = lookup(key);
    return val == null ? "" : val;
  }

  function formatNum(n) {
    return Number(n).toLocaleString(lang === "fr" ? "fr-CA" : "en-CA");
  }

  function attr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function photoMarkup(src, alt, sizes) {
    const small = src.replace(".webp", "-640.webp");
    const mid = src.replace(".webp", "-800.webp");
    return `src="${attr(src)}" srcset="${attr(small)} 640w, ${attr(mid)} 800w, ${attr(src)} 1200w" sizes="${sizes}" alt="${attr(alt)}" loading="lazy" decoding="async"`;
  }

  function formatPrice(n) {
    return new Intl.NumberFormat(lang === "fr" ? "fr-CA" : "en-CA", {
      style: "currency", currency: "CAD", maximumFractionDigits: 0,
    }).format(n);
  }

  function setContent(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.setAttribute("content", value);
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = lookup(key);
      if (val == null) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else if (el.tagName === "OPTION") {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = lookup(el.getAttribute("data-i18n-aria"));
      if (val != null) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const val = lookup(el.getAttribute("data-i18n-alt"));
      if (val != null) el.setAttribute("alt", val);
    });
    const title = lang === "fr"
      ? "TN inc. | Immobilier Québec"
      : "TN inc. | Québec Real Estate";
    document.title = title;
    const desc = t("meta.desc");
    setContent("metaDesc", desc);
    setContent("ogDesc", desc);
    setContent("twDesc", desc);
    setContent("ogTitle", title);
    setContent("twTitle", title);
    setContent("ogImageAlt", t("meta.imageAlt"));
    setContent("ogLocale", lang === "fr" ? "fr_CA" : "en_CA");
    renderPortfolio();
    if (openId) {
      const current = PROPERTIES.find((x) => x.id === openId);
      if (current) openModal(current);
    }
  }

  function setLang(next) {
    if (next !== "fr" && next !== "en") return;
    lang = next;
    try { localStorage.setItem("tn-lang", lang); } catch (e) { /* ignore */ }
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    applyI18n();
  }

  function renderPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    if (!grid) return;
    const sizes = "(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 31vw";
    grid.innerHTML = PROPERTIES.map((p) => {
      const typeLabel = p.type === "house" ? t("portfolio.house") : t("portfolio.quad");
      const meta = p.type === "house"
        ? `${formatNum(p.beds)} ${t("portfolio.beds")} · ${formatNum(p.baths)} ${t("portfolio.baths")} · ${formatNum(p.sqft)} ${t("portfolio.sqft")}`
        : `${p.units} · ${formatNum(p.sqft)} ${t("portfolio.sqft")}`;
      const hidden = currentFilter !== "all" && p.type !== currentFilter ? " hide" : "";
      const [w, h] = PHOTO_SIZE[p.id] || [1200, 800];
      const alt = `${p.title[lang]} — ${p.neigh}`;
      return `
        <article class="prop-card${hidden}" data-type="${p.type}" data-id="${p.id}">
          <button type="button" class="prop-hit" aria-label="${attr(alt)}"></button>
          <div class="prop-img">
            <img ${photoMarkup(p.img, alt, sizes)} width="${w}" height="${h}" />
            <span class="prop-tag">${typeLabel}</span>
          </div>
          <div class="prop-body">
            <p class="prop-neigh">${attr(p.neigh)}</p>
            <h3 class="prop-title">${attr(p.title[lang])}</h3>
            <p class="prop-meta">${meta}</p>
            <p class="prop-price">${formatPrice(p.price)}</p>
          </div>
        </article>`;
    }).join("");

    grid.querySelectorAll(".prop-card").forEach((card) => {
      const open = () => {
        const prop = PROPERTIES.find((x) => x.id === card.dataset.id);
        if (prop) openModal(prop);
      };
      card.querySelector(".prop-hit").addEventListener("click", open);
    });
  }

  function focusable(root) {
    return [...root.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      .filter((el) => !el.closest("[hidden]") && el.getAttribute("aria-hidden") !== "true");
  }

  function openModal(p) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modalImg");
    const [w, h] = PHOTO_SIZE[p.id] || [1200, 800];
    img.src = p.img;
    img.srcset = `${p.img.replace(".webp", "-640.webp")} 640w, ${p.img.replace(".webp", "-800.webp")} 800w, ${p.img} 1200w`;
    img.sizes = "(max-width: 800px) 92vw, 460px";
    img.width = w;
    img.height = h;
    img.alt = p.title[lang];
    document.getElementById("modalType").textContent = p.type === "house" ? t("portfolio.house") : t("portfolio.quad");
    document.getElementById("modalTitle").textContent = `${p.title[lang]} — ${p.neigh}`;
    document.getElementById("modalPrice").textContent = formatPrice(p.price);
    document.getElementById("modalDesc").textContent = p.desc[lang];
    const meta = document.getElementById("modalMeta");
    const units = lang === "fr" ? `${t("portfolio.units")}\u00a0: ${p.units}` : `${t("portfolio.units")}: ${p.units}`;
    const items = p.type === "house"
      ? [
          `${formatNum(p.beds)} ${t("portfolio.beds")}`,
          `${formatNum(p.baths)} ${t("portfolio.baths")}`,
          `${formatNum(p.sqft)} ${t("portfolio.sqft")}`,
          `${t("portfolio.built")} ${p.year}`,
        ]
      : [
          units,
          `${formatNum(p.sqft)} ${t("portfolio.sqft")}`,
          `${t("portfolio.built")} ${p.year}`,
        ];
    meta.innerHTML = items.map((i) => `<li>${attr(i)}</li>`).join("");
    openId = p.id;
    if (modal.hidden) lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(options) {
    const modal = document.getElementById("modal");
    if (modal.hidden) return;
    const restore = !options || options.restore !== false;
    openId = null;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (restore && lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  /* Reveal on scroll */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* Animated counters */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    el.textContent = "0" + suffix;
    requestAnimationFrame(frame);
  }

  function initCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
      nums.forEach(animateCount);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* Header scroll */
  function initHeader() {
    const header = document.getElementById("header");
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Mobile nav */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    const mobileQuery = window.matchMedia("(max-width: 1200px)");
    function sync() {
      const mobile = mobileQuery.matches;
      const open = nav.classList.contains("open");
      if (!mobile) nav.classList.remove("open");
      const shown = !mobile || nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", shown && mobile ? "true" : "false");
      if ("inert" in nav) nav.inert = mobile && !nav.classList.contains("open");
      nav.setAttribute("aria-hidden", mobile && !shown ? "true" : "false");
    }
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      sync();
      if (nav.classList.contains("open")) {
        const first = nav.querySelector("a");
        if (first) first.focus();
      }
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        sync();
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        sync();
        toggle.focus();
      }
    });
    mobileQuery.addEventListener("change", sync);
    sync();
  }

  /* Filters */
  function initFilters() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        currentFilter = btn.dataset.filter;
        renderPortfolio();
      });
    });
  }

  /* Contact form — mailto */
  function initForm() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const interest = form.interest.value;
      const message = form.message.value.trim();
      if (!form.reportValidity() || !name || !email || !message) return;
      const interestLabel = form.interest.options[form.interest.selectedIndex].text;
      const subject = encodeURIComponent(`[TN inc.] ${interestLabel} — ${name}`);
      const body = encodeURIComponent(
        `Nom / Name: ${name}\nCourriel / Email: ${email}\nIntérêt / Interest: ${interestLabel}\n\n${message}`
      );
      window.location.href = `mailto:nestormiron@gmail.com?subject=${subject}&body=${body}`;
      const success = document.getElementById("formSuccess");
      success.hidden = false;
    });
  }

  /* Modal close */
  function initModal() {
    const modal = document.getElementById("modal");
    modal.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => closeModal({ restore: el.tagName !== "A" }));
    });
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = focusable(modal);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* Lang buttons */
  function initLang() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  document.documentElement.classList.add("js");
  document.getElementById("year").textContent = new Date().getFullYear();

  try {
    initLang();
    setLang(lang);
    initHeader();
    initNav();
    initFilters();
    initForm();
    initModal();
    initReveal();
    initCounters();
  } catch (err) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }
})();
