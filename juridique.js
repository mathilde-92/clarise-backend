/* ============================================================
   CLARISÉ — Repères juridiques (données)
   ------------------------------------------------------------
   CE FICHIER NE CONTIENT QUE DU TEXTE ET DES MOTS-CLÉS.
   C'est ici, et nulle part ailleurs, qu'on décide ce que Clarisse
   a le droit de dire sur le droit, l'argent et les démarches.

   POURQUOI CE FICHIER EXISTE
   1. Clarisse n'a aucun accès à internet. Si on lui demande ce que
      dit la loi, elle répond de mémoire — approximativement, parfois
      avec un numéro d'article inventé qui a l'air vrai. C'est arrivé :
      elle a affirmé que « la loi ne prévoit pas de pension pour un
      majeur » et proposé « environ 200 € par mois ». Les deux étaient
      faux. Ici, elle ne peut citer QUE ce qui est écrit dans ce
      fichier ; si un texte n'y est pas, elle dit qu'elle ne l'a pas.
   2. C'est la partie la plus risquée de l'application sur le plan
      juridique. La rassembler en un seul endroit permet de l'imprimer
      et de la faire relire par un·e avocat·e, sans lui demander de
      lire tout le serveur.

   DEUX GARDE-FOUS, PAS UN SEUL
   - Une consigne : ne jamais compléter avec autre chose que ces textes.
   - Une vérification mécanique dans server.js : si la réponse cite un
     article qui ne lui a pas été fourni, elle est refusée et refaite.
     Une consigne seule ne suffit pas, on l'a vérifié à nos dépens.

   POURQUOI LES TEXTES NE SONT PAS TOUS ENVOYÉS À CHAQUE FOIS
   Les 43 textes pèsent 35 000 caractères, soit presque trois fois le
   prompt entier du coach. Tout envoyer noierait les consignes et
   ramènerait le défaut qu'on vient de corriger. Le serveur choisit
   donc les textes pertinents grâce au champ motsCles, et n'en envoie
   que trois au maximum. C'est pour ça que les mots-clés comptent
   autant que les textes : un texte mal indexé ne sortira jamais.

   COMMENT COMPLÉTER UNE ENTRÉE
     domaine    grande famille, pour s'y retrouver
     source     l'article exact, tel qu'il sera cité
     titre      à quoi sert ce texte, en une ligne
     motsCles   SANS ACCENTS, séparés par des espaces : tous les mots
                qu'une utilisatrice risque d'employer. C'est ce champ
                qui décide si le texte sera trouvé ou non.
     verifieLe  date de la version en vigueur consultée
     texte      le texte INTÉGRAL de Légifrance, ni résumé ni reformulé.
                Une entrée dont le texte est vide est ignorée.

   À RELIRE régulièrement : les textes de loi changent, et une
   référence périmée est plus dangereuse qu'une absence de référence.
   ============================================================ */

