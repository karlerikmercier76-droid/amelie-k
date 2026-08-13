/* ================================================================
   SCRIPT.JS — Site d'Amélie K. / Travorium
   ----------------------------------------------------------------
   Ce fichier gère toutes les interactions de la page :
   1. Navigation qui change d'apparence au scroll
   2. Animations d'apparition des éléments au scroll
   3. Validation du formulaire avant envoi
   4. Message de succès après envoi
   5. Bouton "retour en haut" qui apparaît au scroll
================================================================ */


/* ----------------------------------------------------------------
   1. NAVIGATION — devient opaque quand on scrolle vers le bas
---------------------------------------------------------------- */

// On récupère la barre de navigation dans le HTML
const barreNavigation = document.getElementById('barre-navigation');
const boutonsLangue = document.querySelectorAll('.bouton-langue');
let langueActive = 'fr';

const traductions = {
  fr: {
    'nav.about': 'À propos',
    'nav.videos': 'Vidéos',
    'nav.contact': 'Me contacter',
    'nav.cta': 'Je suis intéressé·e',
    'hero.eyebrow': '✈️ Découvre une nouvelle façon de voyager',
    'hero.title': 'Accède aux tarifs réservés à l\'industrie du voyage — et crée un revenu en partageant cette découverte.',
    'hero.btnVideos': 'Voir les vidéos',
    'hero.btnContact': 'Me contacter',
    'about.title': 'Je suis Amélie.',
    'about.p1': 'J\'ai 41 ans. Je vis à Montréal, au Canada, et j\'ai grandi à Québec',
    'about.p2': 'Pendant longtemps, j\'ai construit ma vie autour de ce qu\'on nous apprend souvent : faire des études, bâtir une carrière, acheter une maison, fonder une famille et entretenir une relation de couple solide. Aujourd\'hui, cela fait plus de 20 ans que je partage ma vie avec mon conjoint. Nous avons deux enfants : une fille de 6 ans et un garçon de 3 ans.',
    'about.p3': 'J\'ai complété deux baccalauréats et une maîtrise, ce qui me permet d\'exercer depuis plus de 15 ans dans le domaine de la relation d\'aide. C\'est une profession que j\'aime profondément et que je considère comme une véritable vocation.',
    'about.p4': 'Avec les années, j\'ai toutefois pris conscience d\'une réalité que vivent de nombreux professionnels : même lorsqu\'on aime son travail, qu\'on s\'investit pleinement et qu\'on consacre des années à se former, il peut exister un écart entre tout ce que l\'on donne et la qualité de vie à laquelle on aspire. Cette réflexion devient encore plus présente lorsqu\'on pense à l\'avenir, à la retraite et au temps que l\'on souhaite consacrer à ceux qu\'on aime.',
    'about.p5': 'En 2024, j\'ai réalisé qu\'une partie de moi s\'était doucement effacée derrière les responsabilités du quotidien. Pendant près de dix ans, j\'avais mis de côté une passion qui m\'a toujours habitée : explorer le monde et découvrir d\'autres cultures.',
    'about.p6': 'En janvier 2025, j\'ai donc décidé d\'entreprendre un projet en parallèle de ma carrière.',
    'about.p7': 'Au départ, mon objectif était simple : remettre le voyage au centre de ma vie.',
    'about.p8': 'En recommençant à voyager, j\'ai reconnecté avec une partie de moi qui se ressource, s\'émerveille devant la beauté et la diversité des paysages, convaincue que chaque voyage nous transforme un peu plus.',
    'about.p9': 'Aujourd\'hui, ce qui me motive le plus, c\'est de faire découvrir ce projet et d\'inspirer d\'autres personnes à se créer une qualité de vie davantage centrée sur ce qui compte réellement à leurs yeux.',
    'about.p10': 'Intégrer un club de voyage privé et choisir de devenir partenaire indépendante représente bien plus qu\'une façon de voyager davantage.',
    'about.p11': 'C\'est une façon de créer plus de liberté.<br>Plus de temps de qualité avec ses proches.<br>Plus de possibilités pour son avenir',
    'about.p12': 'Si mon parcours t\'interpelle, ce sera un plaisir de faire ta connaissance.<br><br>Amélie K.',
    'about.point1': 'Accès aux tarifs réservés à l\'industrie du voyage',
    'about.point2': 'Économies jusqu\'à 80% sur hôtels, vols et croisières',
    'about.point3': 'Possibilité de créer un revenu en partageant l\'accès',
    'about.cta': 'En savoir plus →',
    'testimony.eyebrow': 'Témoignage',
    'testimony.title': 'Un aperçu en vidéo',
    'testimony.thanks': 'Merci à Marilou, Guitry, Séverine, Danny, Annie, Romuald et Catherine pour leurs témoignages.',
    'videos.eyebrow': 'Regarde avant de décider',
    'videos.title': 'Tout comprendre en moins de 15 minutes',
    'videos.v1.label': 'Présentation de l\'entreprise',
    'videos.v1.desc': 'Vue d\'ensemble complète de la plateforme Travorium et de ce qu\'elle offre.',
    'videos.v2.label': '5 questions fréquentes',
    'videos.v2.desc': 'Les réponses aux questions qui reviennent le plus souvent sur le partenariat.',
    'form.eyebrow': 'Prêt·e à passer à l\'action ?',
    'form.title': 'Dis-moi ce que tu aimerais faire',
    'form.subtitle': 'Je te réponds personnellement dans les 24 heures.',
    'success.title': 'Message envoyé !',
    'success.text': 'Merci ! Je te reviens très bientôt.',
    'form.legend.interests': 'J\'aimerais : <span class="texte-optionnel">(plus d\'un choix possible)</span>',
    'form.interest.zoom': 'Assister à la présentation Zoom — dimanche à 14h00, heure du Québec',
    'form.interest.partner': 'Découvrir comment devenir partenaire et créer un revenu supplémentaire',
    'form.interest.member': 'Devenir membre pour accéder aux tarifs préférentiels — jusqu\'à 80% d\'économies',
    'form.legend.contact': 'Je préfère être contacté·e par : <span class="texte-obligatoire">*</span>',
    'form.pref.email': 'Courriel',
    'form.pref.sms': 'Message texte',
    'form.pref.call': 'Appel téléphonique',
    'form.error.contact': 'Veuillez choisir un mode de contact.',
    'form.field.firstName': 'Prénom',
    'form.field.email': 'Courriel',
    'form.field.phone': 'Téléphone <span class="texte-optionnel">(optionnel)</span>',
    'form.placeholder.firstName': 'Ton prénom',
    'form.placeholder.email': 'ton@courriel.com',
    'form.placeholder.phone': '(514) 000-0000',
    'form.error.email': 'Adresse courriel invalide.',
    'form.submit': 'Envoyer mon message',
    'footer.greeting': 'Au plaisir de te parler,',
    'footer.facebook.subtitle': 'Voir mon profil Facebook',
    'footer.messenger.subtitle': 'Écris-moi directement',
    'footer.join.subtitle': 'Rejoindre Travorium',
    'footer.note': 'Pour afficher le site Travorium en français, clique sur le drapeau 🇫🇷 en haut de la page.',
    'status.mailReadyTitle': 'Courriel prêt à envoyer',
    'status.mailReadyText': 'Votre application de courriel s\'ouvre avec le message prérempli.',
    'status.sentTitle': 'Message envoyé !',
    'status.sentText': 'Merci ! Je te reviens très bientôt.',
    'status.fallbackText': 'EmailJS est indisponible pour le moment. Le courriel prérempli vient de s\'ouvrir.',
    'emailjs.configError': 'Configuration EmailJS incomplète : ',
    'emailjs.tryLater': 'Envoi impossible pour le moment. Réessayez dans quelques minutes.',
    'emailjs.subject': 'Nouveau prospect - Travorium',
    'email.label.newLead': 'Nouveau prospect',
    'email.label.firstName': 'Prénom : ',
    'email.label.email': 'Courriel :',
    'email.label.phone': 'Téléphone :',
    'email.label.interest': 'Intérêt :',
    'email.label.preference': 'Préférence :',
    'email.value.notProvided': 'Non renseigné',
    'email.value.none': 'Aucun',
    'email.interest.zoom': 'Zoom',
    'email.interest.partner': 'Partenaire',
    'email.interest.member': 'Membre',
    'email.preference.email': 'Courriel',
    'email.preference.sms': 'Message texte',
    'email.preference.call': 'Appel téléphonique'
  },
  en: {
    'nav.about': 'About',
    'nav.videos': 'Videos',
    'nav.contact': 'Contact me',
    'nav.cta': 'I am interested',
    'hero.eyebrow': '✈️ Discover a new way to travel',
    'hero.title': 'Get access to travel-industry rates — and create income by sharing this discovery.',
    'hero.btnVideos': 'Watch videos',
    'hero.btnContact': 'Contact me',
    'about.title': 'I am Amelie.',
    'about.p1': 'I am 41 years old. I live in Montreal, Canada, and I grew up in Quebec City.',
    'about.p2': 'For a long time, I built my life around what we are often taught: pursue studies, build a career, buy a home, start a family, and maintain a strong relationship. Today, I have shared my life with my partner for more than 20 years. We have two children: a 6-year-old daughter and a 3-year-old son.',
    'about.p3': 'I completed two bachelor\'s degrees and a master\'s degree, which has allowed me to work for over 15 years in the helping profession. It is a profession I deeply love and consider a true calling.',
    'about.p4': 'Over the years, I became aware of a reality many professionals face: even when we love our work, invest fully, and spend years training, there can still be a gap between everything we give and the quality of life we aspire to. This reflection becomes even stronger when we think about the future, retirement, and the time we want to dedicate to those we love.',
    'about.p5': 'In 2024, I realized that part of who I am had quietly faded behind daily responsibilities. For nearly ten years, I had set aside a passion that has always lived in me: exploring the world and discovering other cultures.',
    'about.p6': 'In January 2025, I decided to start a project alongside my career.',
    'about.p7': 'At first, my goal was simple: to put travel back at the center of my life.',
    'about.p8': 'By traveling again, I reconnected with a part of myself that recharges and feels wonder in the beauty and diversity of landscapes, convinced that every trip transforms us a little more.',
    'about.p9': 'Today, what motivates me most is sharing this project and inspiring others to build a quality of life more centered on what truly matters to them.',
    'about.p10': 'Joining a private travel club and choosing to become an independent partner is much more than a way to travel more.',
    'about.p11': 'It is a way to create more freedom.<br>More quality time with loved ones.<br>More possibilities for your future.',
    'about.p12': 'If my journey resonates with you, I would be happy to get to know you.<br><br>Amelie K.',
    'about.point1': 'Access to travel-industry rates',
    'about.point2': 'Save up to 80% on hotels, flights, and cruises',
    'about.point3': 'Ability to create income by sharing access',
    'about.cta': 'Learn more →',
    'testimony.eyebrow': 'Testimonial',
    'testimony.title': 'A quick video preview',
    'testimony.thanks': 'Thanks to Marilou, Guitry, Severine, Danny, Annie, Romuald, and Catherine for their testimonials.',
    'videos.eyebrow': 'Watch before deciding',
    'videos.title': 'Understand everything in under 15 minutes',
    'videos.v1.label': 'Company overview',
    'videos.v1.desc': 'A complete overview of the Travorium platform and what it offers.',
    'videos.v2.label': '5 common questions',
    'videos.v2.desc': 'Answers to the questions most frequently asked about the partnership.',
    'form.eyebrow': 'Ready to take action?',
    'form.title': 'Tell me what you would like to do',
    'form.subtitle': 'I personally reply within 24 hours.',
    'success.title': 'Message sent!',
    'success.text': 'Thank you! I will get back to you very soon.',
    'form.legend.interests': 'I would like to: <span class="texte-optionnel">(you can choose more than one)</span>',
    'form.interest.zoom': 'Join the Zoom presentation — Sunday at 2:00 PM, Quebec time',
    'form.interest.partner': 'Learn how to become a partner and create additional income',
    'form.interest.member': 'Become a member to access preferred rates — save up to 80%',
    'form.legend.contact': 'I prefer to be contacted by: <span class="texte-obligatoire">*</span>',
    'form.pref.email': 'Email',
    'form.pref.sms': 'Text message',
    'form.pref.call': 'Phone call',
    'form.error.contact': 'Please choose a contact method.',
    'form.field.firstName': 'First name',
    'form.field.email': 'Email',
    'form.field.phone': 'Phone <span class="texte-optionnel">(optional)</span>',
    'form.placeholder.firstName': 'Your first name',
    'form.placeholder.email': 'you@email.com',
    'form.placeholder.phone': '(514) 000-0000',
    'form.error.email': 'Invalid email address.',
    'form.submit': 'Send my message',
    'footer.greeting': 'Looking forward to speaking with you,',
    'footer.facebook.subtitle': 'View my Facebook profile',
    'footer.messenger.subtitle': 'Write to me directly',
    'footer.join.subtitle': 'Join Travorium',
    'footer.note': 'To display the Travorium site in French, click the 🇫🇷 flag at the top of the page.',
    'status.mailReadyTitle': 'Email ready to send',
    'status.mailReadyText': 'Your email app opens with a prefilled message.',
    'status.sentTitle': 'Message sent!',
    'status.sentText': 'Thank you! I will get back to you very soon.',
    'status.fallbackText': 'EmailJS is currently unavailable. A prefilled email has just opened.',
    'emailjs.configError': 'Incomplete EmailJS configuration: ',
    'emailjs.tryLater': 'Unable to send right now. Please try again in a few minutes.',
    'emailjs.subject': 'New lead - Travorium',
    'email.label.newLead': 'New lead',
    'email.label.firstName': 'First name: ',
    'email.label.email': 'Email:',
    'email.label.phone': 'Phone:',
    'email.label.interest': 'Interest:',
    'email.label.preference': 'Preference:',
    'email.value.notProvided': 'Not provided',
    'email.value.none': 'None',
    'email.interest.zoom': 'Zoom',
    'email.interest.partner': 'Partner',
    'email.interest.member': 'Member',
    'email.preference.email': 'Email',
    'email.preference.sms': 'Text message',
    'email.preference.call': 'Phone call'
  }
};

