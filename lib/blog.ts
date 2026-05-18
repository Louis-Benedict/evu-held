export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string; // YYYY-MM-DD
  readingTimeMinutes: number;
  category: string;
  excerpt: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "waermepumpe-anmelden",
    title: "Wärmepumpe anmelden – ist das Pflicht?",
    metaTitle: "Wärmepumpe anmelden – Pflicht & Anleitung 2025 | EVU-HELD",
    metaDescription:
      "Muss eine Wärmepumpe angemeldet werden? Ja – wir erklären die Pflichten nach §14a EnWG, die Eintragung im Marktstammdatenregister und alle notwendigen Schritte.",
    publishedAt: "2025-03-10",
    readingTimeMinutes: 4,
    category: "Wärmepumpe",
    excerpt:
      "Viele Hausbesitzer sind unsicher, ob sie ihre Wärmepumpe anmelden müssen. Wir klären auf: Was gilt nach §14a EnWG, welche Schritte sind erforderlich und welche Folgen drohen bei fehlender Anmeldung.",
    content: [
      {
        type: "paragraph",
        text: "Viele Hausbesitzer fragen sich, ob sie ihre Wärmepumpe überhaupt anmelden müssen – oder ob das nur eine optionale Formalität ist. Die klare Antwort: In den meisten Fällen ist die Anmeldung gesetzlich vorgeschrieben und sollte nicht auf die lange Bank geschoben werden.",
      },
      {
        type: "h2",
        text: "Warum muss eine Wärmepumpe angemeldet werden?",
      },
      {
        type: "paragraph",
        text: "Wärmepumpen zählen als steuerbare Verbrauchseinrichtungen gemäß §14a des Energiewirtschaftsgesetzes (EnWG). Das bedeutet: Der zuständige Netzbetreiber hat das Recht, die Leistung Ihrer Wärmepumpe in Hochlastsituationen kurzzeitig zu reduzieren – maximal auf 4,2 kW. Als Gegenleistung erhalten Betreiber vergünstigte Netzentgelte, was langfristig Kosten spart.",
      },
      {
        type: "h2",
        text: "Was muss konkret angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Anmeldung beim zuständigen Netzbetreiber (mit technischen Daten der Anlage)",
          "Eintragung im Marktstammdatenregister (MaStR) der Bundesnetzagentur",
          "Ggf. Installation und Abstimmung eines separaten Zählers oder Unterzählers",
          "Nachweis der Steuerbarkeit durch ein kompatibles Steuergerät (z. B. EEBUS oder Rundsteuerempfänger)",
        ],
      },
      {
        type: "h2",
        text: "Welche Wärmepumpen sind betroffen?",
      },
      {
        type: "paragraph",
        text: "Grundsätzlich fallen alle neu installierten Wärmepumpen ab einer elektrischen Leistung von mehr als 4,2 kW unter die §14a-Regelung. Auch bestehende Anlagen, die nach dem 1. Januar 2024 erweitert oder modernisiert werden, können der Meldepflicht unterliegen. Im Zweifelsfall empfiehlt sich eine Rücksprache mit einem Fachbetrieb.",
      },
      {
        type: "h2",
        text: "Was passiert ohne Anmeldung?",
      },
      {
        type: "list",
        items: [
          "Der Netzbetreiber kann den Netzanschluss der Wärmepumpe verweigern oder einschränken",
          "Kein Anspruch auf die vergünstigten Netzentgelte nach §14a EnWG",
          "Mögliche rechtliche Konsequenzen und Bußgelder",
          "Probleme mit dem Versicherungsschutz bei einem Schaden durch eine nicht angemeldete Anlage",
        ],
      },
      {
        type: "h2",
        text: "Wie läuft die Anmeldung ab?",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung einer Wärmepumpe beim Netzbetreiber erfordert technische Daten wie die Nennleistung, den Standort und den Hersteller der Anlage. Diese Informationen müssen in einem vom Netzbetreiber vorgegebenen Formular eingereicht werden. Zusätzlich muss die Anlage innerhalb von vier Wochen nach Inbetriebnahme im Marktstammdatenregister registriert werden.",
      },
      {
        type: "paragraph",
        text: "Da jeder Netzbetreiber eigene Formulare und Prozesse hat, ist die Anmeldung für Privatpersonen oft unübersichtlich und zeitaufwendig. Fehler in der Dokumentation können zu Verzögerungen oder einer Ablehnung der Anmeldung führen.",
      },
      {
        type: "callout",
        text: "Wir übernehmen die komplette Anmeldung Ihrer Wärmepumpe – beim Netzbetreiber, im Marktstammdatenregister und bei allen weiteren Behörden. Deutschlandweit, schnell und zuverlässig.",
      },
    ],
  },
  {
    slug: "pv-anlage-anmelden",
    title: "PV-Anlage anmelden – Schritt für Schritt erklärt",
    metaTitle: "PV-Anlage anmelden 2025 – Schritt für Schritt | EVU-HELD",
    metaDescription:
      "Alles zur Anmeldung einer Photovoltaikanlage: Voranmeldung beim Netzbetreiber, Marktstammdatenregister, Zähler und häufige Fehler – verständlich erklärt.",
    publishedAt: "2025-02-28",
    readingTimeMinutes: 5,
    category: "PV-Anlage",
    excerpt:
      "Eine PV-Anlage muss vor oder direkt nach der Inbetriebnahme angemeldet werden. Wir erklären alle Schritte – von der Voranmeldung beim Netzbetreiber bis zur Eintragung im Marktstammdatenregister.",
    content: [
      {
        type: "paragraph",
        text: "Wer eine Photovoltaikanlage (PV-Anlage) installiert, muss diese ordnungsgemäß anmelden – das ist gesetzlich vorgeschrieben und Voraussetzung für den Netzbetrieb und die Einspeisevergütung. Viele Betreiber unterschätzen den Aufwand und stolpern über Fehler, die zu Verzögerungen oder sogar zur Ablehnung durch den Netzbetreiber führen können.",
      },
      {
        type: "h2",
        text: "Schritt 1: Voranmeldung beim Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Bevor die PV-Anlage in Betrieb genommen wird, muss eine Voranmeldung beim zuständigen Netzbetreiber erfolgen. Dabei werden technische Daten wie die geplante Modulleistung (kWp), der Wechselrichtertyp und der Standort übermittelt. Der Netzbetreiber prüft, ob das lokale Netz die Einspeisung aufnehmen kann, und erteilt eine Netzverträglichkeitsprüfung.",
      },
      {
        type: "h2",
        text: "Schritt 2: Installation und Inbetriebnahme",
      },
      {
        type: "paragraph",
        text: "Nach der Freigabe durch den Netzbetreiber kann die Anlage installiert und in Betrieb genommen werden. Ein konzessionierter Elektrobetrieb muss die Inbetriebnahme durchführen und bestätigen. Das Inbetriebnahmeprotokoll wird für die weitere Anmeldung benötigt.",
      },
      {
        type: "h2",
        text: "Schritt 3: Endanmeldung beim Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Nach der Installation wird die Endanmeldung beim Netzbetreiber eingereicht. Hierbei werden das Inbetriebnahmeprotokoll, die technischen Daten und ggf. Fotos der Anlage übermittelt. Erst nach dieser Anmeldung darf offiziell in das Netz eingespeist werden.",
      },
      {
        type: "h2",
        text: "Schritt 4: Eintragung im Marktstammdatenregister (MaStR)",
      },
      {
        type: "paragraph",
        text: "Das Marktstammdatenregister (MaStR) der Bundesnetzagentur ist das zentrale Register für alle Energieanlagen in Deutschland. Die Registrierung muss innerhalb eines Monats nach Inbetriebnahme erfolgen – sonst drohen Bußgelder und der rückwirkende Verlust der Einspeisevergütung.",
      },
      {
        type: "list",
        items: [
          "Anlagenbetreiber im MaStR registrieren (sofern noch nicht geschehen)",
          "Technische Daten der Anlage eintragen (Leistung, Standort, Inbetriebnahmedatum)",
          "Wechselrichter und Speicher separat erfassen",
          "Registrierungsbestätigung aufbewahren",
        ],
      },
      {
        type: "h2",
        text: "Häufige Fehler bei der PV-Anmeldung",
      },
      {
        type: "list",
        items: [
          "Anmeldung nach der Inbetriebnahme vergessen oder zu spät eingereicht",
          "Falsche oder unvollständige technische Angaben",
          "Fehlende Unterschriften oder Dokumente",
          "Falschen Netzbetreiber kontaktiert",
          "Speicher oder Wechselrichter nicht separat registriert",
        ],
      },
      {
        type: "callout",
        text: "Mit unserem Service übernehmen wir alle Anmeldeschritte für Sie – von der Voranmeldung bis zur MaStR-Registrierung. Schnell, korrekt und ohne Stress für Sie.",
      },
    ],
  },
  {
    slug: "wallbox-anmelden-14a-enwg",
    title: "Wallbox anmelden – Pflicht nach §14a EnWG?",
    metaTitle: "Wallbox anmelden 2025 – Pflicht nach §14a EnWG | EVU-HELD",
    metaDescription:
      "Seit 2024 gilt §14a EnWG auch für Wallboxen. Wir erklären, wer anmelden muss, was der Netzbetreiber verlangt und welche finanziellen Vorteile die Registrierung bringt.",
    publishedAt: "2025-02-15",
    readingTimeMinutes: 4,
    category: "Wallbox",
    excerpt:
      "Seit der Einführung von §14a EnWG gelten neue Regeln für Wallboxen. Wir erklären, welche Pflichten gelten, was angemeldet werden muss und welche Vorteile die Registrierung bringt.",
    content: [
      {
        type: "paragraph",
        text: "Mit dem Rollout von Elektrofahrzeugen steigt auch die Zahl der Wallboxen in deutschen Haushalten und Gewerbebetrieben rasant. Was viele Betreiber nicht wissen: Seit der Novellierung des §14a EnWG zum 1. Januar 2024 gelten klare Anmeldepflichten für Wallboxen.",
      },
      {
        type: "h2",
        text: "Was regelt §14a EnWG für Wallboxen?",
      },
      {
        type: "paragraph",
        text: "§14a EnWG verpflichtet Betreiber sogenannter steuerbarer Verbrauchseinrichtungen – dazu zählen Wallboxen mit einer Leistung von mehr als 3,7 kW – zur Anmeldung beim Netzbetreiber. Im Gegenzug kann der Netzbetreiber die Ladeleistung in Spitzenlastsituationen kurzzeitig auf mindestens 3,7 kW drosseln. Als Ausgleich erhalten Betreiber günstigere Netzentgelte.",
      },
      {
        type: "h2",
        text: "Welche Wallboxen müssen angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Alle neu installierten Wallboxen mit einer elektrischen Anschlussleistung über 3,7 kW",
          "Wallboxen in Privathaushalten, Mehrfamilienhäusern und gewerblichen Gebäuden",
          "Bestehende Anlagen, die nach dem 1. Januar 2024 erneuert oder erweitert wurden",
        ],
      },
      {
        type: "h2",
        text: "Was muss beim Netzbetreiber gemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Typ und Hersteller der Wallbox",
          "Elektrische Nennleistung (kW)",
          "Installationsadresse und Zählernummer",
          "Nachweis der Steuerbarkeit (kompatibles Steuergerät oder Schnittstelle)",
          "Inbetriebnahmedatum und Installationsprotokoll",
        ],
      },
      {
        type: "h2",
        text: "Welche Vorteile bringt die Anmeldung?",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung ist nicht nur Pflicht – sie bringt auch finanzielle Vorteile. Durch die Teilnahme am §14a-Modell profitieren Betreiber von reduzierten Netzentgelten. Diese Einsparungen können je nach Netzbetreiber und Stromanbieter mehrere hundert Euro im Jahr betragen.",
      },
      {
        type: "callout",
        text: "Wir melden Ihre Wallbox korrekt beim Netzbetreiber an und sorgen dafür, dass alle Anforderungen nach §14a EnWG erfüllt sind. Schnell und zuverlässig – deutschlandweit.",
      },
    ],
  },
  {
    slug: "anlage-nicht-angemeldet-folgen",
    title: "Was passiert, wenn ich meine Anlage nicht anmelde?",
    metaTitle: "Energieanlage nicht angemeldet – alle Folgen und Risiken | EVU-HELD",
    metaDescription:
      "Was passiert, wenn PV-Anlage, Wärmepumpe oder Wallbox nicht angemeldet sind? Wir erklären alle rechtlichen, finanziellen und technischen Konsequenzen – und wie Sie sie vermeiden.",
    publishedAt: "2025-01-20",
    readingTimeMinutes: 6,
    category: "Ratgeber",
    excerpt:
      "Die Anmeldung von Energieanlagen ist keine optionale Formalität. Wer PV-Anlage, Wärmepumpe oder Wallbox nicht registriert, riskiert ernsthafte rechtliche, finanzielle und technische Konsequenzen.",
    content: [
      {
        type: "paragraph",
        text: "Die Anmeldung von Energieanlagen – egal ob PV-Anlage, Wärmepumpe oder Wallbox – wird von vielen Betreibern als bürokratische Pflicht gesehen, die gerne aufgeschoben wird. Dabei sind die Konsequenzen einer fehlenden oder fehlerhaften Anmeldung erheblich und können teuer werden.",
      },
      {
        type: "h2",
        text: "Welche Anlagen müssen angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Photovoltaikanlagen (PV-Anlagen / Solaranlagen) ab 800 Watt",
          "Wärmepumpen als steuerbare Verbrauchseinrichtungen nach §14a EnWG",
          "Wallboxen mit einer Leistung über 3,7 kW",
          "Batteriespeicher, die mit dem öffentlichen Stromnetz verbunden sind",
          "Blockheizkraftwerke (BHKW)",
        ],
      },
      {
        type: "h2",
        text: "Konsequenz 1: Ablehnung durch den Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Der Netzbetreiber hat das Recht, eine nicht angemeldete Anlage vom Netz zu trennen. Das bedeutet: keine Einspeisung, keine Vergütung, kein Eigenverbrauch aus dem Netz.",
      },
      {
        type: "h2",
        text: "Konsequenz 2: Verlust der Einspeisevergütung",
      },
      {
        type: "paragraph",
        text: "Die gesetzlich garantierte Einspeisevergütung nach dem EEG setzt eine ordnungsgemäße Registrierung im Marktstammdatenregister voraus. Wer die Frist überschreitet, verliert für diesen Zeitraum den Anspruch rückwirkend.",
      },
      {
        type: "h2",
        text: "Konsequenz 3: Rechtliche Folgen und Bußgelder",
      },
      {
        type: "paragraph",
        text: "Die Bundesnetzagentur kann bei Verstößen gegen die Registrierungspflicht im Marktstammdatenregister Bußgelder verhängen. Auch bei Verstößen gegen die Anmeldepflicht nach §14a EnWG drohen rechtliche Konsequenzen.",
      },
      {
        type: "h2",
        text: "Ist eine nachträgliche Anmeldung möglich?",
      },
      {
        type: "paragraph",
        text: "Ja – eine nachträgliche Anmeldung ist in der Regel möglich. Allerdings können bereits entstandene Bußgelder oder der Verlust der Einspeisevergütung nicht mehr rückgängig gemacht werden.",
      },
      {
        type: "callout",
        text: "Sie haben eine Anlage, die noch nicht angemeldet ist? Wir helfen Ihnen – auch bei der nachträglichen Anmeldung. Schnell, korrekt und deutschlandweit.",
      },
    ],
  },
  {
    slug: "14a-enwg-erklaert",
    title: "§14a EnWG einfach erklärt – was steckt dahinter?",
    metaTitle: "§14a EnWG erklärt 2025 – steuerbare Verbrauchseinrichtungen | EVU-HELD",
    metaDescription:
      "Was ist §14a EnWG? Wer ist betroffen? Welche Vorteile bringt die Teilnahme? Wir erklären die Regelung für steuerbare Verbrauchseinrichtungen verständlich.",
    publishedAt: "2025-04-05",
    readingTimeMinutes: 5,
    category: "Ratgeber",
    excerpt:
      "§14a EnWG klingt kompliziert – ist aber mit den richtigen Erklärungen schnell verstanden. Wir zeigen, wen die Regelung betrifft, was sie bedeutet und welche finanziellen Vorteile sie bringt.",
    content: [
      {
        type: "paragraph",
        text: "Seit dem 1. Januar 2024 gilt die überarbeitete Fassung des §14a des Energiewirtschaftsgesetzes (EnWG). Sie regelt, wie sogenannte steuerbare Verbrauchseinrichtungen (SteuVE) – also Wallboxen, Wärmepumpen und Klimaanlagen – ins Stromnetz integriert werden sollen.",
      },
      {
        type: "h2",
        text: "Was sind steuerbare Verbrauchseinrichtungen?",
      },
      {
        type: "paragraph",
        text: "Steuerbare Verbrauchseinrichtungen sind elektrische Geräte mit hohem Verbrauch, die der Netzbetreiber in Engpasssituationen kurzzeitig dimmen darf. Konkret betroffen sind: Wallboxen mit mehr als 3,7 kW, Wärmepumpen, Klimaanlagen und Nachtspeicherheizungen.",
      },
      {
        type: "h2",
        text: 'Was bedeutet "steuerbar" für den Betreiber?',
      },
      {
        type: "list",
        items: [
          "Der Netzbetreiber darf die Leistung in Spitzenlastsituationen auf mindestens 3,7 kW drosseln",
          "Wallboxen müssen technisch steuerbar sein (Smart-Home-Schnittstelle oder Direktsteuerung)",
          "Die Drosselung darf pro Jahr nicht öfter als 200 Stunden stattfinden",
          "Die Grundversorgung bleibt immer gewährleistet – auf 3,7 kW kann das Fahrzeug noch ausreichend laden",
        ],
      },
      {
        type: "h2",
        text: "Welche Vorteile hat die Teilnahme?",
      },
      {
        type: "paragraph",
        text: "Wer seine Anlage nach §14a EnWG anmeldet, profitiert von reduzierten Netzentgelten. Je nach Netzbetreiber und Jahresverbrauch können das mehrere hundert Euro pro Jahr sein. Außerdem ist die Anmeldung für neu installierte Anlagen ohnehin Pflicht – die Vergünstigung ist also kein Bonus, sondern der logische Ausgleich.",
      },
      {
        type: "h2",
        text: "Wer muss sich anmelden?",
      },
      {
        type: "list",
        items: [
          "Betreiber von Wallboxen mit mehr als 3,7 kW (ab Einbaudatum 1. Januar 2024)",
          "Betreiber von Wärmepumpen mit einer elektrischen Leistung über 4,2 kW",
          "Betreiber von Klimaanlagen und Nachtspeicherheizungen in bestimmten Leistungsklassen",
          "Bestehende Anlagen, die nach dem Stichtag erneuert oder erweitert werden",
        ],
      },
      {
        type: "h2",
        text: "Wie läuft die Anmeldung ab?",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung erfolgt beim jeweiligen Netzbetreiber. Da jeder Netzbetreiber eigene Formulare und Prozesse hat, kann die Anmeldung ohne Erfahrung schnell zum Zeitfresser werden. Häufige Fehler sind falsche technische Angaben oder fehlende Dokumente.",
      },
      {
        type: "callout",
        text: "Wir übernehmen die §14a-konforme Anmeldung für Sie – egal bei welchem Netzbetreiber. Schnell, korrekt und ohne bürokratischen Aufwand für Sie.",
      },
    ],
  },
  {
    slug: "netzbetreiber-finden",
    title: "Meinen Netzbetreiber finden – so geht's",
    metaTitle: "Netzbetreiber finden 2025 – Anleitung & VNB-Finder | EVU-HELD",
    metaDescription:
      "Wer ist mein Netzbetreiber? Wir erklären, wie Sie Ihren zuständigen Verteilnetzbetreiber (VNB) finden und was das für Ihre Netzanmeldung bedeutet.",
    publishedAt: "2025-04-18",
    readingTimeMinutes: 3,
    category: "Ratgeber",
    excerpt:
      "Viele Anlagenbetreiber wissen nicht, wer ihr zuständiger Netzbetreiber ist. Wir zeigen, wie Sie ihn schnell herausfinden und was das für Ihre Anmeldung bedeutet.",
    content: [
      {
        type: "paragraph",
        text: "Bevor eine PV-Anlage, eine Wärmepumpe oder eine Wallbox angemeldet werden kann, muss klar sein: Wer ist eigentlich der zuständige Netzbetreiber? In Deutschland gibt es mehrere hundert Verteilnetzbetreiber (VNB) – je nach Region ist ein anderer zuständig.",
      },
      {
        type: "h2",
        text: "Was ist ein Netzbetreiber (VNB)?",
      },
      {
        type: "paragraph",
        text: "Ein Verteilnetzbetreiber (VNB) betreibt das lokale Stromnetz – die Leitungen, die von den übergeordneten Übertragungsnetzen zu Ihrem Hausanschluss führen. Er ist verantwortlich für die Netzverträglichkeit, die Messung und die Steuerbarkeit von Anlagen.",
      },
      {
        type: "h2",
        text: "Wie finde ich meinen Netzbetreiber?",
      },
      {
        type: "list",
        items: [
          "Über das Tool VNBDigital.de: Postleitzahl eingeben und den zuständigen VNB herausfinden",
          "Auf Ihrer Stromrechnung: Der VNB ist häufig auf der Jahresrechnung vermerkt",
          "Beim Stromanbieter nachfragen: Dieser kann Ihnen den zuständigen VNB nennen",
          "Über die Bundesnetzagentur: Das Register der Netzbetreiber ist öffentlich zugänglich",
        ],
      },
      {
        type: "h2",
        text: "Warum ist der richtige Netzbetreiber so wichtig?",
      },
      {
        type: "paragraph",
        text: "Jeder Netzbetreiber hat eigene Formulare, Anforderungen und Portale für die Anmeldung von Energieanlagen. Wer seinen Antrag an den falschen VNB schickt, muss von vorn beginnen – mit entsprechenden Verzögerungen. Auch die technischen Anforderungen können sich je nach VNB unterscheiden.",
      },
      {
        type: "h2",
        text: "Was tun, wenn der VNB unklar ist?",
      },
      {
        type: "paragraph",
        text: "Wenn Sie unsicher sind, welcher Netzbetreiber für Sie zuständig ist, können wir das für Sie übernehmen. Im Rahmen jeder Anmeldung klären wir den zuständigen VNB, bereiten alle Unterlagen vor und kommunizieren direkt mit dem Netzbetreiber.",
      },
      {
        type: "callout",
        text: "Keine Zeit für die Netzbetreiber-Recherche? Wir ermitteln Ihren VNB und übernehmen die gesamte Anmeldung – bundesweit und vollständig digital.",
      },
    ],
  },
  {
    slug: "baustrom-anmelden",
    title: "Baustrom anmelden – Ablauf, Kosten & Tipps",
    metaTitle: "Baustrom anmelden 2025 – Kosten, Ablauf & Anleitung | EVU-HELD",
    metaDescription:
      "Wie meldet man Baustrom an? Was kostet ein Baustromanschluss? Wir erklären alle Schritte – von der Beantragung beim Netzbetreiber bis zur Abmeldung nach Abschluss der Baustelle.",
    publishedAt: "2025-05-02",
    readingTimeMinutes: 4,
    category: "Ratgeber",
    excerpt:
      "Baustrom ist auf fast jeder Baustelle Pflicht. Wir erklären, wie die Anmeldung beim Netzbetreiber funktioniert, was ein temporärer Anschluss kostet und worauf Sie achten müssen.",
    content: [
      {
        type: "paragraph",
        text: "Ob Neubau, Sanierung oder Modernisierung – auf einer Baustelle wird Strom benötigt. Ein sogenannter Baustromanschluss ermöglicht die temporäre Versorgung der Baustelle mit Netzstrom. Die Anmeldung erfolgt beim zuständigen Netzbetreiber und muss rechtzeitig vor Baubeginn gestellt werden.",
      },
      {
        type: "h2",
        text: "Was ist Baustrom?",
      },
      {
        type: "paragraph",
        text: "Baustrom bezeichnet den temporären Stromanschluss für eine Baustelle. Er wird über einen sogenannten Baustromverteiler (auch Baustromanschlusskasten) bereitgestellt und direkt ans öffentliche Netz angeschlossen. Der Anschluss gilt nur für die Dauer der Baumaßnahme und muss nach Abschluss wieder abgemeldet werden.",
      },
      {
        type: "h2",
        text: "Wer stellt den Antrag auf Baustrom?",
      },
      {
        type: "paragraph",
        text: "Den Antrag auf einen Baustromanschluss stellt in der Regel der Bauherr oder das beauftragte Elektrounternehmen beim zuständigen Netzbetreiber. Die Anmeldung sollte mindestens vier bis sechs Wochen vor Baubeginn erfolgen, da die Bearbeitungszeiten variieren.",
      },
      {
        type: "h2",
        text: "Was wird für die Anmeldung benötigt?",
      },
      {
        type: "list",
        items: [
          "Angabe des Bauvorhabens und der geplanten Laufzeit",
          "Adresse des Anschlussortes und Zählernummer (falls vorhanden)",
          "Angabe der benötigten Anschlussleistung (kW)",
          "Kontaktdaten des Bauherrn und des ausführenden Elektrounternehmens",
          "In manchen Fällen: Lageplan oder Baugenehmigung",
        ],
      },
      {
        type: "h2",
        text: "Was kostet ein Baustromanschluss?",
      },
      {
        type: "paragraph",
        text: "Die Kosten für einen Baustromanschluss setzen sich aus den Anschlusskosten des Netzbetreibers und den Kosten für den verbrauchten Strom zusammen. Je nach Region und Netzbetreiber können die Einmalkosten für den Anschluss zwischen 300 und 800 Euro liegen. Hinzu kommen die laufenden Stromkosten nach Verbrauch.",
      },
      {
        type: "h2",
        text: "Was passiert nach Abschluss der Baumaßnahme?",
      },
      {
        type: "paragraph",
        text: "Nach Abschluss der Baustelle muss der temporäre Anschluss beim Netzbetreiber abgemeldet werden. Der Baustromverteiler wird dann wieder entfernt und der Zähler abgelesen. Erfolgt keine Abmeldung, können weiterhin Grundgebühren anfallen.",
      },
      {
        type: "callout",
        text: "Wir kümmern uns um die Anmeldung Ihres Baustromanschlusses – schnell, unkompliziert und direkt mit dem Netzbetreiber. Starten Sie jetzt Ihre Anfrage.",
      },
    ],
  },
  {
    slug: "elektriker-partner-werden",
    title: "Als Elektriker oder Solarinstallateur Partner werden",
    metaTitle: "Als Elektriker Partner werden – Netzanmeldung auslagern | EVU-HELD",
    metaDescription:
      "Elektriker und Solarinstallateure sparen durch unser Partnermodell bis zu 72 % gegenüber Einzelpreisen. Erfahren Sie, wie das Volumenmodell funktioniert und wie Sie Partner werden.",
    publishedAt: "2025-05-10",
    readingTimeMinutes: 4,
    category: "Ratgeber",
    excerpt:
      "Netzanmeldungen kosten Zeit – Zeit, die Elektriker und Solarinstallateure besser für ihre Kernaufgaben nutzen können. Unser Partnermodell bietet Pauschalen pro Kunde, nicht pro Anmeldung.",
    content: [
      {
        type: "paragraph",
        text: "Für Elektrobetriebe und Solarinstallateure ist die Netzanmeldung von Kundenanlagen ein unvermeidlicher, aber oft zeitaufwendiger Prozess. Jeder Netzbetreiber hat eigene Formulare, Portale und Fristen. Fehler führen zu Ablehnungen und Nachbesserungen – auf Kosten Ihrer Arbeitszeit.",
      },
      {
        type: "h2",
        text: "Das Problem: Bürokratie frisst Kapazitäten",
      },
      {
        type: "paragraph",
        text: "Eine typische Netzanmeldung dauert zwischen 1,5 und 3 Stunden – je nach Netzbetreiber und Komplexität der Anlage. Bei 10 Kunden pro Monat bedeutet das bis zu 30 Stunden reiner Verwaltungsarbeit, die Ihrer Montagekapazität fehlt.",
      },
      {
        type: "h2",
        text: "Unser Partnermodell: pro Kunde, nicht pro Service",
      },
      {
        type: "paragraph",
        text: "Als EVU-HELD-Partner zahlen Sie einen pauschalen Monatspreis für eine definierte Anzahl von Kunden. Dabei spielt es keine Rolle, wie viele einzelne Anmeldungen ein Kunde benötigt: PV, Wärmepumpe und Wallbox zusammen werden als ein Kundenpreis abgerechnet.",
      },
      {
        type: "list",
        items: [
          "5 Kunden/Monat: 750 € (150 €/Kunde)",
          "10 Kunden/Monat: 1.000 € (100 €/Kunde)",
          "20 Kunden/Monat: 1.500 € (75 €/Kunde)",
          "20+ Kunden: Individuelles Angebot auf Anfrage",
        ],
      },
      {
        type: "h2",
        text: "Was ist im Partnerpreis enthalten?",
      },
      {
        type: "list",
        items: [
          "PV-Netzanmeldung inkl. Marktstammdatenregister",
          "Wärmepumpen-Anmeldung nach §14a EnWG",
          "Wallbox-Anmeldung beim Netzbetreiber",
          "Zähleran- und -abmeldung",
          "Vollständige Dokumentation aller Vorgänge",
          "Persönlicher Ansprechpartner für Ihr Unternehmen",
        ],
      },
      {
        type: "h2",
        text: "Wie wird Partner?",
      },
      {
        type: "paragraph",
        text: "Der Einstieg ist unkompliziert: Sie füllen unser Kontaktformular aus oder rufen uns an. Wir besprechen Ihr monatliches Volumen, schließen einen Partnervertrag ab und richten ein dediziertes Kundenkonto für Sie ein. Ab dem ersten Monat können Sie Aufträge direkt weiterleiten.",
      },
      {
        type: "callout",
        text: "Werden Sie jetzt Partner von EVU-HELD und lagern Sie Ihre Netzanmeldungen vollständig aus – für planbare Kosten und mehr Zeit für Ihr Kerngeschäft.",
      },
    ],
  },
];

export const categorySlugMap: Record<string, string> = {
  "PV-Anlage": "pv-anlage",
  "Wärmepumpe": "waermepumpe",
  "Wallbox": "wallbox",
  "Ratgeber": "ratgeber",
};

export const slugCategoryMap: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([name, slug]) => [slug, name])
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