const TEXTES_LOI = [

  /* ==========================================================
     BLOC 1 — AUTORITÉ PARENTALE ET DÉCISIONS COMMUNES
     ========================================================== */

  {
    domaine: "Autorité parentale",
    source: "Article 371-1 du code civil",
    titre: "Ce qu'est l'autorité parentale, et l'interdiction des violences",
    motsCles: "autorite parentale definition droits devoirs interet enfant securite sante vie privee moralite education violences physiques psychologiques associer decisions maturite",
    verifieLe: "En vigueur depuis le 21 février 2024",
    texte: "L'autorité parentale est un ensemble de droits et de devoirs ayant pour finalité l'intérêt de l'enfant.\n\nElle appartient aux parents jusqu'à la majorité ou l'émancipation de l'enfant pour le protéger dans sa sécurité, sa santé, sa vie privée et sa moralité, pour assurer son éducation et permettre son développement, dans le respect dû à sa personne.\n\nL'autorité parentale s'exerce sans violences physiques ou psychologiques.\n\nLes parents associent l'enfant aux décisions qui le concernent, selon son âge et son degré de maturité.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 372 du code civil",
    titre: "Les deux parents exercent l'autorité parentale en commun",
    motsCles: "exercice commun conjoint deux parents pere mere filiation declaration conjointe juge affaires familiales",
    verifieLe: "En vigueur depuis le 4 août 2021",
    texte: "Les père et mère exercent en commun l'autorité parentale. L'autorité parentale est exercée conjointement dans le cas prévu à l'article 342-11.\n\nToutefois, lorsque la filiation est établie à l'égard de l'un d'entre eux plus d'un an après la naissance d'un enfant dont la filiation est déjà établie à l'égard de l'autre, celui-ci reste seul investi de l'exercice de l'autorité parentale. Il en est de même lorsque la filiation est judiciairement déclarée à l'égard du second parent de l'enfant ou, dans le cas d'un établissement de la filiation dans les conditions prévues au chapitre V du titre VII du présent livre, lorsque la mention de la reconnaissance conjointe est apposée à la demande du procureur de la République.\n\nL'autorité parentale pourra néanmoins être exercée en commun en cas de déclaration conjointe des père et mère adressée au directeur des services de greffe judiciaires du tribunal judiciaire ou sur décision du juge aux affaires familiales.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 372-2 du code civil",
    titre: "Actes usuels : l'accord de l'autre parent est présumé",
    motsCles: "acte usuel courant quotidien accord presume tiers bonne foi seul decision ecole medecin coiffeur inscription",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "A l'égard des tiers de bonne foi, chacun des parents est réputé agir avec l'accord de l'autre, quand il fait seul un acte usuel de l'autorité parentale relativement à la personne de l'enfant.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 372-1 du code civil",
    titre: "Droit à l'image de l'enfant : les deux parents le protègent ensemble",
    motsCles: "image photo publication reseaux sociaux vie privee mineur ensemble accord diffuser",
    verifieLe: "En vigueur depuis le 21 février 2024",
    texte: "Les parents protègent en commun le droit à l'image de leur enfant mineur, dans le respect du droit à la vie privée mentionné à l'article 9.\n\nLes parents associent l'enfant à l'exercice de son droit à l'image, selon son âge et son degré de maturité.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 373-2 du code civil",
    titre: "Séparation, respect du lien avec l'autre parent, obligation d'informer en cas de déménagement",
    motsCles: "separation demenagement changement residence informer prealable temps utile desaccord frais deplacement force publique relations personnelles respecter liens demenager demenage demenagent kilometres prevenir",
    verifieLe: "En vigueur depuis le 20 mars 2024 (LOI n°2024-233 du 18 mars 2024)",
    texte: "La séparation des parents est sans incidence sur les règles de dévolution de l'exercice de l'autorité parentale.\n\nChacun des père et mère doit maintenir des relations personnelles avec l'enfant et respecter les liens de celui-ci avec l'autre parent.\n\nA cette fin, à titre exceptionnel, à la demande de la personne directement intéressée ou du juge aux affaires familiales, le procureur de la République peut requérir le concours de la force publique pour faire exécuter une décision du juge aux affaires familiales, une convention de divorce par consentement mutuel prenant la forme d'un acte sous signature privée contresigné par avocats déposé au rang des minutes d'un notaire ou une convention homologuée fixant les modalités d'exercice de l'autorité parentale.\n\nTout changement de résidence de l'un des parents, dès lors qu'il modifie les modalités d'exercice de l'autorité parentale, doit faire l'objet d'une information préalable et en temps utile de l'autre parent. En cas de désaccord, le parent le plus diligent saisit le juge aux affaires familiales qui statue selon ce qu'exige l'intérêt de l'enfant. Le juge répartit les frais de déplacement et ajuste en conséquence le montant de la contribution à l'entretien et à l'éducation de l'enfant. Le présent alinéa ne s'applique pas au parent bénéficiaire d'une autorisation de dissimuler son domicile ou sa résidence prévue au 6° bis de l'article 515-11 si l'ordonnance de protection a été requise à l'encontre de l'autre parent.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 373-2-1 du code civil",
    titre: "Autorité confiée à un seul parent : droit de visite, motifs graves, droit d'information de l'autre",
    motsCles: "exercice unilateral seul parent droit visite hebergement refuse motifs graves espace rencontre danger remise enfant surveiller entretien education informe choix importants",
    verifieLe: "En vigueur depuis le 11 juillet 2010",
    texte: "Si l'intérêt de l'enfant le commande, le juge peut confier l'exercice de l'autorité parentale à l'un des deux parents.\n\nL'exercice du droit de visite et d'hébergement ne peut être refusé à l'autre parent que pour des motifs graves.\n\nLorsque, conformément à l'intérêt de l'enfant, la continuité et l'effectivité des liens de l'enfant avec le parent qui n'a pas l'exercice de l'autorité parentale l'exigent, le juge aux affaires familiales peut organiser le droit de visite dans un espace de rencontre désigné à cet effet.\n\nLorsque l'intérêt de l'enfant le commande ou lorsque la remise directe de l'enfant à l'autre parent présente un danger pour l'un d'eux, le juge en organise les modalités pour qu'elle présente toutes les garanties nécessaires. Il peut prévoir qu'elle s'effectue dans un espace de rencontre qu'il désigne, ou avec l'assistance d'un tiers de confiance ou du représentant d'une personne morale qualifiée.\n\nLe parent qui n'a pas l'exercice de l'autorité parentale conserve le droit et le devoir de surveiller l'entretien et l'éducation de l'enfant. Il doit être informé des choix importants relatifs à la vie de ce dernier. Il doit respecter l'obligation qui lui incombe en vertu de l'article 371-2.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 373-2-9 du code civil",
    titre: "Résidence alternée ou résidence chez un seul parent",
    motsCles: "residence alternee garde alternee domicile chacun parents desaccord provisoire droit visite espace rencontre danger remise",
    verifieLe: "En vigueur depuis le 16 mars 2016",
    texte: "En application des deux articles précédents, la résidence de l'enfant peut être fixée en alternance au domicile de chacun des parents ou au domicile de l'un d'eux.\n\nA la demande de l'un des parents ou en cas de désaccord entre eux sur le mode de résidence de l'enfant, le juge peut ordonner à titre provisoire une résidence en alternance dont il détermine la durée. Au terme de celle-ci, le juge statue définitivement sur la résidence de l'enfant en alternance au domicile de chacun des parents ou au domicile de l'un d'eux.\n\nLorsque la résidence de l'enfant est fixée au domicile de l'un des parents, le juge aux affaires familiales statue sur les modalités du droit de visite de l'autre parent. Ce droit de visite, lorsque l'intérêt de l'enfant le commande, peut, par décision spécialement motivée, être exercé dans un espace de rencontre désigné par le juge.\n\nLorsque l'intérêt de l'enfant le commande ou lorsque la remise directe de l'enfant à l'autre parent présente un danger pour l'un d'eux, le juge en organise les modalités pour qu'elle présente toutes les garanties nécessaires. Il peut prévoir qu'elle s'effectue dans un espace de rencontre qu'il désigne, ou avec l'assistance d'un tiers de confiance ou du représentant d'une personne morale qualifiée.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 373-2-11 du code civil",
    titre: "Ce que le juge prend en compte pour décider des modalités",
    motsCles: "juge criteres decision pratique anterieure accords sentiments enfant aptitude respecter droits autre expertise enquete sociale pressions violences",
    verifieLe: "En vigueur depuis le 11 juillet 2010",
    texte: "Lorsqu'il se prononce sur les modalités d'exercice de l'autorité parentale, le juge prend notamment en considération :\n\n1° La pratique que les parents avaient précédemment suivie ou les accords qu'ils avaient pu antérieurement conclure ;\n\n2° Les sentiments exprimés par l'enfant mineur dans les conditions prévues à l'article 388-1 ;\n\n3° L'aptitude de chacun des parents à assumer ses devoirs et respecter les droits de l'autre ;\n\n4° Le résultat des expertises éventuellement effectuées, tenant compte notamment de l'âge de l'enfant ;\n\n5° Les renseignements qui ont été recueillis dans les éventuelles enquêtes et contre-enquêtes sociales prévues à l'article 373-2-12 ;\n\n6° Les pressions ou violences, à caractère physique ou psychologique, exercées par l'un des parents sur la personne de l'autre.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 371-6 du code civil",
    titre: "Sortie du territoire de l'enfant sans un parent",
    motsCles: "sortie territoire etranger voyage vacances autorisation signee titulaire autorite parentale frontiere",
    verifieLe: "En vigueur depuis le 5 juin 2016",
    texte: "L'enfant quittant le territoire national sans être accompagné d'un titulaire de l'autorité parentale est muni d'une autorisation de sortie du territoire signée d'un titulaire de l'autorité parentale.\n\nUn décret en Conseil d'Etat détermine les conditions d'application du présent article.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 371-4 du code civil",
    titre: "Relations de l'enfant avec ses grands-parents et avec des tiers",
    motsCles: "grands-parents ascendants tiers beau-parent belle-mere relations personnelles interet enfant liens affectifs",
    verifieLe: "En vigueur depuis le 19 mai 2013",
    texte: "L'enfant a le droit d'entretenir des relations personnelles avec ses ascendants. Seul l'intérêt de l'enfant peut faire obstacle à l'exercice de ce droit.\n\nSi tel est l'intérêt de l'enfant, le juge aux affaires familiales fixe les modalités des relations entre l'enfant et un tiers, parent ou non, en particulier lorsque ce tiers a résidé de manière stable avec lui et l'un de ses parents, a pourvu à son éducation, à son entretien ou à son installation, et a noué avec lui des liens affectifs durables.",
  },

  {
    domaine: "Autorité parentale",
    source: "Article 371-5 du code civil",
    titre: "L'enfant ne doit pas être séparé de ses frères et sœurs",
    motsCles: "freres soeurs fratrie separer separation relations personnelles",
    verifieLe: "En vigueur depuis le 1er janvier 1997",
    texte: "L'enfant ne doit pas être séparé de ses frères et soeurs, sauf si cela n'est pas possible ou si son intérêt commande une autre solution. S'il y a lieu, le juge statue sur les relations personnelles entre les frères et soeurs.",
  },

  /* ==========================================================
     BLOC 2 — PENSION ALIMENTAIRE ET FRAIS
     ========================================================== */

  {
    domaine: "Pension et frais",
    source: "Article 371-2 du code civil",
    titre: "Obligation d'entretien, proportionnelle aux ressources de chacun",
    motsCles: "pension alimentaire contribution entretien education proportion ressources besoins enfant majeur obligation obligatoire oblige loi article payer verser participer partager depenses pere mere chacun financierement subvenir",
    verifieLe: "En vigueur depuis le 30 décembre 2019",
    texte: "Chacun des parents contribue à l'entretien et à l'éducation des enfants à proportion de ses ressources, de celles de l'autre parent, ainsi que des besoins de l'enfant.\n\nCette obligation ne cesse de plein droit ni lorsque l'autorité parentale ou son exercice est retiré, ni lorsque l'enfant est majeur.",
  },

  {
    domaine: "Pension et frais",
    source: "Article 373-2-2 du code civil (I)",
    titre: "La pension alimentaire : sa forme, ce qui la fixe, la prise en charge directe de frais",
    motsCles: "pension alimentaire contribution separation versee decision judiciaire convention homologuee notaire virement prise en charge directe frais exposes colonie activite vacances moitie",
    verifieLe: "En vigueur depuis le 1er mars 2022 — extrait du I. L'article complet traite aussi de l'intermédiation financière par la CAF (II à IV)",
    texte: "I.- En cas de séparation entre les parents, ou entre ceux-ci et l'enfant, la contribution à son entretien et à son éducation prend la forme d'une pension alimentaire versée, selon le cas, par l'un des parents à l'autre, ou à la personne à laquelle l'enfant a été confié.\n\nLes modalités et les garanties de cette pension alimentaire sont fixées par :\n1° Une décision judiciaire ;\n2° Une convention homologuée par le juge ;\n3° Une convention de divorce ou de séparation de corps par consentement mutuel selon les modalités prévues à l'article 229-1 ;\n4° Un acte reçu en la forme authentique par un notaire ;\n5° Une convention à laquelle l'organisme débiteur des prestations familiales a donné force exécutoire en application de l'article L. 582-2 du code de la sécurité sociale ;\n6° Une transaction ou un acte constatant un accord issu d'une médiation, d'une conciliation ou d'une procédure participative, lorsqu'ils sont contresignés par les avocats de chacune des parties et revêtus de la formule exécutoire par le greffe de la juridiction compétente en application du 7° de l'article L. 111-3 du code des procédures civiles d'exécution.\n\nIl peut être notamment prévu le versement de la pension alimentaire par virement bancaire ou par tout autre moyen de paiement.\n\nCette pension peut en tout ou partie prendre la forme d'une prise en charge directe de frais exposés au profit de l'enfant ou être, en tout ou partie, servie sous forme d'un droit d'usage et d'habitation.",
  },

  {
    domaine: "Pension et frais",
    source: "Article 373-2-4 du code civil",
    titre: "Demander un complément plus tard",
    motsCles: "complement pension revision augmenter demander ulterieurement",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "L'attribution d'un complément, notamment sous forme de pension alimentaire, peut, s'il y a lieu, être demandée ultérieurement.",
  },

  {
    domaine: "Pension et frais",
    source: "Article 373-2-5 du code civil",
    titre: "Contribution pour un enfant majeur qui ne subvient pas à ses besoins",
    motsCles: "enfant majeur etudes autonomie 18 ans contribution versee entre les mains de l enfant",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "Le parent qui assume à titre principal la charge d'un enfant majeur qui ne peut lui-même subvenir à ses besoins peut demander à l'autre parent de lui verser une contribution à son entretien et à son éducation. Le juge peut décider ou les parents convenir que cette contribution sera versée en tout ou partie entre les mains de l'enfant.",
  },

  /* ==========================================================
     BLOC 3 — MANQUEMENTS, EXÉCUTION, ACCORDS
     ========================================================== */

  {
    domaine: "Manquements",
    source: "Article 373-2-6 du code civil",
    titre: "Pouvoirs du juge : astreinte, amende civile, interdiction de sortie du territoire, diffusion de l'image",
    motsCles: "obstacle execution decision astreinte amende civile 10000 euros interdiction sortie territoire fichier personnes recherchees image diffusion refus respecter jugement ne respecte pas",
    verifieLe: "En vigueur depuis le 21 février 2024",
    texte: "Le juge du tribunal judiciaire délégué aux affaires familiales règle les questions qui lui sont soumises dans le cadre du présent chapitre en veillant spécialement à la sauvegarde des intérêts des enfants mineurs.\n\nLe juge peut prendre les mesures permettant de garantir la continuité et l'effectivité du maintien des liens de l'enfant avec chacun de ses parents.\n\nIl peut notamment ordonner l'interdiction de sortie de l'enfant du territoire français sans l'autorisation des deux parents. Cette interdiction de sortie du territoire sans l'autorisation des deux parents est inscrite au fichier des personnes recherchées par le procureur de la République.\n\nIl peut également, en cas de désaccord entre les parents sur l'exercice du droit à l'image de l'enfant, interdire à l'un des parents de diffuser tout contenu relatif à l'enfant sans l'autorisation de l'autre parent.\n\nIl peut, même d'office, ordonner une astreinte pour assurer l'exécution de sa décision. Si les circonstances en font apparaître la nécessité, il peut assortir d'une astreinte la décision rendue par un autre juge ainsi que l'accord parental constaté dans l'un des titres mentionnés aux 1° et 2° du I de l'article 373-2-2. Les dispositions des articles L. 131-2 à L. 131-4 du code des procédures civiles d'exécution sont applicables.\n\nIl peut également, lorsqu'un parent fait délibérément obstacle de façon grave ou renouvelée à l'exécution de l'un des titres mentionnés aux 1° à 6° du I de l'article 373-2-2, le condamner au paiement d'une amende civile d'un montant qui ne peut excéder 10 000 €.",
  },

  {
    domaine: "Manquements",
    source: "Article 373-2-8 du code civil",
    titre: "Saisir le juge pour faire statuer sur l'autorité parentale ou la pension",
    motsCles: "saisir juge demander statuer modalites contribution parent ministere public tiers procedure",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "Le juge peut également être saisi par l'un des parents ou le ministère public, qui peut lui-même être saisi par un tiers, parent ou non, à l'effet de statuer sur les modalités d'exercice de l'autorité parentale et sur la contribution à l'entretien et à l'éducation de l'enfant.",
  },

  {
    domaine: "Manquements",
    source: "Article 373-2-7 du code civil",
    titre: "Faire homologuer un accord entre parents",
    motsCles: "convention accord amiable homologuer homologation juge consentement libre interet enfant",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "Les parents peuvent saisir le juge aux affaires familiales afin de faire homologuer la convention par laquelle ils organisent les modalités d'exercice de l'autorité parentale et fixent la contribution à l'entretien et à l'éducation de l'enfant.\n\nLe juge homologue la convention sauf s'il constate qu'elle ne préserve pas suffisamment l'intérêt de l'enfant ou que le consentement des parents n'a pas été donné librement.",
  },

  /* ==========================================================
     BLOC 4 — VIOLENCES, PROTECTION, MODIFICATION
     ========================================================== */

  {
    domaine: "Violences",
    source: "Article 373-2-10 du code civil",
    titre: "Médiation familiale — écartée en cas de violences ou d'emprise",
    motsCles: "mediation familiale conciliation desaccord violences alleguees emprise manifeste refus mediateur obligation",
    verifieLe: "En vigueur depuis le 1er août 2020",
    texte: "En cas de désaccord, le juge s'efforce de concilier les parties.\n\nA l'effet de faciliter la recherche par les parents d'un exercice consensuel de l'autorité parentale, le juge peut leur proposer une mesure de médiation, sauf si des violences sont alléguées par l'un des parents sur l'autre parent ou sur l'enfant, ou sauf emprise manifeste de l'un des parents sur l'autre parent, et, après avoir recueilli leur accord, désigner un médiateur familial pour y procéder, y compris dans la décision statuant définitivement sur les modalités d'exercice de l'autorité parentale.\n\nIl peut de même leur enjoindre, sauf si des violences sont alléguées par l'un des parents sur l'autre parent ou sur l'enfant, ou sauf emprise manifeste de l'un des parents sur l'autre parent, de rencontrer un médiateur familial qui les informera sur l'objet et le déroulement de cette mesure.",
  },

  {
    domaine: "Violences",
    source: "Article 378 du code civil",
    titre: "Retrait de l'autorité parentale après condamnation pénale",
    motsCles: "retrait autorite parentale condamnation crime delit sur enfant sur autre parent jugement penal",
    verifieLe: "En vigueur depuis le 20 mars 2024 (LOI n°2024-233 du 18 mars 2024)",
    texte: "En cas de condamnation d'un parent comme auteur, coauteur ou complice d'un crime ou d'une agression sexuelle incestueuse commis sur la personne de son enfant ou d'un crime commis sur la personne de l'autre parent, la juridiction pénale ordonne le retrait total de l'autorité parentale, sauf décision contraire spécialement motivée. Si elle ne décide pas le retrait total de l'autorité parentale, la juridiction ordonne le retrait partiel de l'autorité parentale ou le retrait de l'exercice de l'autorité parentale, sauf décision contraire spécialement motivée.\n\nEn cas de condamnation d'un parent comme auteur, coauteur ou complice d'un délit commis sur la personne de son enfant, autre qu'une agression sexuelle incestueuse, la juridiction pénale se prononce sur le retrait total ou partiel de l'autorité parentale ou sur le retrait de l'exercice de cette autorité.\n\nEn cas de condamnation d'un parent comme auteur, coauteur ou complice d'un délit commis sur la personne de l'autre parent ou comme coauteur ou complice d'un crime ou d'un délit commis par son enfant, la juridiction pénale peut ordonner le retrait total ou partiel de l'autorité parentale ou le retrait de l'exercice de cette autorité.\n\nLe retrait est applicable aux ascendants autres que les père et mère pour la part d'autorité parentale qui peut leur revenir sur leurs descendants.",
  },

  {
    domaine: "Violences",
    source: "Article 378-1 du code civil",
    titre: "Retrait de l'autorité parentale sans condamnation — enfant témoin de violences entre parents",
    motsCles: "retrait sans condamnation mauvais traitements alcool stupefiants inconduite enfant temoin pressions violences physiques psychologiques entre parents danger securite sante moralite temoin assiste",
    verifieLe: "En vigueur depuis le 1er janvier 2020",
    texte: "Peuvent se voir retirer totalement l'autorité parentale, en dehors de toute condamnation pénale, les père et mère qui, soit par de mauvais traitements, soit par une consommation habituelle et excessive de boissons alcooliques ou un usage de stupéfiants, soit par une inconduite notoire ou des comportements délictueux, notamment lorsque l'enfant est témoin de pressions ou de violences, à caractère physique ou psychologique, exercées par l'un des parents sur la personne de l'autre, soit par un défaut de soins ou un manque de direction, mettent manifestement en danger la sécurité, la santé ou la moralité de l'enfant.\n\nPeuvent pareillement se voir retirer totalement l'autorité parentale, quand une mesure d'assistance éducative avait été prise à l'égard de l'enfant, les père et mère qui, pendant plus de deux ans, se sont volontairement abstenus d'exercer les droits et de remplir les devoirs que leur laissait l'article 375-7.\n\nL'action en retrait total de l'autorité parentale est portée devant le tribunal judiciaire, soit par le ministère public, soit par un membre de la famille ou le tuteur de l'enfant, soit par le service départemental de l'aide sociale à l'enfance auquel l'enfant est confié.",
  },

  {
    domaine: "Violences",
    source: "Article 378-2 du code civil",
    titre: "Suspension automatique des droits en cas de crime sur l'autre parent",
    motsCles: "suspension plein droit poursuivi condamne crime sur autre parent six mois droit visite hebergement procureur",
    verifieLe: "En vigueur depuis le 20 mars 2024 (LOI n°2024-233 du 18 mars 2024)",
    texte: "L'exercice de l'autorité parentale et les droits de visite et d'hébergement du parent poursuivi par le ministère public ou mis en examen par le juge d'instruction soit pour un crime commis sur la personne de l'autre parent, soit pour une agression sexuelle incestueuse ou pour un crime commis sur la personne de son enfant sont suspendus de plein droit jusqu'à la décision du juge aux affaires familiales, le cas échéant saisi par le parent poursuivi, jusqu'à la décision de non-lieu du juge d'instruction ou jusqu'à la décision de la juridiction pénale.",
  },

  {
    domaine: "Violences",
    source: "Article 375 du code civil (premier alinéa)",
    titre: "Assistance éducative : quand un enfant est en danger",
    motsCles: "danger sante securite moralite mineur education developpement compromis assistance educative juge des enfants signalement requete",
    verifieLe: "En vigueur depuis le 9 février 2022 — premier alinéa",
    texte: "Si la santé, la sécurité ou la moralité d'un mineur non émancipé sont en danger, ou si les conditions de son éducation ou de son développement physique, affectif, intellectuel et social sont gravement compromises, des mesures d'assistance éducative peuvent être ordonnées par justice à la requête des père et mère conjointement, ou de l'un d'eux, de la personne ou du service à qui l'enfant a été confié ou du tuteur, du mineur lui-même ou du ministère public. Dans les cas où le ministère public a été avisé par le président du conseil départemental, il s'assure que la situation du mineur entre dans le champ d'application de l'article L. 226-4 du code de l'action sociale et des familles. Le juge peut se saisir d'office à titre exceptionnel.",
  },

  {
    domaine: "Modification",
    source: "Article 373-2-13 du code civil",
    titre: "Une décision sur l'autorité parentale peut être modifiée à tout moment",
    motsCles: "modifier modification jugement convention a tout moment nouvelle demande changement situation revision saisir juge changer garde",
    verifieLe: "En vigueur depuis le 1er janvier 2017",
    texte: "Les dispositions contenues dans la convention homologuée ou dans la convention de divorce par consentement mutuel prenant la forme d'un acte sous signature privée contresigné par avocats déposé au rang des minutes d'un notaire ainsi que les décisions relatives à l'exercice de l'autorité parentale peuvent être modifiées ou complétées à tout moment par le juge, à la demande des ou d'un parent ou du ministère public, qui peut lui-même être saisi par un tiers, parent ou non.",
  },

  {
    domaine: "Modification",
    source: "Article 373-2-12 du code civil",
    titre: "Enquête sociale avant décision",
    motsCles: "enquete sociale contre-enquete renseignements famille conditions de vie enfants expertise",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "Avant toute décision fixant les modalités de l'exercice de l'autorité parentale et du droit de visite ou confiant les enfants à un tiers, le juge peut donner mission à toute personne qualifiée d'effectuer une enquête sociale. Celle-ci a pour but de recueillir des renseignements sur la situation de la famille et les conditions dans lesquelles vivent et sont élevés les enfants.\n\nSi l'un des parents conteste les conclusions de l'enquête sociale, une contre-enquête peut à sa demande être ordonnée.\n\nL'enquête sociale ne peut être utilisée dans le débat sur la cause du divorce.",
  },

  {
    domaine: "Modification",
    source: "Article 373-2-9-1 du code civil",
    titre: "Attribution provisoire du logement de la famille",
    motsCles: "logement famille jouissance provisoire indemnite occupation six mois indivision maison appartement",
    verifieLe: "En vigueur depuis le 25 mars 2019",
    texte: "Lorsqu'il est saisi d'une requête relative aux modalités d'exercice de l'autorité parentale, le juge aux affaires familiales peut attribuer provisoirement la jouissance du logement de la famille à l'un des deux parents, le cas échéant en constatant l'accord des parties sur le montant d'une indemnité d'occupation.\n\nLe juge fixe la durée de cette jouissance pour une durée maximale de six mois. Lorsque le bien appartient aux parents en indivision, la mesure peut être prorogée, à la demande de l'un ou l'autre des parents, si durant ce délai le tribunal a été saisi des opérations de liquidation partage par la partie la plus diligente.",
  },

  /* ==========================================================
     À COMPLÉTER — ces textes ne figuraient pas dans l'extrait
     du code civil que tu m'as fourni. Ils viennent d'autres
     codes (pénal, ou autre partie du code civil).
     Tant que « texte » est vide, l'entrée est ignorée.
     ========================================================== */

  {
    domaine: "Autorité parentale",
    source: "Article 388-1 du code civil",
    titre: "Audition de l'enfant par le juge",
    motsCles: "audition enfant entendu ecoute juge discernement avocat demande avis parole temoigner",
    verifieLe: "En vigueur depuis le 1er janvier 2009",
    texte: "Dans toute procédure le concernant, le mineur capable de discernement peut, sans préjudice des dispositions prévoyant son intervention ou son consentement, être entendu par le juge ou, lorsque son intérêt le commande, par la personne désignée par le juge à cet effet.\n\nCette audition est de droit lorsque le mineur en fait la demande. Lorsque le mineur refuse d'être entendu, le juge apprécie le bien-fondé de ce refus. Il peut être entendu seul, avec un avocat ou une personne de son choix. Si ce choix n'apparaît pas conforme à l'intérêt du mineur, le juge peut procéder à la désignation d'une autre personne.\n\nL'audition du mineur ne lui confère pas la qualité de partie à la procédure.\n\nLe juge s'assure que le mineur a été informé de son droit à être entendu et à être assisté par un avocat.",
  },
  {
    domaine: "Manquements",
    source: "Article 227-5 du code pénal",
    titre: "Non-représentation d'enfant : ne pas remettre l'enfant à qui a le droit de le réclamer",
    motsCles: "non representation refus remettre rendre enfant retard droit visite delit plainte ne ramene pas garde amende emprisonnement ramener ramene recupere recuperer",
    verifieLe: "En vigueur depuis le 1er janvier 2002",
    texte: "Le fait de refuser indûment de représenter un enfant mineur à la personne qui a le droit de le réclamer est puni d'un an d'emprisonnement et de 15 000 euros d'amende.",
  },
  {
    domaine: "Pension et frais",
    source: "Article 227-3 du code pénal",
    titre: "Abandon de famille : ne pas payer la pension pendant plus de deux mois",
    motsCles: "abandon famille non paiement pension deux mois delit plainte impaye ne paie pas ne verse pas retard arriere contribution subsides emprisonnement amende impaye impayee",
    verifieLe: "En vigueur depuis le 1er mars 2022",
    texte: "Le fait, pour une personne, de ne pas exécuter une décision judiciaire ou l'un des titres mentionnés aux 2° à 6° du I de l'article 373-2-2 du code civil lui imposant de verser au profit d'un enfant mineur, d'un descendant, d'un ascendant ou du conjoint une pension, une contribution, des subsides ou des prestations de toute nature dues en raison de l'une des obligations familiales prévues par le code civil, en demeurant plus de deux mois sans s'acquitter intégralement de cette obligation, est puni de deux ans d'emprisonnement et de 15 000 euros d'amende.\n\nLorsque l'intermédiation financière des pensions alimentaires est mise en œuvre dans les conditions prévues aux II à IV de l'article 373-2-2 du code civil et à l'article L. 582-1 du code de la sécurité sociale, le fait pour le parent débiteur de demeurer plus de deux mois sans s'acquitter intégralement des sommes dues entre les mains de l'organisme débiteur des prestations familiales assurant l'intermédiation est puni des mêmes peines.",
  },
  {
    domaine: "Manquements",
    source: "Article 227-6 du code pénal",
    titre: "Ne pas signaler son changement de domicile à l'autre parent",
    motsCles: "changement domicile demenagement signaler notifier delai un mois delit adresse cache nouvelle adresse",
    verifieLe: "En vigueur depuis le 1er janvier 2017",
    texte: "Le fait, pour une personne qui transfère son domicile en un autre lieu, alors que ses enfants résident habituellement chez elle, de ne pas notifier son changement de domicile, dans un délai d'un mois à compter de ce changement, à ceux qui peuvent exercer à l'égard des enfants un droit de visite ou d'hébergement en vertu d'un jugement, d'une convention judiciairement homologuée ou d'une convention prévue à l'article 229-1 du code civil, est puni de six mois d'emprisonnement et de 7 500 euros d'amende.",
  },
  {
    domaine: "Manquements",
    source: "Article 227-7 du code pénal",
    titre: "Soustraction d'enfant par un parent ou un ascendant",
    motsCles: "soustraction enlevement parent ascendant garder enfant sans droit ne rend pas emmene",
    verifieLe: "En vigueur depuis le 1er juillet 2006",
    texte: "Le fait, par tout ascendant, de soustraire un enfant mineur des mains de ceux qui exercent l'autorité parentale ou auxquels il a été confié ou chez qui il a sa résidence habituelle, est puni d'un an d'emprisonnement et de 15 000 euros d'amende.",
  },
  {
    domaine: "Violences",
    source: "Article 222-33-2-1 du code pénal",
    titre: "Harcèlement au sein du couple ou par un ex-conjoint",
    motsCles: "harcelement conjoint ex concubin partenaire pacs propos comportements repetes degradation conditions de vie sante physique mentale messages incessants mineur present suicide separes separee harcele harceler",
    verifieLe: "En vigueur depuis le 1er août 2020",
    texte: "Le fait de harceler son conjoint, son partenaire lié par un pacte civil de solidarité ou son concubin par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie se traduisant par une altération de sa santé physique ou mentale est puni de trois ans d'emprisonnement et de 45 000 € d'amende lorsque ces faits ont causé une incapacité totale de travail inférieure ou égale à huit jours ou n'ont entraîné aucune incapacité de travail et de cinq ans d'emprisonnement et de 75 000 € d'amende lorsqu'ils ont causé une incapacité totale de travail supérieure à huit jours ou ont été commis alors qu'un mineur était présent et y a assisté.\n\nLes mêmes peines sont encourues lorsque cette infraction est commise par un ancien conjoint ou un ancien concubin de la victime, ou un ancien partenaire lié à cette dernière par un pacte civil de solidarité.\n\nLes peines sont portées à dix ans d'emprisonnement et à 150 000 € d'amende lorsque le harcèlement a conduit la victime à se suicider ou à tenter de se suicider.",
  },
  {
    domaine: "Violences",
    source: "Article 515-9 du code civil",
    titre: "Ordonnance de protection : qui peut la demander et à quelles conditions",
    motsCles: "ordonnance protection violences couple ancien conjoint concubin pacs danger urgence juge affaires familiales sans cohabitation proteger violent frappe menace",
    verifieLe: "En vigueur depuis le 15 juin 2024 (LOI n°2024-536 du 13 juin 2024)",
    texte: "Lorsque les violences exercées au sein du couple, y compris lorsqu'il n'y a pas de cohabitation, ou par un ancien conjoint, un ancien partenaire lié par un pacte civil de solidarité ou un ancien concubin, y compris lorsqu'il n'y a jamais eu de cohabitation, mettent en danger la personne qui en est victime ou un ou plusieurs enfants, le juge aux affaires familiales peut délivrer en urgence à cette dernière une ordonnance de protection.",
  },
  {
    domaine: "Violences",
    source: "Article 515-11 du code civil",
    titre: "Mesures que le juge peut prendre dans une ordonnance de protection",
    motsCles: "mesures interdiction contact rencontrer lieux arme logement conjugal jouissance eviction residence separee autorite parentale droit visite dissimuler domicile adresse aide juridictionnelle six jours danger animal",
    verifieLe: "En vigueur depuis le 15 juin 2024 (LOI n°2024-536 du 13 juin 2024)",
    texte: "L'ordonnance de protection est délivrée, par le juge aux affaires familiales, dans un délai maximal de six jours à compter de la fixation de la date de l'audience, s'il estime, au vu des éléments produits devant lui et contradictoirement débattus, qu'il existe des raisons sérieuses de considérer comme vraisemblables, y compris lorsqu'il n'y a pas de cohabitation ou qu'il n'y a jamais eu de cohabitation, la commission des faits de violence allégués et le danger auquel la victime ou un ou plusieurs enfants sont exposés. A l'occasion de sa délivrance, après avoir recueilli les observations des parties sur chacune des mesures suivantes, le juge aux affaires familiales est compétent pour :\n\n1° Interdire à la partie défenderesse de recevoir ou de rencontrer certaines personnes spécialement désignées par le juge aux affaires familiales, ainsi que d'entrer en relation avec elles, de quelque façon que ce soit ;\n\n1° bis Interdire à la partie défenderesse de se rendre dans certains lieux spécialement désignés par le juge aux affaires familiales dans lesquels se trouve de façon habituelle la partie demanderesse ;\n\n2° Interdire à la partie défenderesse de détenir ou de porter une arme ; Lorsque l'ordonnance de protection édicte la mesure prévue au 1°, la décision de ne pas interdire la détention ou le port d'arme est spécialement motivée ;\n\n2° bis Ordonner à la partie défenderesse de remettre au service de police ou de gendarmerie le plus proche du lieu de son domicile les armes dont elle est détentrice ;\n\n2° ter Proposer à la partie défenderesse une prise en charge sanitaire, sociale ou psychologique ou un stage de responsabilisation pour la prévention et la lutte contre les violences au sein du couple et sexistes. En cas de refus de la partie défenderesse, le juge aux affaires familiales en avise immédiatement le procureur de la République ;\n\n3° Statuer sur la résidence séparée des époux. La jouissance du logement conjugal est attribuée, sauf ordonnance spécialement motivée justifiée par des circonstances particulières, au conjoint qui n'est pas l'auteur des violences, et ce même s'il a bénéficié d'un hébergement d'urgence. Dans ce cas, la prise en charge des frais afférents peut être à la charge du conjoint violent ;\n\n3° bis Attribuer à la partie demanderesse la jouissance de l'animal de compagnie détenu au sein du foyer ;\n\n4° Se prononcer sur le logement commun de partenaires liés par un pacte civil de solidarité ou de concubins. La jouissance du logement commun est attribuée, sauf ordonnance spécialement motivée justifiée par des circonstances particulières, au partenaire lié par un pacte civil de solidarité ou au concubin qui n'est pas l'auteur des violences, et ce même s'il a bénéficié d'un hébergement d'urgence. Dans ce cas, la prise en charge des frais afférents peut être à la charge du partenaire ou concubin violent ;\n\n5° Se prononcer sur les modalités d'exercice de l'autorité parentale et, au sens de l'article 373-2-9, sur les modalités du droit de visite et d'hébergement, ainsi que, le cas échéant, sur la contribution aux charges du mariage pour les couples mariés, sur l'aide matérielle au sens de l'article 515-4 pour les partenaires d'un pacte civil de solidarité et sur la contribution à l'entretien et à l'éducation des enfants ; Lorsque l'ordonnance de protection édicte la mesure prévue au 1° du présent article, la décision de ne pas ordonner l'exercice du droit de visite dans un espace de rencontre désigné ou en présence d'un tiers de confiance est spécialement motivée ;\n\n6° Autoriser la partie demanderesse à dissimuler son domicile ou sa résidence et à élire domicile chez l'avocat qui l'assiste ou la représente ou auprès du procureur de la République près le tribunal judiciaire pour toutes les instances civiles dans lesquelles elle est également partie. Si, pour les besoins de l'exécution d'une décision de justice, le commissaire de justice chargé de cette exécution doit avoir connaissance de l'adresse de cette personne, celle-ci lui est communiquée, sans qu'il puisse la révéler à son mandant ;\n\n6° bis Autoriser la partie demanderesse à dissimuler son domicile ou sa résidence et à élire domicile pour les besoins de la vie courante chez une personne morale qualifiée ;\n\n7° Prononcer l'admission provisoire à l'aide juridictionnelle des deux parties ou de l'une d'elles en application du premier alinéa de l'article 20 de la loi n° 91-647 du 10 juillet 1991 relative à l'aide juridique.\n\nLorsque le juge délivre une ordonnance de protection, il en informe sans délai le procureur de la République, auquel il signale également les violences susceptibles de mettre en danger un ou plusieurs enfants.",
  },

  {
    domaine: "Violences",
    source: "Article 515-10 du code civil",
    titre: "Demander une ordonnance de protection sans avoir porté plainte",
    motsCles: "demande ordonnance protection plainte prealable pas necessaire audience separement chambre du conseil ministere public",
    verifieLe: "En vigueur depuis le 30 décembre 2019",
    texte: "L'ordonnance de protection est délivrée par le juge, saisi par la personne en danger, si besoin assistée, ou, avec l'accord de celle-ci, par le ministère public. Sa délivrance n'est pas conditionnée à l'existence d'une plainte pénale préalable.\n\nDès la réception de la demande d'ordonnance de protection, le juge convoque, par tous moyens adaptés, pour une audience, la partie demanderesse et la partie défenderesse, assistées, le cas échéant, d'un avocat, ainsi que le ministère public à fin d'avis. Ces auditions peuvent avoir lieu séparément. L'audience se tient en chambre du conseil. A la demande de la partie demanderesse, les auditions se tiennent séparément.",
  },

  {
    domaine: "Violences",
    source: "Article 515-12 du code civil",
    titre: "Durée de l'ordonnance de protection et prolongation",
    motsCles: "duree douze mois prolonger prolongation divorce separation modifier supprimer rapporter mesures",
    verifieLe: "En vigueur depuis le 15 juin 2024 (LOI n°2024-536 du 13 juin 2024)",
    texte: "Les mesures mentionnées à l'article 515-11 sont prises pour une durée maximale de douze mois à compter de la notification de l'ordonnance. Elles peuvent être prolongées au-delà si, durant ce délai, une demande en divorce ou en séparation de corps a été déposée ou si le juge aux affaires familiales a été saisi d'une demande relative à l'exercice de l'autorité parentale. Le juge aux affaires familiales peut, à tout moment, à la demande du ministère public ou de l'une ou l'autre des parties, ou après avoir fait procéder à toute mesure d'instruction utile, et après avoir invité chacune d'entre elles à s'exprimer, supprimer ou modifier tout ou partie des mesures énoncées dans l'ordonnance de protection, en décider de nouvelles, accorder à la personne défenderesse une dispense temporaire d'observer certaines des obligations qui lui ont été imposées ou rapporter l'ordonnance de protection.",
  },

  {
    domaine: "Violences",
    source: "Article 515-11-1 du code civil",
    titre: "Bracelet anti-rapprochement",
    motsCles: "bracelet anti rapprochement dispositif electronique distance signaler consentement",
    verifieLe: "En vigueur depuis le 1er août 2020",
    texte: "I.- Lorsque l'interdiction prévue au 1° de l'article 515-11 a été prononcée, le juge aux affaires familiales peut prononcer une interdiction de se rapprocher de la partie demanderesse à moins d'une certaine distance qu'il fixe et ordonner, après avoir recueilli le consentement des deux parties, le port par chacune d'elles d'un dispositif électronique mobile anti-rapprochement permettant à tout moment de signaler que la partie défenderesse ne respecte pas cette distance. En cas de refus de la partie défenderesse faisant obstacle au prononcé de cette mesure, le juge aux affaires familiales en avise immédiatement le procureur de la République.\n\nII.- Ce dispositif fait l'objet d'un traitement de données à caractère personnel, dont les conditions et les modalités de mise en œuvre sont définies par décret en Conseil d'Etat.",
  },

  {
    domaine: "Pension et frais",
    source: "Article 373-2-3 du code civil",
    titre: "Remplacer la pension par un capital ou l'usufruit d'un bien",
    motsCles: "capital somme argent rente indexee abandon biens usufruit remplacer pension",
    verifieLe: "En vigueur depuis le 25 décembre 2021",
    texte: "Lorsque la consistance des biens du débiteur s'y prête, la pension alimentaire peut être remplacée, en tout ou partie, par le versement d'une somme d'argent entre les mains d'un organisme accrédité chargé d'accorder en contrepartie à l'enfant une rente indexée, l'abandon de biens en usufruit ou l'affectation de biens productifs de revenus, sous les modalités et garanties prévues par la décision, l'acte ou la convention mentionnés aux 1° à 6° du I de l'article 373-2-2.",
  },

  {
    domaine: "Modification",
    source: "Article 381 du code civil (II)",
    titre: "Délai avant de redemander un droit de visite après un retrait",
    motsCles: "restitution droits retrait circonstances nouvelles un an six mois redemander",
    verifieLe: "En vigueur depuis le 20 mars 2024 (LOI n°2024-233 du 18 mars 2024)",
    texte: "I. - Les père et mère qui ont fait l'objet d'un retrait total ou partiel de l'autorité parentale pour l'une des causes prévues aux articles 378 et 378-1 pourront, par requête, obtenir du tribunal judiciaire, en justifiant de circonstances nouvelles, que leur soient restitués, en tout ou partie, les droits dont ils avaient été privés.\n\nLa demande en restitution ne pourra être formée qu'un an au plus tôt après que le jugement prononçant le retrait total ou partiel de l'autorité parentale est devenu irrévocable ; en cas de rejet, elle ne pourra être renouvelée qu'après une nouvelle période d'un an. Aucune demande ne sera recevable lorsque, avant le dépôt de la requête, l'enfant aura été placé en vue de l'adoption.\n\nSi la restitution est accordée, le ministère public requerra, le cas échéant, des mesures d'assistance éducative.\n\nII. - Lorsque le jugement a prononcé un retrait de l'exercice de l'autorité parentale et des droits de visite et d'hébergement pour l'une des causes prévues à l'article 378, aucune demande au titre de l'article 373-2-13 ne peut être formée moins de six mois après que ce jugement est devenu irrévocable.",
  },

  {
    domaine: "Manquements",
    source: "Article 227-9 du code pénal",
    titre: "Peines aggravées : enfant retenu plus de cinq jours ou hors de France",
    motsCles: "retenu cinq jours sans nouvelles hors territoire etranger aggravee peines non representation",
    verifieLe: "En vigueur depuis le 5 mars 2002",
    texte: "Les faits définis par les articles 227-5 et 227-7 sont punis de trois ans d'emprisonnement et de 45 000 euros d'amende :\n\n1° Si l'enfant mineur est retenu au-delà de cinq jours sans que ceux qui ont le droit de réclamer qu'il leur soit représenté sachent où il se trouve ;\n\n2° Si l'enfant mineur est retenu indûment hors du territoire de la République.",
  },

  {
    domaine: "Pension et frais",
    source: "Article 227-4 du code pénal",
    titre: "Le parent qui doit la pension doit signaler son changement d'adresse",
    motsCles: "debiteur pension changement domicile notifier creancier un mois intermediation caf informations",
    verifieLe: "En vigueur depuis le 1er mars 2022",
    texte: "Est puni de six mois d'emprisonnement et de 7 500 euros d'amende le fait, par une personne tenue, dans les conditions prévues à l'article 227-3, à l'obligation de verser une pension, une contribution, des subsides ou des prestations de toute nature :\n\n1° De ne pas notifier son changement de domicile au créancier ou, lorsque le versement de la pension fait l'objet d'une intermédiation financière dans les conditions prévues aux II et III de l'article 373-2-2 du code civil et à l'article L. 582-1 du code de la sécurité sociale, à l'organisme débiteur des prestations familiales, dans un délai d'un mois à compter de ce changement ;\n\n2° Lorsque le versement de la pension fait l'objet d'une intermédiation financière dans les conditions prévues aux II et III de l'article 373-2-2 du code civil et à l'article L. 582-1 du code de la sécurité sociale, de s'abstenir de transmettre à l'organisme débiteur des prestations familiales les informations nécessaires à l'instruction et à la mise en œuvre de l'intermédiation financière et de s'abstenir d'informer cet organisme de tout changement de situation ayant des conséquences sur cette mise en œuvre.",
  },

  {
    domaine: "Violences",
    source: "Article 222-33-2-2 du code pénal",
    titre: "Harcèlement moral hors couple (famille, amis, collègues, en ligne)",
    motsCles: "harcelement moral general famille ami collegue voisin en ligne numerique repetes plusieurs personnes mineur vulnerable degradation conditions de vie",
    verifieLe: "En vigueur depuis le 23 mars 2024",
    texte: "Le fait de harceler une personne par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie se traduisant par une altération de sa santé physique ou mentale est puni d'un an d'emprisonnement et de 15 000 € d'amende lorsque ces faits ont causé une incapacité totale de travail inférieure ou égale à huit jours ou n'ont entraîné aucune incapacité de travail.\n\nL'infraction est également constituée :\n\na) Lorsque ces propos ou comportements sont imposés à une même victime par plusieurs personnes, de manière concertée ou à l'instigation de l'une d'elles, alors même que chacune de ces personnes n'a pas agi de façon répétée ;\n\nb) Lorsque ces propos ou comportements sont imposés à une même victime, successivement, par plusieurs personnes qui, même en l'absence de concertation, savent que ces propos ou comportements caractérisent une répétition.\n\nLes faits mentionnés aux premier à quatrième alinéas sont punis de deux ans d'emprisonnement et de 30 000 € d'amende :\n\n1° Lorsqu'ils ont causé une incapacité totale de travail supérieure à huit jours ;\n2° Lorsqu'ils ont été commis sur un mineur ;\n3° Lorsqu'ils ont été commis sur une personne dont la particulière vulnérabilité, due à son âge, à une maladie, à une infirmité, à une déficience physique ou psychique ou à un état de grossesse, est apparente ou connue de leur auteur ;\n4° Lorsqu'ils ont été commis par l'utilisation d'un service de communication au public en ligne ou par le biais d'un support numérique ou électronique ;\n4° bis Lorsqu'ils ont été commis sur le titulaire d'un mandat électif ;\n5° Lorsqu'un mineur était présent et y a assisté.\n\nLes faits mentionnés aux premier à quatrième alinéas sont punis de trois ans d'emprisonnement et de 45 000 € d'amende lorsqu'ils sont commis dans deux des circonstances mentionnées aux 1° à 5°.",
  },

  {
    domaine: "Violences",
    source: "Article 222-33-2 du code pénal",
    titre: "Harcèlement moral au travail",
    motsCles: "harcelement travail professionnel conditions de travail dignite avenir professionnel collegue superieur",
    verifieLe: "En vigueur depuis le 6 août 2014",
    texte: "Le fait de harceler autrui par des propos ou comportements répétés ayant pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte à ses droits et à sa dignité, d'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel, est puni de deux ans d'emprisonnement et de 30 000 € d'amende.",
  },

];