function t(cle) {
  const dictionnaire = traductions[langueActive] || traductions.fr;
  return dictionnaire[cle] || traductions.fr[cle] || cle;
}

function appliquerLangue(langue) {
  langueActive = (langue === 'en') ? 'en' : 'fr';
  document.documentElement.lang = langueActive;

  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    const cle = element.getAttribute('data-i18n');
    element.textContent = t(cle);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
    const cle = element.getAttribute('data-i18n-html');
    element.innerHTML = t(cle);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
    const cle = element.getAttribute('data-i18n-placeholder');
    element.setAttribute('placeholder', t(cle));
  });

  boutonsLangue.forEach(function (bouton) {
    bouton.classList.toggle('actif', bouton.dataset.lang === langueActive);
  });

  localStorage.setItem('langueSite', langueActive);
}

function initialiserLangue() {
  const langueSauvegardee = localStorage.getItem('langueSite');
  const langueNavigateur = navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr';
  const langueParDefaut = langueSauvegardee || langueNavigateur;

  appliquerLangue(langueParDefaut);

  boutonsLangue.forEach(function (bouton) {
    bouton.addEventListener('click', function () {
      appliquerLangue(bouton.dataset.lang);
    });
  });
}

initialiserLangue();

// On écoute le scroll de la page
window.addEventListener('scroll', function () {

  // Si on a scrollé plus de 60px vers le bas...
  if (window.scrollY > 60) {
    // ...on ajoute la classe "scrollee" qui rend la nav opaque (voir CSS)
    barreNavigation.classList.add('scrollee');
  } else {
    // ...sinon on la retire pour qu'elle redevienne transparente
    barreNavigation.classList.remove('scrollee');
  }

});


