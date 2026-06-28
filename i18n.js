/* ============================================================
   Bilingual (EN / FR) content + toggle
   English is the source of truth: it lives directly in the HTML.
   On load this script captures the original (EN) markup of every
   [data-i18n] node, holds the FR strings below, and swaps content
   in place — remembering the choice in localStorage, updating
   <html lang>, the <title>, and the toggle's aria-pressed state.
   ============================================================ */

const fr = {
  /* ── shared: nav ── */
  "nav.home": "Accueil",
  "nav.cv": "CV",
  "nav.projects": "Projets",
  "nav.contact": "Contact",
  "nav.skip": "Aller au contenu",
  /* ── shared: footer ── */
  "footer.download": "Télécharger le CV (PDF)",

  /* ── index ── */
  "title.index": "Antoine Sifoni · Product Owner sénior",
  "home.eyebrow": "Product Owner sénior · Montréal",
  "home.h1": "Des produits qui<br>sortent, évoluent<br>&amp; <em>sont utilisés.</em>",
  "home.sub": "Santé numérique &middot; IdO &middot; fonctionnalités IA",
  "home.lead": "Dix ans à transformer des problèmes complexes en produits fiables et concrets, des startups matérielles en démarrage aux plateformes cliniques à grande échelle. Ce qui me motive : l'<span class=\"hl\">exécution</span>, la propriété de la feuille de route et des équipes alignées qui avancent vite.",
  "home.cta.cv": "Voir le CV &rarr;",
  "home.cta.projects": "Voir les projets",
  "home.m1": "ans à bâtir<br>des produits",
  "home.m2": "livraisons d'ordonnances<br>via MYLE RX",
  "home.m3": "utilisateurs du scribe IA<br>CareWay (depuis 200)",
  "home.m4": "traités sur<br>215 appareils IdO",
  "home.howtitle": "Ma façon de travailler",
  "home.idx1": "/ 01 · approche",
  "home.focus1.h": "<span>01</span>Piloter la feuille de route",
  "home.focus1.p": "Aligner les priorités produit, les besoins d'affaires et la capacité de développement, puis garder le backlog clair pour que les équipes sachent exactement quoi livrer ensuite.",
  "home.focus2.h": "<span>02</span>Parler aux vrais utilisateurs",
  "home.focus2.p": "Rencontrer directement les médecins et les utilisateurs, valider les solutions par des projets pilotes, et boucler la boucle avec des indicateurs d'adoption qui veulent dire quelque chose.",
  "home.focus3.h": "<span>03</span>Bâtir le système de livraison",
  "home.focus3.p": "Concevoir et implanter les processus, les flux de travail et les rituels internes qui gardent la livraison multiéquipe alignée — pour que la coordination passe à l'échelle sans ralentir les équipes.",
  "home.currently": "En ce moment",
  "home.idx2": "/ 02 · maintenant",
  "home.currently.p": "Product Owner sénior chez <strong>Medfar Solutions</strong>, responsable du backlog et de la feuille de route de plusieurs produits cliniques, dont le lancement de MYLE RX et le rôle de Product Owner sur CareWay, un scribe IA multiplateforme aujourd'hui utilisé par des milliers de praticiens.",
  "home.fullhistory": "Parcours professionnel complet &rarr;",

  /* ── cv ── */
  "title.cv": "CV · Antoine Sifoni",
  "cv.eyebrow": "Curriculum Vitæ",
  "cv.role": "Product Owner sénior",
  "cv.intro": "Product Owner sénior avec plus de 10 ans à livrer des produits complexes en santé numérique et en environnements IdO. Je mise sur l'exécution, la responsabilité de la feuille de route, et la cohésion d'équipes qui avancent vite, des startups en démarrage aux plateformes à grande échelle.",
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
  "cv.xp1.pos1": "Product Owner sénior",
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
};

/* original EN markup, captured straight from the DOM on first run */
const originals = new Map();
function captureOriginals() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    if (!originals.has(el)) {
      originals.set(el, el.tagName === "TITLE" ? el.textContent : el.innerHTML);
    }
  });
}

function applyLang(lang) {
  const useFr = lang === "fr";
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    let val = useFr ? fr[key] : undefined;
    if (val === undefined) val = originals.get(el);   // EN (and any FR gap) falls back to original markup
    if (val === undefined) return;
    if (el.tagName === "TITLE") {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-toggle button[data-lang]").forEach(function (btn) {
    const on = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initI18n() {
  captureOriginals();
  let lang = null;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  if (lang !== "en" && lang !== "fr") {
    // first visit: honour the browser's preferred language
    const pref = (navigator.language || "en").toLowerCase();
    lang = pref.indexOf("fr") === 0 ? "fr" : "en";
  }
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