/* ============================================================
   CHOIX DES TEXTES À ENVOYER
   ============================================================ */

// Mots trop courants pour aider à retrouver un texte : on les ignore
// dans les mots-clés, sinon « de », « la », « enfant » feraient
// remonter n'importe quelle entrée.
const MOTS_IGNORES = new Set(`
a au aux de des du en et l la le les ne ou par pas pour que qui sa se son sur un une d c s y
est sans avec dans an ans mois jours six deux cinq dix douze
accord accords acte article autre avis besoins bonne chacun chambre changement changer charge
choix commun conditions contre courant decision decisions demande demander duree ensemble
entre etudes famille foi general graves hors importants informations libre lieux loi mains
maison moment nouvelle nouvelles non obligation parole personnes plein plusieurs pratique
present prise privee public quotidien refus rendre rend respecte respecter seul situation
temps tout utile vie
`.trim().split(/\s+/));

// Enlève les accents et la ponctuation : les mots-clés sont écrits sans
// accents, les messages des utilisatrices en ont. Il faut comparer la même
// chose des deux côtés.
function sansAccents(s) {
  return String(s || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function motsCleDe(entree) {
  return [...new Set(
    sansAccents(entree.motsCles).split(" ")
      .filter(m => m.length > 2 && !MOTS_IGNORES.has(m))
  )];
}

// Un mot présent dans beaucoup d'entrées ne distingue rien ; un mot rare est
// très informatif. On pèse donc chaque mot-clé par l'inverse de sa fréquence.
const FREQUENCE = {};
for (const e of TEXTES_LOI) {
  if (!e.texte || !e.texte.trim()) continue;
  for (const m of motsCleDe(e)) FREQUENCE[m] = (FREQUENCE[m] || 0) + 1;
}

// Une entrée est retenue si l'un de ces trois cas est vrai :
//  - l'utilisatrice cite elle-même le numéro d'article ;
//  - deux mots-clés distincts au moins apparaissent ;
//  - un seul apparaît, mais il est très spécifique (présent dans 1 ou 2 entrées).
// Réglé sur 14 cas réels : 8 questions juridiques sur 9 reçoivent le bon texte,
// et aucune des 5 conversations ordinaires n'en déclenche à tort.
const POIDS_MOT_SPECIFIQUE = 0.5;
const NOMBRE_MAXIMUM = 3;

function evaluerEntree(entree, conversation) {
  if (!entree.texte || !entree.texte.trim()) return null; // entrée non remplie
  const trouves = motsCleDe(entree)
    .filter(m => new RegExp("(^| )" + m + "( |$)").test(conversation));
  if (!trouves.length) return null;

  const numero = (entree.source.match(/\d+(?:-\d+)*/) || [])[0];
  if (numero && conversation.includes(numero)) {
    return { entree, poids: 99, mots: trouves }; // citée explicitement
  }
  const meilleur = Math.max(...trouves.map(m => 1 / FREQUENCE[m]));
  if (trouves.length < 2 && meilleur < POIDS_MOT_SPECIFIQUE) return null;

  const poids = trouves.reduce((somme, m) => somme + 1 / FREQUENCE[m], 0);
  return { entree, poids, mots: trouves };
}

// Renvoie les textes les plus pertinents pour les derniers messages.
function textesPertinents(messages) {
  if (!Array.isArray(messages)) return [];
  const conversation = sansAccents(
    messages.slice(-4).map(m => String((m && (m.content || m.text)) || "")).join(" ")
  );
  return TEXTES_LOI
    .map(e => evaluerEntree(e, conversation))
    .filter(Boolean)
    .sort((a, b) => b.poids - a.poids)
    .slice(0, NOMBRE_MAXIMUM)
    .map(x => x.entree);
}

// Construit le morceau de prompt contenant ces textes, et la liste des
// références que Clarisse aura le droit de citer pour CET échange.
function blocReperesVerifies(messages) {
  const choisis = textesPertinents(messages);
  if (!choisis.length) return { bloc: "", references: [] };

  const corps = choisis.map(e =>
    `${e.source} — ${e.titre}\n(${e.verifieLe})\n« ${e.texte} »`
  ).join("\n\n");

  const bloc = `
# Textes de loi vérifiés (les SEULS que tu peux citer)
Ces textes viennent de Légifrance et ont été vérifiés à la main. Tu peux t'appuyer dessus, les citer et les expliquer en mots simples.
Règle stricte, sans exception : tu ne cites AUCUN autre article, AUCUNE autre règle, AUCUN chiffre, AUCUN montant et AUCUN délai qui ne figure pas ci-dessous — même si tu crois les connaître. Si la réponse à sa question n'est pas dans ces textes, tu le dis simplement ("je n'ai pas de texte fiable là-dessus") et tu orientes. Ne complète jamais un texte d'ici avec tes propres souvenirs.
Tu expliques en français courant plutôt que de réciter : elle a besoin de comprendre, pas d'un copier-coller. Tu peux citer une phrase exacte quand elle est décisive.
Tu précises toujours que c'est un repère général et non un conseil pour sa situation, et qu'un point-justice, le CIDFF ou un·e avocat·e sont les seuls à pouvoir le dire pour elle.

${corps}`;

  return { bloc, references: choisis.map(e => e.source) };
}

// Toutes les références du fichier (pages de diagnostic).
function toutesLesReferences() {
  return TEXTES_LOI.filter(e => e.texte && e.texte.trim()).map(e => e.source);
}

/* ============================================================
   QUAND AJOUTER LE BLOC « DÉMARCHES »
   ============================================================ */

// Mots qui déclenchent l'ajout du bloc d'orientation au prompt du coach.
// Mieux vaut un déclencheur un peu large qu'un peu étroit : si le bloc
// manque alors qu'il fallait orienter, Clarisse répond de mémoire — et
// c'est exactement comme ça qu'elle a inventé « environ 200 € par mois ».
const MOTS_JURIDIQUES = [
  // justice et procédure
  "avocat", "avocate", "juriste", "juge", "tribunal", "procès", "plainte",
  "police", "gendarmerie", "procédure", "loi", "légal", "illégal", "droit",
  "main courante", "ordonnance de protection", "preuve", "témoignage",
  "signaler", "signalement", "porter plainte", "point-justice",
  // famille
  "divorce", "séparation", "garde", "pension", "alimentaire", "prestation",
  "jaf", "affaires familiales", "filiation", "tutelle", "autorité parentale",
  "résidence", "visite", "hébergement", "déménage", "déménagement",
  // argent et logement
  "argent", "somme", "montant", "verser", "dédommage", "indemnité",
  "notaire", "huissier", "bail", "loyer", "logement", "expulser", "expulsion",
  "héritage", "succession", "caf", "allocation",
  // travail
  "licenciement", "prud'hommes", "inspection du travail", "harcèlement",
  // mise en sécurité
  "démarche", "protection", "me protéger", "sécurité", "mettre à l'abri",
];

// Regarde les derniers échanges pour décider si le bloc est utile.
// On ne regarde que les 6 derniers messages : un mot prononcé très en
// amont ne doit pas charger le prompt pendant toute la conversation.
function conversationTouchAuDroit(messages) {
  if (!Array.isArray(messages)) return false;
  const texte = messages
    .slice(-6)
    .map(m => String((m && (m.content || m.text)) || ""))
    .join(" ")
    .toLowerCase();
  return MOTS_JURIDIQUES.some(mot => texte.includes(mot));
}

const BLOC_DEMARCHES = `
# Démarches et orientation (la conversation vient d'y toucher)
Rappel prioritaire : AUCUN montant, AUCUN barème, AUCUN délai, AUCUN article de loi, AUCUNE procédure précise en dehors des textes vérifiés qui te sont éventuellement fournis plus bas. Même si tu crois savoir, même si on insiste.

Ce que tu peux faire, avec douceur et sans noyer la personne :
- Dire que ce sont des repères généraux, jamais un conseil juridique personnalisé.
- Rappeler que se mettre en sécurité, elle et ses enfants s'il y en a, passe avant toute démarche.
- Lui dire qu'il est utile de documenter pendant que c'est frais : photos datées, note écrite (le journal de l'application est fait pour ça), consultation d'un médecin ou des urgences, qui peuvent établir un certificat.
- Orienter vers les interlocuteurs gratuits dont c'est le métier : 3919 (violences conjugales, écoute anonyme), 119 (enfance en danger), 116 006 (France Victimes), CIDFF (information juridique gratuite), point-justice, avocat·e spécialisé·e, médecine du travail et inspection du travail pour le travail, 17 ou 112 en cas de danger immédiat.
- Sur l'enregistrement ou le fait de filmer quelqu'un à son insu : dire que le statut légal est complexe et débattu en France, donc à examiner avec un·e avocat·e ou une association. Jamais "c'est permis", jamais "c'est interdit".

Cette aide ne vaut que rattachée à une personne ou une situation précise dont vous parlez. Si la question est générale et détachée de sa situation, rappelle doucement que tu n'es pas une ressource juridique générale.
N'en parle que si elle le demande ou si la situation l'appelle vraiment : pas de démarches proposées pour un désaccord ordinaire.`;

module.exports = {
  TEXTES_LOI,
  MOTS_JURIDIQUES,
  conversationTouchAuDroit,
  BLOC_DEMARCHES,
  textesPertinents,
  blocReperesVerifies,
  toutesLesReferences,
};