/* ----------------------------------------------------------------
   2. ANIMATIONS AU SCROLL — les éléments apparaissent en glissant
   
   On utilise l'API IntersectionObserver : elle surveille quels
   éléments sont visibles dans l'écran et déclenche une fonction
   quand un élément entre dans la vue.
---------------------------------------------------------------- */

// On sélectionne tous les éléments à animer
const elementsAAnimer = document.querySelectorAll('.animer-apparition');

// On crée l'observateur
const observateurScroll = new IntersectionObserver(

  function (entries) {
    // Pour chaque élément observé...
    entries.forEach(function (entry) {

      // ...si l'élément est maintenant visible à l'écran
      if (entry.isIntersecting) {
        // On ajoute la classe "visible" qui déclenche l'animation CSS
        entry.target.classList.add('visible');

        // On arrête d'observer cet élément (l'animation ne joue qu'une fois)
        observateurScroll.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,  // l'élément doit être visible à 12% avant de déclencher
    rootMargin: '0px 0px -40px 0px' // décale légèrement le point de déclenchement
  }
);

// On lance la surveillance sur chaque élément
elementsAAnimer.forEach(function (element) {
  observateurScroll.observe(element);
});


/* ----------------------------------------------------------------
   3. BOUTON RETOUR EN HAUT — apparaît après 400px de scroll
---------------------------------------------------------------- */

const boutonRetourHaut = document.getElementById('bouton-retour-haut');

window.addEventListener('scroll', function () {

  if (window.scrollY > 400) {
    boutonRetourHaut.classList.add('visible');
  } else {
    boutonRetourHaut.classList.remove('visible');
  }

});

// Quand on clique dessus, on remonte en haut de la page
boutonRetourHaut.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ----------------------------------------------------------------
   4. FORMULAIRE — validation et envoi
   
   On valide les champs avant d'envoyer pour éviter les erreurs.
   On simule un délai d'envoi pour montrer le spinner au bouton.
---------------------------------------------------------------- */

const formulaire       = document.getElementById('formulaire-contact');
const boutonEnvoyer    = document.getElementById('bouton-envoyer');
const messageSucces    = document.getElementById('message-succes');
const blocSuccesTitre  = messageSucces.querySelector('strong');
const blocSuccesTexte  = messageSucces.querySelector('p');
const COURRIEL_DESTINATAIRE = 'ameliek.travorium@gmail.com';

// Configuration EmailJS (a completer avec vos identifiants)
const CONFIG_EMAILJS = {
  publicKey: 'VOTRE_PUBLIC_KEY_EMAILJS',
  serviceId: 'VOTRE_SERVICE_ID_EMAILJS',
  templateId: 'VOTRE_TEMPLATE_ID_EMAILJS'
};

// Éléments du formulaire
const champCourriel    = document.getElementById('courriel');
const erreurCourriel   = document.getElementById('erreur-courriel');
const erreurContact    = document.getElementById('erreur-contact');

function configurationEmailJsValide() {
  return Object.values(CONFIG_EMAILJS).every(function (valeur) {
    return valeur && !valeur.startsWith('VOTRE_');
  });
}

function obtenirChampsEmailJsManquants() {
  const champs = [];

  if (!CONFIG_EMAILJS.publicKey || CONFIG_EMAILJS.publicKey.startsWith('VOTRE_')) {
    champs.push('publicKey');
  }

  if (!CONFIG_EMAILJS.serviceId || CONFIG_EMAILJS.serviceId.startsWith('VOTRE_')) {
    champs.push('serviceId');
  }

  if (!CONFIG_EMAILJS.templateId || CONFIG_EMAILJS.templateId.startsWith('VOTRE_')) {
    champs.push('templateId');
  }

  return champs;
}

function construireMessageErreurEmailJs(erreurEnvoi) {
  const champsManquants = obtenirChampsEmailJsManquants();

  if (champsManquants.length > 0) {
    return t('emailjs.configError') + champsManquants.join(', ') + '.';
  }

  if (erreurEnvoi && erreurEnvoi.text) {
    return 'EmailJS : ' + erreurEnvoi.text;
  }

  if (erreurEnvoi && erreurEnvoi.message) {
    return 'EmailJS : ' + erreurEnvoi.message;
  }

  return t('emailjs.tryLater');
}

function initialiserEmailJs() {
  if (!window.emailjs || !configurationEmailJsValide()) return;
  window.emailjs.init({ publicKey: CONFIG_EMAILJS.publicKey });
}

function libelleInteret(valeur) {
  const dictionnaire = {
    zoom: t('email.interest.zoom'),
    partenaire: t('email.interest.partner'),
    membre: t('email.interest.member')
  };
  return dictionnaire[valeur] || valeur;
}

function libelleModeContact(valeur) {
  const dictionnaire = {
    courriel: t('email.preference.email'),
    texte: t('email.preference.sms'),
    appel: t('email.preference.call')
  };
  return dictionnaire[valeur] || valeur;
}

function obtenirInteretsSelectionnes() {
  const interetsSelectionnes = Array.from(
    formulaire.querySelectorAll('input[name="interet"]:checked')
  );

  return interetsSelectionnes.map(function (champ) {
    return libelleInteret(champ.value);
  });
}

function construireMessageProspect(donnees) {
  return [
    t('email.label.newLead'),
    '',
    t('email.label.firstName') + donnees.prenom,
    '',
    t('email.label.email'),
    donnees.courriel,
    '',
    t('email.label.phone'),
    donnees.telephone,
    '',
    t('email.label.interest'),
    donnees.interets,
    '',
    t('email.label.preference'),
    donnees.preference
  ].join('\n');
}

function ouvrirCourrielSecours(message) {
  const sujet = t('emailjs.subject');
  const lienMailto = 'mailto:' + COURRIEL_DESTINATAIRE
    + '?subject=' + encodeURIComponent(sujet)
    + '&body=' + encodeURIComponent(message);

  window.location.href = lienMailto;
}

function afficherSucces(titre, texte) {
  blocSuccesTitre.textContent = titre;
  blocSuccesTexte.textContent = texte;
  messageSucces.classList.add('visible');
  messageSucces.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  setTimeout(function () {
    messageSucces.classList.remove('visible');
  }, 6000);
}

initialiserEmailJs();

// Fonction : vérifie si une adresse courriel est valide
function estCourrielValide(adresse) {
  // Expression régulière qui vérifie le format "quelquechose@domaine.extension"
  const formatCourriel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formatCourriel.test(adresse);
}

// Fonction : enlève les messages d'erreur quand l'utilisateur recommence à taper
champCourriel.addEventListener('input', function () {
  champCourriel.classList.remove('invalide');
  erreurCourriel.classList.remove('visible');
});

// Quand on soumet le formulaire...
formulaire.addEventListener('submit', async function (evenement) {

  // On empêche l'envoi natif du navigateur (on gère nous-mêmes)
  evenement.preventDefault();

  // --- Réinitialiser les erreurs ---
  champCourriel.classList.remove('invalide');
  erreurCourriel.classList.remove('visible');
  erreurContact.classList.remove('visible');

  // --- Validation ---
  let formulaireValide = true;

  // Vérifier qu'un mode de contact est sélectionné (radio obligatoire)
  const modeContactSelectionne = formulaire.querySelector('input[name="mode-contact"]:checked');
  if (!modeContactSelectionne) {
    erreurContact.classList.add('visible');
    formulaireValide = false;
  }

  // Vérifier le courriel seulement s'il a été rempli
  const valeurCourriel = champCourriel.value.trim();
  if (valeurCourriel && !estCourrielValide(valeurCourriel)) {
    champCourriel.classList.add('invalide');
    erreurCourriel.classList.add('visible');
    formulaireValide = false;
  }

  // Si le formulaire n'est pas valide, on arrête ici
  if (!formulaireValide) return;

  // --- Envoi EmailJS avec mode secours mailto ---

  // On active l'état "chargement" sur le bouton (voir CSS)
  boutonEnvoyer.classList.add('chargement');
  boutonEnvoyer.disabled = true;

  const prenom = document.getElementById('prenom').value.trim() || t('email.value.notProvided');
  const courriel = valeurCourriel || t('email.value.notProvided');
  const telephone = document.getElementById('telephone').value.trim() || t('email.value.notProvided');
  const interets = obtenirInteretsSelectionnes();
  const interetsFormates = interets.length
    ? interets.map(function (interet) { return '✓ ' + interet; }).join('\n')
    : t('email.value.none');
  const preference = libelleModeContact(modeContactSelectionne.value);

  const templateParams = {
    prospect_prenom: prenom,
    prospect_courriel: courriel,
    prospect_telephone: telephone,
    prospect_interets: interetsFormates,
    prospect_preference: preference,
    message: construireMessageProspect({
      prenom: prenom,
      courriel: courriel,
      telephone: telephone,
      interets: interetsFormates,
      preference: preference
    })
  };

  const messageProspect = templateParams.message;

  try {
    if (!window.emailjs || !configurationEmailJsValide()) {
      ouvrirCourrielSecours(messageProspect);

      boutonEnvoyer.classList.remove('chargement');
      boutonEnvoyer.disabled = false;

      formulaire.reset();

      afficherSucces(t('status.mailReadyTitle'), t('status.mailReadyText'));

      return;
    }

    await window.emailjs.send(
      CONFIG_EMAILJS.serviceId,
      CONFIG_EMAILJS.templateId,
      templateParams
    );

    // On désactive l'état chargement
    boutonEnvoyer.classList.remove('chargement');
    boutonEnvoyer.disabled = false;

    // On remet le formulaire à zéro
    formulaire.reset();

    // On affiche le message de succès
    afficherSucces(t('status.sentTitle'), t('status.sentText'));

  } catch (erreurEnvoi) {
    boutonEnvoyer.classList.remove('chargement');
    boutonEnvoyer.disabled = false;

    console.error('Erreur EmailJS :', erreurEnvoi);

    // En cas d'erreur EmailJS, on ouvre automatiquement un courriel de secours.
    ouvrirCourrielSecours(messageProspect);

    formulaire.reset();

    afficherSucces(t('status.mailReadyTitle'), t('status.fallbackText'));
  }

});


/* ----------------------------------------------------------------
   5. LIENS DE NAVIGATION — fermeture fluide au clic
   
   Quand on clique sur un lien de la nav (ex: #videos),
   on s'assure que le scroll prend en compte la hauteur de la nav.
   (Le CSS `scroll-padding-top` gère déjà ça, mais on ajoute
   une confirmation visuelle avec la classe active)
---------------------------------------------------------------- */

const liensNavigation = document.querySelectorAll('.lien-navigation');

liensNavigation.forEach(function (lien) {
  lien.addEventListener('click', function () {

    // On retire la classe "actif" de tous les liens
    liensNavigation.forEach(function (l) { l.classList.remove('actif'); });

    // On ajoute "actif" sur le lien cliqué
    this.classList.add('actif');
  });
});

