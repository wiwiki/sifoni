/* ============================================================
   Bilingual (EN / FR) content + toggle
   Client-side i18n: swaps [data-i18n] text in place, remembers
   the choice in localStorage, updates <html lang> and <title>.
   ============================================================ */

const translations = {
  en: {
    /* ── shared: nav ── */
    "nav.home": "Home",
    "nav.cv": "CV",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    /* ── shared: footer ── */
    "footer.download": "Download CV (PDF)",

    /* ── index ── */
    "title.index": "Antoine Sifoni · Senior Product Owner",
    "home.eyebrow": "Senior Product Owner · Montréal",
    "home.h1": "Building products<br>that ship, scale<br>&amp; <em>get used.</em>",
    "home.sub": "Healthtech &middot; IoT &middot; AI-driven features",
    "home.lead": "Ten years turning messy problems into reliable, real-world products, from early-stage hardware startups to scaled clinical platforms. I care about <span class=\"hl\">execution</span>, roadmap ownership, and keeping teams aligned and moving fast.",
    "home.cta.cv": "View CV &rarr;",
    "home.cta.projects": "See projects",
    "home.m1": "Years building<br>products",
    "home.m2": "RX deliveries via<br>MYLE RX",
    "home.m3": "CareWay AI scribe<br>users, from 200",
    "home.m4": "Processed across<br>215 IoT machines",
    "home.howtitle": "How I work",
    "home.idx1": "/ 01 · approach",
    "home.focus1.h": "<span>01</span>Own the roadmap",
    "home.focus1.p": "Align product priorities, business needs, and development capacity, then keep the backlog clear so teams know exactly what to build next.",
    "home.focus2.h": "<span>02</span>Talk to real users",
    "home.focus2.p": "Interview physicians and operators directly, validate solutions through pilots, and close the loop with adoption metrics that actually mean something.",
    "home.focus3.h": "<span>03</span>Build the delivery system",
    "home.focus3.p": "Design and implement the internal processes, workflows, and rituals that keep multi-team delivery aligned, so coordination scales without slowing teams down.",
    "home.currently": "Currently",
    "home.idx2": "/ 02 · now",
    "home.currently.p": "Senior Product Owner at <strong>Medfar Solutions</strong>, owning backlog and roadmap across multiple clinical products, including the launch of MYLE RX and the Product Owner role on CareWay, a cross-platform AI scribe now used by thousands of practitioners.",
    "home.fullhistory": "Full work history &rarr;",

    /* ── cv ── */
    "title.cv": "CV · Antoine Sifoni",
    "cv.eyebrow": "Curriculum Vitae",
    "cv.role": "Senior Product Owner",
    "cv.intro": "Senior Product Owner with 10+ years delivering complex products in healthtech and IoT environments. I focus on execution, roadmap ownership, and keeping teams aligned and moving fast, from early-stage startups to scaled platforms.",
    "cv.h.contact": "Contact",
    "cv.h.education": "Education",
    "cv.h.skills": "Skills",
    "cv.h.tools": "Tools",
    "cv.h.languages": "Languages",
    "cv.h.formations": "Formations",
    "cv.k.email": "Email",
    "cv.k.phone": "Phone",
    "cv.k.location": "Location",
    "cv.v.location": "Montréal, QC, Canada",
    "cv.edu.deg1": "B.Eng. Mechanical Eng.",
    "cv.edu.deg1.school": "École de technologie supérieure",
    "cv.edu.deg2": "P.Eng. (OIQ)",
    "cv.skill1": "Roadmap Ownership",
    "cv.skill2": "Strategic Thinking",
    "cv.skill3": "Project Management",
    "cv.skill4": "Multi-platform Delivery",
    "cv.skill5": "User Interviews",
    "cv.skill6": "Data Analysis",
    "cv.skill7": "Problem Solving",
    "cv.skill8": "Leadership",
    "cv.skill9": "Communication",
    "cv.lang.en": "English",
    "cv.lang.fr": "French",
    "cv.workhistory": "Work History",
    "cv.xp1.pos1": "Senior Product Owner",
    "cv.xp1.pos2": "Product Owner",
    "cv.xp1.li1": "<b>Team coordination &amp; roadmap alignment.</b> Led roadmap reviews with multidisciplinary stakeholders, aligning product priorities, business needs, and development capacity across multiple product areas.",
    "cv.xp1.li2": "<b>Backlog ownership &amp; delivery.</b> Owned backlog and sprint planning for multiple products, acting as the main point of contact for developers on functional scope and clarifications.",
    "cv.xp1.li3": "<b>Product impact.</b> Drove end-to-end delivery from user needs to pilot validation and adoption. Played a key role in launching MYLE RX, a web application for prescription coordination, supporting 4,000+ prescription deliveries since release.",
    "cv.xp1.li4": "<b>User research.</b> Conduct interviews directly with physicians to capture clinical needs, validate solutions, and maintain continuous feedback loops.",
    "cv.xp1.li5": "<b>AI product &amp; multi-platform delivery.</b> Product Owner on CareWay, an AI scribe built as a cross-platform web application with a companion mobile app. Coordinated the team through the Apple App Store and Google Play submission and approval process, growing adoption from 200 to 5,000 users.",
    "cv.xp1.li6": "<b>Post-acquisition integration.</b> Led the integration of CareWay's newly acquired development team into Medfar's processes, tooling, and delivery standards, while keeping the product shipping.",
    "cv.xp2.pos": "Co-founder &amp; Chief Operating Officer",
    "cv.xp2.desc": "An IoT company developing connected hardware integrated with a SaaS platform and payment systems, enabling self-service experiences across food service, donations, and senior living.",
    "cv.xp2.li1": "<b>Product vision &amp; strategy.</b> Defined and executed the vision for a connected ecosystem combining smart devices, software, and payment infrastructure.",
    "cv.xp2.li2": "<b>Cross-functional development.</b> Led collaboration across hardware, firmware, and software teams to deliver integrated products.",
    "cv.xp2.li3": "<b>Market expansion.</b> Supported a fleet of 215 active machines across Québec and Ontario, processing ~$2M in transactions across three verticals.",
    "cv.xp2.li4": "<b>Operational scaling.</b> Designed systems for reliability and low maintenance, with hardware assembly simple enough for non-technical operators.",
    "cv.xp3.pos": "Technical Lead, Product Design",
    "cv.xp3.li1": "<b>Product line development.</b> Owned a new hardware product line, expanding Connect&amp;Go's client base in access control for the ski sector.",
    "cv.xp3.li2": "<b>Budget &amp; timeline management.</b> Managed the production line's budget and timelines for cost-effective, timely delivery.",
    "cv.xp3.li3": "<b>Product design.</b> Designed products from RFID wristbands to self-service ticket kiosks.",
    "cv.xp4.pos": "Professor in Mechanical Engineering (part-time)",
    "cv.xp4.desc": "Designed and taught Excel, SolidWorks, and GD&amp;T courses, adapting instruction to a diverse student body and varied learning preferences.",
    "cv.xp5.pos": "Co-founder &amp; Chief Operating Officer",
    "cv.xp5.desc": "Award-winning self-serve cocktail dispenser for the event industry. Co-founded out of an entrepreneurship class. Led product development and pre-seed financing, then pivoted the hardware/software base to launch Brite4.",
    "cv.xp1.date": "2023 – Present",

    /* ── projects ── */
    "title.projects": "Projects · Antoine Sifoni",
    "proj.eyebrow": "Selected Work",
    "proj.h1": "Things I've<br>helped build.",
    "proj.intro": "A handful of products spanning healthtech, IoT, and connected hardware, each one shipped, scaled, and used in the real world.",
    "proj.viewlive": "View live &rarr;",
    "proj.p1.desc": "Electronic prescription delivery built into Medfar's clinical platform. Took it from concept through pilot validation to launch, supporting 4,000+ prescription deliveries since release.",
    "proj.p1.t1": "Product Owner",
    "proj.p1.t2": "Healthtech",
    "proj.p1.t3": "Pilot &amp; Launch",
    "proj.p2.desc": "An AI scribe for physicians, built as a cross-platform web application with a companion mobile app. Coordinated the team through Apple App Store and Google Play submission and approval, growing usage from 200 to 5,000 practitioners.",
    "proj.p2.t1": "Product Owner",
    "proj.p2.t2": "AI Scribe",
    "proj.p2.t3": "Multi-platform",
    "proj.p3.desc": "Connected hardware + SaaS + payments enabling self-service across food service, donations, and senior living. A single tech backbone serving three verticals: 215 machines, ~$2M processed.",
    "proj.p3.t1": "IoT",
    "proj.p3.t2": "Hardware + Software",
    "proj.p3.t3": "Payments",
    "proj.p3.t4": "Co-founder",
    "proj.p4.desc": "A new hardware product line for Connect&amp;Go, from RFID wristbands to self-service ticket kiosks, expanding their client base in the ski access-control market.",
    "proj.p4.t1": "Hardware",
    "proj.p4.t2": "Product Design",
    "proj.p4.t3": "RFID",
    "proj.p5.desc": "An award-winning self-serve cocktail dispenser for events. Co-founded from an entrepreneurship class. Led product development and pre-seed financing before pivoting the tech into Brite4.",
    "proj.p5.t1": "Hardware",
    "proj.p5.t2": "Co-founder",
    "proj.p5.t3": "Pre-seed",
    "proj.p6.desc": "Own and operate two multi-unit properties (7 units total) in Montréal. Currently leading a full structural renovation of a century-old home, managing budget, contractors, permits, and timeline end-to-end.",
    "proj.p6.t1": "Real Estate",
    "proj.p6.t2": "Capital Planning",
    "proj.p6.t3": "Multi-vendor Coordination",
    "proj.p6.t4": "Long-horizon Delivery",
    "proj.p6.meta": "PERSONAL",

    /* ── contact ── */
    "title.contact": "Contact · Antoine Sifoni",
    "contact.eyebrow": "Get in touch",
    "contact.h2": "Let's build<br>something <em>good.</em>",
    "contact.intro": "Always open to conversations about product, healthtech, IoT, or interesting problems worth solving. The fastest way to reach me is email.",
    "contact.lab.email": "Email",
    "contact.lab.phone": "Phone",
    "contact.lab.location": "Location",
    "contact.lab.resume": "Résumé",
    "contact.val.location": "Montréal, QC",
    "contact.val.cv": "View full CV &rarr;",
    "contact.footer.meta": "MONTRÉAL, QC · SENIOR PRODUCT OWNER"
  },

  fr: {
    /* ── shared: nav ── */
    "nav.home": "Accueil",
    "nav.cv": "CV",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    /* ── shared: footer ── */
    "footer.download": "Télécharger le CV (PDF)",

    /* ── index ── */
    "title.index": "Antoine Sifoni · Product Owner Sénior",
    "home.eyebrow": "Product Owner Sénior · Montréal",
    "home.h1": "Des produits qui<br>livrent, évoluent<br>&amp; <em>sont utilisés.</em>",
    "home.sub": "Santé numérique &middot; IdO &middot; Fonctionnalités propulsées par l'IA",
    "home.lead": "Dix ans à transformer des problèmes complexes en produits fiables et concrets, des startups matérielles en démarrage aux plateformes cliniques à grande échelle. Je mise sur <span class=\"hl\">l'exécution</span>, la responsabilité de la feuille de route, et la cohésion d'équipes qui avancent vite.",
    "home.cta.cv": "Voir le CV &rarr;",
    "home.cta.projects": "Voir les projets",
    "home.m1": "Années à concevoir<br>des produits",
    "home.m2": "Livraisons RX via<br>MYLE RX",
    "home.m3": "Utilisateurs du scribe<br>IA CareWay, depuis 200",
    "home.m4": "Traités via<br>215 machines IdO",
    "home.howtitle": "Comment je travaille",
    "home.idx1": "/ 01 · approche",
    "home.focus1.h": "<span>01</span>Piloter la feuille de route",
    "home.focus1.p": "Aligner les priorités produit, les besoins d'affaires et la capacité de développement, puis garder le backlog clair pour que les équipes sachent exactement quoi construire ensuite.",
    "home.focus2.h": "<span>02</span>Parler aux vrais utilisateurs",
    "home.focus2.p": "Interviewer directement médecins et opérateurs, valider les solutions par des pilotes, et boucler la boucle avec des métriques d'adoption qui ont réellement du sens.",
    "home.focus3.h": "<span>03</span>Bâtir le système de livraison",
    "home.focus3.p": "Concevoir et mettre en place les processus, flux de travail et rituels internes qui maintiennent l'alignement de la livraison multi-équipes, pour que la coordination passe à l'échelle sans ralentir les équipes.",
    "home.currently": "En ce moment",
    "home.idx2": "/ 02 · maintenant",
    "home.currently.p": "Product Owner Sénior chez <strong>Medfar Solutions</strong>, responsable du backlog et de la feuille de route de plusieurs produits cliniques, incluant le lancement de MYLE RX et le rôle de Product Owner sur CareWay, un scribe IA multiplateforme désormais utilisé par des milliers de praticiens.",
    "home.fullhistory": "Parcours complet &rarr;",

    /* ── cv ── */
    "title.cv": "CV · Antoine Sifoni",
    "cv.eyebrow": "Curriculum Vitæ",
    "cv.role": "Product Owner Sénior",
    "cv.intro": "Product Owner Sénior avec plus de 10 ans à livrer des produits complexes en santé numérique et en environnements IdO. Je mise sur l'exécution, la responsabilité de la feuille de route, et la cohésion d'équipes qui avancent vite, des startups en démarrage aux plateformes à grande échelle.",
    "cv.h.contact": "Contact",
    "cv.h.education": "Formation",
    "cv.h.skills": "Compétences",
    "cv.h.tools": "Outils",
    "cv.h.languages": "Langues",
    "cv.h.formations": "Formations",
    "cv.k.email": "Courriel",
    "cv.k.phone": "Téléphone",
    "cv.k.location": "Lieu",
    "cv.v.location": "Montréal, QC, Canada",
    "cv.edu.deg1": "B. Ing. Génie mécanique",
    "cv.edu.deg1.school": "École de technologie supérieure",
    "cv.edu.deg2": "Ing. (OIQ)",
    "cv.skill1": "Responsabilité de la feuille de route",
    "cv.skill2": "Réflexion stratégique",
    "cv.skill3": "Gestion de projet",
    "cv.skill4": "Livraison multiplateforme",
    "cv.skill5": "Entrevues utilisateurs",
    "cv.skill6": "Analyse de données",
    "cv.skill7": "Résolution de problèmes",
    "cv.skill8": "Leadership",
    "cv.skill9": "Communication",
    "cv.lang.en": "Anglais",
    "cv.lang.fr": "Français",
    "cv.workhistory": "Parcours professionnel",
    "cv.xp1.pos1": "Product Owner Sénior",
    "cv.xp1.pos2": "Product Owner",
    "cv.xp1.li1": "<b>Coordination d'équipe &amp; alignement de la feuille de route.</b> Animé les revues de feuille de route avec des parties prenantes multidisciplinaires, alignant priorités produit, besoins d'affaires et capacité de développement à travers plusieurs domaines produit.",
    "cv.xp1.li2": "<b>Responsabilité du backlog &amp; livraison.</b> Responsable du backlog et de la planification des sprints pour plusieurs produits, principal point de contact des développeurs sur la portée fonctionnelle et les clarifications.",
    "cv.xp1.li3": "<b>Impact produit.</b> Piloté la livraison de bout en bout, des besoins utilisateurs à la validation pilote et à l'adoption. Joué un rôle clé dans le lancement de MYLE RX, une application web de coordination des prescriptions, soutenant plus de 4 000 livraisons de prescriptions depuis sa sortie.",
    "cv.xp1.li4": "<b>Recherche utilisateur.</b> Mener des entrevues directement avec les médecins pour capter les besoins cliniques, valider les solutions et maintenir des boucles de rétroaction continues.",
    "cv.xp1.li5": "<b>Produit IA &amp; livraison multiplateforme.</b> Product Owner sur CareWay, un scribe IA conçu comme une application web multiplateforme avec une application mobile compagnon. Coordonné l'équipe à travers le processus de soumission et d'approbation sur l'Apple App Store et Google Play, faisant croître l'adoption de 200 à 5 000 utilisateurs.",
    "cv.xp1.li6": "<b>Intégration post-acquisition.</b> Dirigé l'intégration de l'équipe de développement nouvellement acquise de CareWay dans les processus, outils et standards de livraison de Medfar, tout en gardant le produit en livraison continue.",
    "cv.xp2.pos": "Cofondateur &amp; Chef des opérations",
    "cv.xp2.desc": "Une entreprise IdO développant du matériel connecté intégré à une plateforme SaaS et à des systèmes de paiement, permettant des expériences en libre-service dans la restauration, les dons et les résidences pour aînés.",
    "cv.xp2.li1": "<b>Vision &amp; stratégie produit.</b> Défini et exécuté la vision d'un écosystème connecté combinant appareils intelligents, logiciels et infrastructure de paiement.",
    "cv.xp2.li2": "<b>Développement transversal.</b> Dirigé la collaboration entre les équipes matériel, micrologiciel et logiciel pour livrer des produits intégrés.",
    "cv.xp2.li3": "<b>Expansion du marché.</b> Soutenu un parc de 215 machines actives au Québec et en Ontario, traitant environ 2 M$ de transactions dans trois secteurs.",
    "cv.xp2.li4": "<b>Mise à l'échelle opérationnelle.</b> Conçu des systèmes fiables et à faible entretien, avec un assemblage matériel assez simple pour des opérateurs non techniques.",
    "cv.xp3.pos": "Responsable technique, conception de produits",
    "cv.xp3.li1": "<b>Développement de gamme de produits.</b> Responsable d'une nouvelle gamme de produits matériels, élargissant la clientèle de Connect&amp;Go en contrôle d'accès pour le secteur du ski.",
    "cv.xp3.li2": "<b>Gestion du budget &amp; des échéanciers.</b> Géré le budget et les échéanciers de la ligne de production pour une livraison rentable et ponctuelle.",
    "cv.xp3.li3": "<b>Conception de produits.</b> Conçu des produits, des bracelets RFID aux bornes de billetterie en libre-service.",
    "cv.xp4.pos": "Professeur en génie mécanique (temps partiel)",
    "cv.xp4.desc": "Conçu et enseigné des cours d'Excel, SolidWorks et de cotation GD&amp;T, en adaptant l'enseignement à une clientèle étudiante diversifiée et à des préférences d'apprentissage variées.",
    "cv.xp5.pos": "Cofondateur &amp; Chef des opérations",
    "cv.xp5.desc": "Distributeur de cocktails en libre-service primé pour l'industrie événementielle. Cofondé dans le cadre d'un cours d'entrepreneuriat. Dirigé le développement produit et le financement de pré-amorçage, puis pivoté la base matériel/logiciel pour lancer Brite4.",
    "cv.xp1.date": "2023 – Présent",

    /* ── projects ── */
    "title.projects": "Projets · Antoine Sifoni",
    "proj.eyebrow": "Travaux choisis",
    "proj.h1": "Ce que j'ai<br>aidé à bâtir.",
    "proj.intro": "Une sélection de produits couvrant la santé numérique, l'IdO et le matériel connecté, chacun livré, mis à l'échelle et utilisé dans le monde réel.",
    "proj.viewlive": "Voir en ligne &rarr;",
    "proj.p1.desc": "Livraison électronique de prescriptions intégrée à la plateforme clinique de Medfar. Mené du concept à la validation pilote puis au lancement, soutenant plus de 4 000 livraisons de prescriptions depuis sa sortie.",
    "proj.p1.t1": "Product Owner",
    "proj.p1.t2": "Santé numérique",
    "proj.p1.t3": "Pilote &amp; Lancement",
    "proj.p2.desc": "Un scribe IA pour les médecins, conçu comme une application web multiplateforme avec une application mobile compagnon. Coordonné l'équipe à travers la soumission et l'approbation sur l'Apple App Store et Google Play, faisant croître l'utilisation de 200 à 5 000 praticiens.",
    "proj.p2.t1": "Product Owner",
    "proj.p2.t2": "Scribe IA",
    "proj.p2.t3": "Multiplateforme",
    "proj.p3.desc": "Matériel connecté + SaaS + paiements permettant le libre-service dans la restauration, les dons et les résidences pour aînés. Une seule épine dorsale technologique au service de trois secteurs : 215 machines, environ 2 M$ traités.",
    "proj.p3.t1": "IdO",
    "proj.p3.t2": "Matériel + Logiciel",
    "proj.p3.t3": "Paiements",
    "proj.p3.t4": "Cofondateur",
    "proj.p4.desc": "Une nouvelle gamme de produits matériels pour Connect&amp;Go, des bracelets RFID aux bornes de billetterie en libre-service, élargissant leur clientèle dans le marché du contrôle d'accès pour le ski.",
    "proj.p4.t1": "Matériel",
    "proj.p4.t2": "Conception de produits",
    "proj.p4.t3": "RFID",
    "proj.p5.desc": "Un distributeur de cocktails en libre-service primé pour les événements. Cofondé dans le cadre d'un cours d'entrepreneuriat. Dirigé le développement produit et le financement de pré-amorçage avant de pivoter la technologie vers Brite4.",
    "proj.p5.t1": "Matériel",
    "proj.p5.t2": "Cofondateur",
    "proj.p5.t3": "Pré-amorçage",
    "proj.p6.desc": "Propriétaire et gestionnaire de deux immeubles multilogements (7 logements au total) à Montréal. Je dirige actuellement une rénovation structurale complète d'une maison centenaire, gérant budget, entrepreneurs, permis et échéancier de bout en bout.",
    "proj.p6.t1": "Immobilier",
    "proj.p6.t2": "Planification du capital",
    "proj.p6.t3": "Coordination multifournisseurs",
    "proj.p6.t4": "Livraison à long terme",
    "proj.p6.meta": "PERSONNEL",

    /* ── contact ── */
    "title.contact": "Contact · Antoine Sifoni",
    "contact.eyebrow": "Entrons en contact",
    "contact.h2": "Bâtissons<br>quelque chose de <em>bien.</em>",
    "contact.intro": "Toujours ouvert aux échanges sur le produit, la santé numérique, l'IdO ou tout problème intéressant à résoudre. Le moyen le plus rapide de me joindre est le courriel.",
    "contact.lab.email": "Courriel",
    "contact.lab.phone": "Téléphone",
    "contact.lab.location": "Lieu",
    "contact.lab.resume": "CV",
    "contact.val.location": "Montréal, QC",
    "contact.val.cv": "Voir le CV complet &rarr;",
    "contact.footer.meta": "MONTRÉAL, QC · PRODUCT OWNER SÉNIOR"
  }
};

function applyLang(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val === undefined) return;
    if (el.tagName === "TITLE") {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-toggle button[data-lang]").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initI18n() {
  let lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  if (lang !== "en" && lang !== "fr") lang = "en";
  applyLang(lang);
  document.querySelectorAll(".lang-toggle button[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
